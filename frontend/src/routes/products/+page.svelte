<script lang="ts">
  import ProductCard from '$lib/components/ProductCard.svelte';
  import { fade } from 'svelte/transition';
  import { products } from '$lib/stores/products';
  
  let searchQuery = '';
  $: filteredProducts = $products.filter(p => 
    p.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
</script>

<div class="container mx-auto px-4 py-16">
  <h1 class="text-4xl font-bold mb-8">Our Research Solutions</h1>
  
  <input 
    type="text" 
    bind:value={searchQuery}
    placeholder="Search products..."
    class="mb-8 p-3 w-full max-w-md rounded-lg border border-gray-200"
  />
  
  <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
    {#each filteredProducts as product (product.id)}
      <div transition:fade>
        <ProductCard {product} />
      </div>
    {/each}
  </div>
</div> 