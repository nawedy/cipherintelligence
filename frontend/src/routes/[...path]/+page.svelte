<script context="module" lang="ts">
  import type { Load } from '@sveltejs/kit';

  export const load: Load = async ({ url }) => {
    if (url.pathname !== '/') {
      return {
        status: 308,
        redirect: '/'
      };
    }
    return { status: 200 };
  };
</script>

<script lang="ts">
  import { onMount } from 'svelte';
  import { page } from '$app/stores';
  import { navigate } from '$app/navigation';

  onMount(() => {
    if ($page.url.pathname !== '/') {
      navigate('/', { replaceState: true });
    }
  });
</script> 