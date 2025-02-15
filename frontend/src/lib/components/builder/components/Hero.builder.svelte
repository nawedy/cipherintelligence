<script>
  export let title = "Welcome to EriEthio";
  export let subtitle = "Innovative Research Solutions";
  export let buttonText = "Get Started";
  export let background = "#f3f4f6";
  export let animation = { 
    type: 'fade', 
    duration: 500, 
    delay: 0 
  };
</script>

<div class="hero-section" style="background: {background}">
  <div 
    class="hero-content"
    in:fly={{ y: 20, duration: animation.duration, delay: animation.delay }}
  >
    <h1 class="hero-title animate-in">{title}</h1>
    <p class="hero-subtitle animate-in">{subtitle}</p>
    <button class="cta-button hover:scale-105 transition-transform">
      {buttonText}
    </button>
  </div>
</div>

<style>
  .hero-section {
    @apply min-h-[60vh] flex items-center justify-center p-8;
  }
  
  .hero-title {
    @apply text-5xl font-bold mb-4;
  }
  
  .hero-subtitle {
    @apply text-xl mb-8;
  }
  
  .animate-in {
    animation: fadeInUp 0.6s ease-out;
  }
  
  @keyframes fadeInUp {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
</style> 