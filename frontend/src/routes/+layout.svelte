<script lang="ts">
  import { onMount } from 'svelte';
  import { PUBLIC_GA_ID } from '$env/static/public';
  import { gsap } from 'gsap';
  import { ScrollTrigger } from 'gsap/ScrollTrigger';

  onMount(() => {
    if (typeof window !== 'undefined' && PUBLIC_GA_ID) {
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', PUBLIC_GA_ID);
    }
  });

  gsap.registerPlugin(ScrollTrigger);
</script>

<svelte:head>
  <script async src={`https://www.googletagmanager.com/gtag/js?id=${PUBLIC_GA_ID}`}></script>
</svelte:head>

<style global>
  /* Animation Classes */
  .scale-up {
    transform: scale(0.95);
    opacity: 0;
    transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
    
    &.active {
      transform: scale(1);
      opacity: 1;
    }
  }

  .slide-left {
    transform: translateX(50px);
    opacity: 0;
    transition: all 0.4s ease-out;
    
    &.active {
      transform: translateX(0);
      opacity: 1;
    }
  }
</style>

<slot /> 