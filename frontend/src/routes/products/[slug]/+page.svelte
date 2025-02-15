<script lang="ts">
  import { flip } from 'svelte/animate';
  import { ProductGallery, PricingOptions } from '$lib/components/product';
  export let data;
  
  let selectedVariant = data.product.variants[0];
  let activeTab = 'description';
</script>

<div class="max-w-7xl mx-auto px-4 py-12">
  <div class="grid lg:grid-cols-2 gap-12">
    <ProductGallery images={data.product.images} />
    
    <div class="space-y-6">
      <h1 class="text-4xl font-bold">{data.product.name}</h1>
      
      <PricingOptions 
        variants={data.product.variants} 
        bind:selectedVariant
      />
      
      <div class="tabs">
        <button 
          class:active={activeTab === 'description'}
          on:click={() => activeTab = 'description'}
        >
          Description
        </button>
        <button 
          class:active={activeTab === 'specs'}
          on:click={() => activeTab = 'specs'}
        >
          Technical Specs
        </button>
      </div>
      
      <div class="content">
        {#if activeTab === 'description'}
          <div animate:flip>{@html data.product.description}</div>
        {:else}
          <div animate:flip>
            {#each data.product.specs as spec}
              <div class="spec-item">
                <span>{spec.name}</span>
                <span>{spec.value}</span>
              </div>
            {/each}
          </div>
        {/if}
      </div>
    </div>
  </div>
</div> 