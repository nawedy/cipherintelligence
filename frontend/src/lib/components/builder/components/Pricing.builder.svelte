<script>
  export let plans = [
    { name: "Starter", price: "$300", features: ["Simple and powerful", "Profit Target: $6,000", "Max Position: 10 contracts"], buttonText: "Choose Starter Plan" },
    { name: "Expert", price: "$375", features: ["Advanced features", "Profit Target: $8,000", "Max Position: 15 contracts"], buttonText: "Choose Expert Plan" },
    { name: "Pro", price: "$450", features: ["All features", "Profit Target: $10,000", "Max Position: 20 contracts"], buttonText: "Choose Pro Plan" }
  ];
  export let background = "#0a0a23"; // Use your color palette
  export let textColor = "#ffffff"; // Use your color palette
</script>

<div class="pricing-section" style="background: {background}; color: {textColor}">
  <div class="plans">
    {#each plans as plan, i (i)}
      <div 
        class="plan-card"
        in:fly={{ y: 20, duration: 500, delay: i * 100 }}
      >
        <h3 class="plan-name">{plan.name}</h3>
        <p class="plan-price">{plan.price} / month</p>
        <ul class="plan-features">
          {#each plan.features as feature}
            <li>{feature}</li>
          {/each}
        </ul>
        <button class="plan-button">{plan.buttonText}</button>
      </div>
    {/each}
  </div>
</div>

<style>
  .pricing-section {
    @apply p-16 text-center;
  }
  
  .plans {
    @apply flex justify-center gap-8 flex-wrap;
  }
  
  .plan-card {
    @apply bg-opacity-80 p-6 rounded-lg shadow-lg max-w-xs;
    background: rgba(255, 255, 255, 0.1);
    transition: transform 0.3s ease;
  }
  
  .plan-card:hover {
    transform: scale(1.05);
  }
  
  .plan-name {
    @apply text-xl font-bold mb-2;
  }
  
  .plan-price {
    @apply text-2xl mb-4;
  }
  
  .plan-features {
    @apply mb-4 text-left;
  }
  
  .plan-button {
    @apply bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600;
  }
</style> 