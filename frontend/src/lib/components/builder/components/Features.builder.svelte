<script>
  export let features = [
    { title: "Innovation", description: "Cutting-edge research", icon: "🚀" },
    { title: "Security", description: "Enterprise-grade security", icon: "🔒" }
  ];
  export let columns = 3;
  export let animation = { 
    type: 'stagger', 
    duration: 300, 
    delay: 100 
  };
</script>

<div class="features-grid" style="grid-template-columns: repeat({columns}, 1fr)">
  {#each features as feature, i (i)}
    <div 
      class="feature-card"
      in:fly={{ y: 20, duration: animation.duration, delay: i * animation.delay }}
    >
      <div class="feature-icon">{feature.icon}</div>
      <h3 class="feature-title">{feature.title}</h3>
      <p class="feature-description">{feature.description}</p>
    </div>
  {/each}
</div>

<style>
  .features-grid {
    @apply grid gap-8 p-8;
  }
  
  .feature-card {
    @apply bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow;
  }
  
  .feature-icon {
    @apply text-4xl mb-4;
  }
</style> 