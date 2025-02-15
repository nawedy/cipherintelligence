<script lang="ts">
  import { requireAdmin } from '$lib/utils/auth';
  import CMSNav from '$lib/components/admin/CMSNav.svelte';
  
  export async function load() {
    await requireAdmin();
  }
</script>

<div class="admin-layout">
  <CMSNav />
  <main class="admin-content">
    <slot />
  </main>
</div>

<style>
  .admin-layout {
    @apply flex min-h-screen;
  }
  
  .admin-content {
    @apply flex-1 p-8 ml-64;
  }
</style> 