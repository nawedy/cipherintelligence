<script>
  export let title = "The Intelligent Copilot for Solana";
  export let subtitle = "Elevate your Solana experience with AI-powered insights and delegated actions";
  export let buttonText = "Getting Started";
  export let videoUrl = "https://your-video-url.com"; // Replace with your video URL
  export let background = "#0a0a23"; // Use your color palette
  export let textColor = "#ffffff"; // Use your color palette
</script>

<div class="hero-section" style="background: {background}; color: {textColor}">
  <div class="content">
    <h1 class="hero-title">{title}</h1>
    <p class="hero-subtitle">{subtitle}</p>
    <button class="cta-button">{buttonText}</button>
  </div>
  
  <div class="media-frame">
    <video src={videoUrl} controls class="video-player"></video>
    <!-- Alternatively, use an image -->
    <!-- <img src="your-image-url.jpg" alt="Description" class="image-frame" /> -->
  </div>
</div>

<style>
  .hero-section {
    @apply flex flex-col items-center justify-center p-16 text-center;
  }
  
  .content {
    @apply mb-8;
  }
  
  .hero-title {
    @apply text-5xl font-bold mb-4;
  }
  
  .hero-subtitle {
    @apply text-xl mb-8;
  }
  
  .cta-button {
    @apply bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600;
  }
  
  .media-frame {
    @apply mt-8;
  }
  
  .video-player, .image-frame {
    @apply max-w-full rounded-lg shadow-lg;
  }
</style> 