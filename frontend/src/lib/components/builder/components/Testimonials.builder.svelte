<script>
  export let testimonials = [
    { name: "John", text: "Got my 5k challenge account under 2 minutes...", rating: 5 },
    { name: "Steve", text: "Thanks A, good step I made when I chose Mffx...", rating: 5 }
  ];
  export let background = "#0a0a23"; // Use your color palette
  export let textColor = "#ffffff"; // Use your color palette
</script>

<div class="testimonial-section" style="background: {background}; color: {textColor}">
  <h2 class="section-title">Loved by traders worldwide</h2>
  <p class="section-subtitle">Simplicity is easy when you just skip tons of mission-critical features.</p>
  
  <div class="testimonials">
    {#each testimonials as testimonial}
      <div class="testimonial-card">
        <p class="testimonial-text">{testimonial.text}</p>
        <div class="testimonial-footer">
          <span class="testimonial-name">{testimonial.name}</span>
          <span class="testimonial-rating">{"★".repeat(testimonial.rating)}</span>
        </div>
      </div>
    {/each}
  </div>
</div>

<style>
  .testimonial-section {
    @apply p-16 text-center;
  }
  
  .section-title {
    @apply text-4xl font-bold mb-4;
  }
  
  .section-subtitle {
    @apply text-lg mb-12;
  }
  
  .testimonials {
    @apply flex justify-center gap-8 flex-wrap;
  }
  
  .testimonial-card {
    @apply bg-opacity-80 p-6 rounded-lg shadow-lg max-w-xs;
    background: rgba(255, 255, 255, 0.1);
  }
  
  .testimonial-text {
    @apply mb-4;
  }
  
  .testimonial-footer {
    @apply flex justify-between items-center;
  }
  
  .testimonial-name {
    @apply font-semibold;
  }
  
  .testimonial-rating {
    @apply text-yellow-400;
  }
</style> 