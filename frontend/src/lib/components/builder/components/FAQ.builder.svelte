<script>
  export let faqs = [
    { question: "Who can trade here?", answer: "Anyone with a valid account can trade." },
    { question: "What is End-of-Day Trailing Drawdown? (EOD)", answer: "EOD is a risk management feature." },
    { question: "What assets can I trade?", answer: "You can trade a variety of assets including stocks and forex." }
  ];
  export let background = "#0a0a23"; // Use your color palette
  export let textColor = "#ffffff"; // Use your color palette
  let activeIndex = null;

  function toggle(index) {
    activeIndex = activeIndex === index ? null : index;
  }
</script>

<div class="faq-section" style="background: {background}; color: {textColor}">
  <h2 class="section-title">All answers to the most popular questions</h2>
  <p class="section-subtitle">Did not find the answer you were looking for? More questions and answers on our FAQ page.</p>
  
  <div class="faqs">
    {#each faqs as faq, i (i)}
      <div class="faq-item" on:click={() => toggle(i)}>
        <div class="faq-question">
          {faq.question}
          <span class="faq-toggle">{activeIndex === i ? '-' : '+'}</span>
        </div>
        {#if activeIndex === i}
          <div class="faq-answer">{faq.answer}</div>
        {/if}
      </div>
    {/each}
  </div>
</div>

<style>
  .faq-section {
    @apply p-16 text-left;
  }
  
  .section-title {
    @apply text-4xl font-bold mb-4;
  }
  
  .section-subtitle {
    @apply text-lg mb-12;
  }
  
  .faqs {
    @apply space-y-4;
  }
  
  .faq-item {
    @apply cursor-pointer p-4 bg-opacity-80 rounded-lg shadow-lg;
    background: rgba(255, 255, 255, 0.1);
    transition: background 0.3s ease;
  }
  
  .faq-item:hover {
    background: rgba(255, 255, 255, 0.2);
  }
  
  .faq-question {
    @apply flex justify-between items-center text-xl font-semibold;
  }
  
  .faq-answer {
    @apply mt-2 text-base;
  }
  
  .faq-toggle {
    @apply text-2xl;
  }
</style> 