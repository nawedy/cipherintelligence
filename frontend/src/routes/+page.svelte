<script lang="ts">
  import { onMount } from 'svelte';
  import { gsap } from 'gsap';
  import { ScrollTrigger } from 'gsap/ScrollTrigger';
  import HeroSection from '$lib/components/Hero.svelte';
  import FeatureGrid from '$lib/components/FeatureGrid.svelte';
  
  gsap.registerPlugin(ScrollTrigger);
  
  onMount(() => {
    gsap.utils.toArray('.animate-on-scroll').forEach((element) => {
      ScrollTrigger.create({
        trigger: element,
        start: "top 80%",
        onEnter: () => element.classList.add('active')
      });
    });
  });
</script>

<script>
  const features = [
    {
      name: 'SecuredAI',
      description: 'Built-in encryption and compliance for AI models, ensuring your data stays protected.',
      href: '/services/secured-ai',
      icon: '🔒'
    },
    {
      name: 'EnsembleAI',
      description: 'Multi-model intelligence for smarter decision-making and improved accuracy.',
      href: '/services/ensemble-ai',
      icon: '🤖'
    },
    {
      name: 'SuperCoderAI',
      description: 'Automated coding that accelerates development cycles and reduces errors.',
      href: '/services/super-coder-ai',
      icon: '💻'
    }
  ];
</script>

<svelte:head>
  <title>EriEthio Research - Privacy-First AI Solutions</title>
  <meta name="description" content="Empowering businesses with secure, efficient, and ethical AI solutions." />
</svelte:head>

<div class="bg-white">
  <!-- Hero section -->
  <div class="relative isolate overflow-hidden">
    <div class="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40">
      <div class="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-8">
        <h1 class="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          Empowering Secure & Ethical AI for Tomorrow
        </h1>
        <p class="mt-6 text-lg leading-8 text-gray-600">
          We specialize in advanced AI and data science that puts privacy, security, and efficiency at the forefront.
        </p>
        <div class="mt-10 flex items-center gap-x-6">
          <a href="/contact" class="btn">Get Started</a>
          <a href="/services" class="text-sm font-semibold leading-6 text-gray-900">
            Learn more <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </div>
  </div>

  <!-- Feature section -->
  <div class="mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32">
    <div class="mx-auto max-w-2xl lg:text-center">
      <h2 class="text-base font-semibold leading-7 text-primary-600">AI Solutions</h2>
      <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        Everything you need to implement AI securely
      </p>
      <p class="mt-6 text-lg leading-8 text-gray-600">
        Our suite of AI products helps businesses automate workflows, reduce operational costs, and ensure data protection standards.
      </p>
    </div>
    <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
      <dl class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
        {#each features as feature}
          <div class="flex flex-col">
            <dt class="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
              <div class="h-5 w-5 flex-none text-primary-600">
                {feature.icon}
              </div>
              {feature.name}
            </dt>
            <dd class="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
              <p class="flex-auto">{feature.description}</p>
              <p class="mt-6">
                <a href={feature.href} class="text-sm font-semibold leading-6 text-primary-600">
                  Learn more <span aria-hidden="true">→</span>
                </a>
              </p>
            </dd>
          </div>
        {/each}
      </dl>
    </div>
  </div>
</div>

<style global>
  .animate-on-scroll {
    opacity: 0;
    transform: translateY(20px);
    transition: all 0.6s ease-out;
    
    &.active {
      opacity: 1;
      transform: translateY(0);
    }
  }
</style> 