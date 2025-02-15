<script lang="ts">
  import { onDestroy } from 'svelte';
  import { resetError, error } from '$lib/stores/error';

  let componentError: Error | null = null;

  const unsubscribe = error.subscribe(err => {
    componentError = err;
  });

  onDestroy(unsubscribe);
</script>

{#if componentError}
  <div class="error-boundary">
    <h2>Something went wrong</h2>
    <p>{componentError.message}</p>
    <button on:click={resetError}>Try Again</button>
  </div>
{:else}
  <slot />
{/if} 