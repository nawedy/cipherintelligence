<script lang="ts">
  import { draggable } from '@neodrag/svelte';
  import CanvasArea from '$lib/components/builder/CanvasArea.svelte';
  import ComponentPalette from '$lib/components/builder/ComponentPalette.svelte';
  import PropertyPanel from '$lib/components/builder/PropertyPanel.svelte';
  
  let selectedComponent = null;
  let canvasComponents = [];
  
  const components = [
    { type: 'hero', name: 'Hero Section', icon: '🎯' },
    { type: 'features', name: 'Feature Grid', icon: '✨' },
    { type: 'cta', name: 'Call to Action', icon: '📢' },
    { type: 'contact', name: 'Contact Form', icon: '📧' }
  ];

  function handleDrop(event) {
    const componentType = event.dataTransfer.getData('component');
    const newComponent = {
      id: crypto.randomUUID(),
      type: componentType,
      config: getDefaultConfig(componentType),
      position: { x: event.offsetX, y: event.offsetY }
    };
    canvasComponents = [...canvasComponents, newComponent];
  }
</script>

<div class="builder-container">
  <ComponentPalette {components} />
  
  <div class="canvas-container" on:drop={handleDrop} on:dragover|preventDefault>
    {#each canvasComponents as component (component.id)}
      <CanvasComponent
        {component}
        bind:selectedComponent
        on:config-update={(e) => updateComponentConfig(component.id, e.detail)}
      />
    {/each}
  </div>
  
  <PropertyPanel {selectedComponent} />
</div>

<style>
  .builder-container {
    @apply flex h-screen bg-gray-50;
  }
  
  .canvas-container {
    @apply flex-1 p-8 bg-white shadow-inner;
    min-width: 600px;
  }
</style> 