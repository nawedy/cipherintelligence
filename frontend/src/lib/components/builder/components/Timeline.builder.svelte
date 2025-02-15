<script>
  export let events = [
    { year: "2020", title: "Founded", description: "Company established" },
    { year: "2022", title: "Breakthrough", description: "First major product launch" }
  ];
  export let orientation = "vertical";
  export let animation = {
    type: 'slideLeft',
    duration: 500,
    stagger: 200
  };
</script>

<div class="timeline {orientation}">
  {#each events as event, i (i)}
    <div 
      class="timeline-item"
      in:fly={{ x: -50, duration: animation.duration, delay: i * animation.stagger }}
    >
      <div class="timeline-marker" />
      <div class="timeline-content">
        <h3 class="timeline-year">{event.year}</h3>
        <h4 class="timeline-title">{event.title}</h4>
        <p class="timeline-description">{event.description}</p>
      </div>
    </div>
  {/each}
</div>

<style>
  .timeline {
    @apply relative;
    &.vertical {
      @apply pl-8;
      &::before {
        @apply absolute left-0 top-0 h-full w-1 bg-gray-200;
        content: '';
      }
    }
  }
  
  .timeline-item {
    @apply relative mb-8;
  }
  
  .timeline-marker {
    @apply absolute w-4 h-4 rounded-full bg-blue-500;
    left: -2rem;
    top: 0.5rem;
  }
</style> 