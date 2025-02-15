<script lang="ts">
  import { onMount } from 'svelte'
  import EditorJS from '@editorjs/editorjs'
  import { getPageContent, savePageContent } from '$lib/cms'
  
  export let data
  
  let editor
  let pageId = data.params.page_id
  let content = data.content
  
  onMount(async () => {
    editor = new EditorJS({
      holder: 'editor',
      tools: {
        header: {
          class: (await import('@editorjs/header')).default,
          config: {
            placeholder: 'Enter heading...'
          }
        },
        image: {
          class: (await import('@editorjs/image')).default,
          config: {
            endpoints: {
              byFile: '/api/cms/media'
            }
          }
        }
      },
      data: content
    })
  })
  
  async function handleSave() {
    const output = await editor.save()
    await savePageContent(pageId, output)
  }
</script>

<div class="editor-container">
  <div id="editor" />
  <button on:click={handleSave} class="save-button">
    Save Changes
  </button>
</div>

<style>
  .editor-container {
    max-width: 800px;
    margin: 0 auto;
    padding: 2rem;
  }
  
  .save-button {
    margin-top: 1rem;
    padding: 0.5rem 1rem;
    background: #2563eb;
    color: white;
    border-radius: 4px;
  }
</style> 