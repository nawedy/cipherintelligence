<script lang="ts">
  import { auth } from '$lib/stores/auth';
  import ContentEditor from '$lib/components/admin/ContentEditor.svelte';
  import ContentList from '$lib/components/admin/ContentList.svelte';
</script>

{#if $auth?.role === 'admin'}
  <main class="cms-dashboard">
    <ContentEditor />
    <ContentList />
  </main>
{:else}
  <p>Unauthorized access</p>
{/if} 