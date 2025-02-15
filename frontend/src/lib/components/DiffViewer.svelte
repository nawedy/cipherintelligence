<script lang="ts">
  import { diffWords } from 'diff';

  export let oldText: string;
  export let newText: string;
  
  $: diffs = diffWords(oldText, newText);
</script>

<div class="diff-container">
  {#each diffs as d}
    <span class:added={d.added} class:removed={d.removed}>
      {d.value}
    </span>
  {/each}
</div> 