<script lang="ts">
  import { researchAreas } from '$lib/content/research';
  import { fade } from 'svelte/transition';
  import ResearchCard from '$lib/components/ResearchCard.svelte';
  
  let activeFilter = 'all';
  $: filteredResearch = activeFilter === 'all' 
    ? researchAreas 
    : researchAreas.filter(r => r.category === activeFilter);
</script>

<div class="container mx-auto px-4 py-16">
  <h1 class="text-4xl font-bold mb-8 animate-on-scroll">
    Cutting-Edge Research Areas
  </h1>
  
  <div class="filter-bar mb-12 animate-on-scroll">
    {#each ['all', 'ai', 'biotech', 'energy'] as filter}
      <button 
        class:active={activeFilter === filter}
        on:click={() => activeFilter = filter}
      >
        {filter === 'all' ? 'All' : filter.toUpperCase()}
      </button>
    {/each}
  </div>
  
  <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
    {#each filteredResearch as research (research.id)}
      <div transition:fade>
        <ResearchCard {research} />
      </div>
    {/each}
  </div>
</div>

<style>
  .filter-bar button {
    @apply px-6 py-2 mr-4 rounded-full bg-gray-100 hover:bg-blue-100 
           transition-colors duration-200;
    
    &.active {
      @apply bg-blue-600 text-white;
    }
  }
</style> 