<script lang="ts">
  export let versions: App.VersionHistory[];
</script>

<div class="version-history">
  {#each versions as version}
    <div class="version-card">
      <h3>v{version.version_number} - {version.modified_at}</h3>
      <p>Modified by: {version.modified_by}</p>
      <button on:click={() => restoreVersion(version.id)}>Restore</button>
    </div>
  {/each}
</div> 