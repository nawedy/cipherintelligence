-- Enums
create type pricing_type as enum ('free', 'freemium', 'subscription', 'lifetime', 'license');
create type payment_method as enum ('credit_card', 'bank_transfer', 'crypto', 'mobile_money');
create type subscription_status as enum ('active', 'canceled', 'paused', 'expired');
create type license_type as enum ('individual', 'enterprise');

-- Dimension Tables
create table dim_date (
    date_id serial primary key,
    full_date date not null,
    day integer not null,
    month integer not null,
    year integer not null,
    quarter integer not null,
    week_number integer not null
);

create table dim_product_category (
    category_id serial primary key,
    name varchar(255) not null,
    description text,
    parent_category_id integer references dim_product_category(category_id)
);

-- Fact Tables
create table payments (
    payment_id uuid primary key default uuid_generate_v4(),
    user_id uuid references auth.users(id) not null,
    amount numeric(12,2) not null,
    currency varchar(3) not null default 'USD',
    payment_method payment_method not null,
    transaction_id varchar(255),
    created_at timestamp with time zone default now(),
    invoice_url varchar(255),
    status varchar(50) not null
);

create table subscriptions (
    subscription_id uuid primary key default uuid_generate_v4(),
    user_id uuid references auth.users(id) not null,
    product_id uuid references products(product_id) not null,
    payment_id uuid references payments(payment_id),
    start_date date not null,
    end_date date not null,
    auto_renew boolean not null default true,
    status subscription_status not null default 'active',
    created_at timestamp with time zone default now()
);

-- Core Tables
create table products (
    product_id uuid primary key default uuid_generate_v4(),
    name varchar(255) not null,
    description text not null,
    base_price numeric(12,2),
    pricing_type pricing_type not null,
    category_id integer references dim_product_category(category_id),
    
    -- Subscription-specific fields
    subscription_interval interval,
    trial_period_days integer,
    
    -- Licensing fields
    license_type license_type,
    enterprise_min_users integer,
    
    -- Freemium fields
    freemium_limit integer,
    
    created_at timestamp with time zone default now(),
    updated_at timestamp with time zone default now()
);

create table user_profile (
    profile_id uuid primary key references auth.users(id),
    first_name varchar(100),
    last_name varchar(100),
    company_name varchar(255),
    tax_id varchar(100),
    billing_address jsonb,
    shipping_address jsonb,
    customer_id varchar(255) unique,
    created_at timestamp with time zone default now(),
    updated_at timestamp with time zone default now()
);

create table licenses (
    license_id uuid primary key default uuid_generate_v4(),
    product_id uuid references products(product_id) not null,
    user_id uuid references auth.users(id) not null,
    license_key varchar(255) not null unique,
    license_type license_type not null,
    valid_from date not null,
    valid_to date,
    max_users integer,
    is_active boolean default true,
    created_at timestamp with time zone default now()
);

-- Security Policies
alter table payments enable row level security;
alter table subscriptions enable row level security;
alter table user_profile enable row level security;
alter table licenses enable row level security;

create policy "Users can manage their own payments"
on payments for all
using (auth.uid() = user_id);

create policy "Users can manage their subscriptions"
on subscriptions for all
using (auth.uid() = user_id);

create policy "Users can view their profile"
on user_profile for select
using (auth.uid() = profile_id);

-- Indexes
create index idx_products_pricing_type on products(pricing_type);
create index idx_subscriptions_user on subscriptions(user_id);
create index idx_licenses_product on licenses(product_id);

-- First create the content_creators table since it will be referenced by others
CREATE TABLE content_creators (
    author_id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(255) NOT NULL,
    bio TEXT,
    profile_picture_url VARCHAR(255),
    auth_user_id UUID REFERENCES auth.users(id), -- Renamed to be more explicit
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Then create the research table with correct reference
CREATE TABLE research (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title VARCHAR(255) NOT NULL,
    abstract TEXT,
    content TEXT NOT NULL,
    author_id UUID REFERENCES content_creators(author_id),
    status VARCHAR(50) DEFAULT 'draft',
    published_at TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create the blog table with correct reference
CREATE TABLE blog (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title VARCHAR(255) NOT NULL,
    summary TEXT,
    content TEXT NOT NULL,
    author_id UUID REFERENCES content_creators(author_id),
    status VARCHAR(50) DEFAULT 'draft',
    published_at TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Add indexes for better query performance
CREATE INDEX idx_research_author ON research(author_id);
CREATE INDEX idx_blog_author ON blog(author_id);
CREATE INDEX idx_content_status ON research(status);
CREATE INDEX idx_blog_status ON blog(status);
CREATE INDEX idx_creator_auth_user ON content_creators(auth_user_id);

-- Enable RLS
ALTER TABLE content_creators ENABLE ROW LEVEL SECURITY;
ALTER TABLE research ENABLE ROW LEVEL SECURITY;
ALTER TABLE blog ENABLE ROW LEVEL SECURITY;

-- Create policies for content_creators
CREATE POLICY "Content creators can view any profile"
    ON content_creators FOR SELECT
    TO authenticated
    USING (true);

CREATE POLICY "Content creators can manage their own profile"
    ON content_creators FOR ALL
    TO authenticated
    USING (auth_user_id = auth.uid());

-- Create policies for research
CREATE POLICY "Anyone can read published research"
    ON research FOR SELECT
    TO authenticated
    USING (status = 'published');

CREATE POLICY "Authors can manage their research"
    ON research FOR ALL
    TO authenticated
    USING (author_id IN (
        SELECT author_id FROM content_creators 
        WHERE auth_user_id = auth.uid()
    ));

-- Create policies for blog
CREATE POLICY "Anyone can read published blog posts"
    ON blog FOR SELECT
    TO authenticated
    USING (status = 'published');

CREATE POLICY "Authors can manage their blog posts"
    ON blog FOR ALL
    TO authenticated
    USING (author_id IN (
        SELECT author_id FROM content_creators 
        WHERE auth_user_id = auth.uid()
    )); 