<script lang="ts">
  import ContentEditor from '$lib/components/admin/ContentEditor.svelte';
  import { contentSections } from '$lib/stores/cms';
  
  let activeSection = 'research';
</script>

<div class="admin-layout">
  <aside class="sidebar">
    {#each Object.keys($contentSections) as section}
      <button 
        class:active={activeSection === section}
        on:click={() => activeSection = section}
      >
        {section}
      </button>
    {/each}
  </aside>
  
  <main class="content-area">
    <ContentEditor section={activeSection} />
  </main>
</div> 