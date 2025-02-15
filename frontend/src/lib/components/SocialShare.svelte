<script>
  export let url = '';
  export let title = 'Check this out from EriEthio Research';
  
  const share = async () => {
    try {
      await navigator.share({
        title: 'EriEthio Research',
        text: title,
        url
      });
    } catch (err) {
      console.log('Share cancelled:', err);
    }
  };
</script>

<button on:click={share} class="social-share-btn" aria-label="Share content securely">
  <svg><!-- Secure share icon --></svg>
  <span class="sr-only">Share</span>
</button>

<style>
  .social-share-btn {
    @apply p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors;
  }
</style> 