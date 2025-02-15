<script lang="ts">
  export let product;
  let isHovered = false;
</script>

<div 
  class="card"
  on:mouseenter={() => isHovered = true}
  on:mouseleave={() => isHovered = false}
  animate:flip
>
  <div class="image-container">
    <img 
      src={product.thumbnail} 
      alt={product.name}
      class="hover:scale-105 transition-transform duration-300"
    />
  </div>
  
  <div class="p-4">
    <h3 class="text-xl font-semibold">{product.name}</h3>
    <p class="text-gray-600 mt-2">{product.excerpt}</p>
    
    <div class="mt-4 flex justify-between items-center">
      <span class="text-2xl font-bold">${product.price}</span>
      <button class="cta-button">
        {isHovered ? 'Explore →' : 'View Details'}
      </button>
    </div>
  </div>
</div>

<style>
  .card {
    @apply bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow;
  }
  
  .image-container {
    @apply h-48 bg-gray-100 overflow-hidden;
  }
  
  .cta-button {
    @apply px-6 py-2 bg-blue-600 text-white rounded-full 
           hover:bg-blue-700 transition-colors;
  }
</style> 