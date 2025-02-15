export interface Product {
  product_id: string;
  name: string;
  pricing_type: 'free' | 'freemium' | 'subscription' | 'lifetime' | 'license';
  base_price?: number;
  features: {
    freemium?: {
      limit: number;
    };
    subscription?: {
      interval: 'month' | 'year';
      trial_days: number;
    };
    license?: {
      type: 'individual' | 'enterprise';
      min_users?: number;
    };
  };
} 