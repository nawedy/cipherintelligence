<script lang="ts">
  import { apiFetch } from '$lib/api/client';
  import ApprovalItem from '$lib/components/admin/ApprovalItem.svelte';
  
  let pendingContent: App.CMSContent[] = [];
  
  async function loadPending() {
    pendingContent = await apiFetch('/api/approvals/pending');
  }
  
  async function approve(contentId: number) {
    await apiFetch(`/api/approvals/${contentId}/approve`, { method: 'POST' });
    await loadPending();
  }
</script>

<button on:click={loadPending}>Refresh</button>

{#each pendingContent as content}
  <ApprovalItem {content} on:approve={approve(content.id)} />
{/each} 