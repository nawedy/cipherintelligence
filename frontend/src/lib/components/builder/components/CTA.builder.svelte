<script>
  export let title = "Start Your Journey Today";
  export let buttonText = "Join Now";
  export let layout = "centered";
  export let animation = {
    type: 'pulse',
    intensity: 0.1,
    duration: 1000
  };
</script>

<div class="cta-section {layout}">
  <h2 class="cta-title animate-pulse">{title}</h2>
  <button 
    class="cta-button"
    style="animation: pulse {animation.duration}ms infinite"
  >
    {buttonText}
  </button>
</div>

<style>
  .cta-section {
    @apply bg-blue-600 text-white p-12 rounded-xl text-center;
    &.centered { @apply mx-auto max-w-4xl; }
  }
  
  .cta-title {
    @apply text-3xl font-bold mb-6;
  }
  
  @keyframes pulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.05); }
  }
</style> 