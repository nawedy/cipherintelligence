<script lang="ts">
  import { onMount } from 'svelte';
  import EditorJS from '@editorjs/editorjs';
  import Header from '@editorjs/header';
  import List from '@editorjs/list';
  import ImageTool from '@editorjs/image';
  
  let editor;
  let pageContent = {};
  
  onMount(async () => {
    editor = new EditorJS({
      holder: 'editor',
      tools: {
        header: Header,
        list: List,
        image: {
          class: ImageTool,
          config: {
            endpoints: {
              byFile: '/api/cms/upload'
            }
          }
        }
      },
      data: pageContent
    });
  });
  
  async function saveContent() {
    const output = await editor.save();
    const res = await fetch(`/api/cms/pages/${currentPage}`, {
      method: 'POST',
      body: JSON.stringify({ content: output })
    });
  }
</script>

<div id="editor" class="min-h-screen p-8" />
<button on:click={saveContent} class="fixed bottom-4 right-4 btn-primary">
  Save Changes
</button>

<style>
  .ce-block__content {
    max-width: 800px;
    margin: 0 auto;
  }
</style> 