<script lang="ts">
  import { onMount } from 'svelte';
  import { gsap } from 'gsap';
  import { ScrollTrigger } from 'gsap/ScrollTrigger';
  import HeroSection from '$lib/components/Hero.svelte';
  import FeatureGrid from '$lib/components/FeatureGrid.svelte';
  
  gsap.registerPlugin(ScrollTrigger);
  
  onMount(() => {
    gsap.utils.toArray('.animate-on-scroll').forEach((element) => {
      ScrollTrigger.create({
        trigger: element,
        start: "top 80%",
        onEnter: () => element.classList.add('active')
      });
    });
  });
</script>

<svelte:head>
  <title>EriEthio Research - Innovating Tomorrow</title>
</svelte:head>

<HeroSection />
<FeatureGrid />

<style global>
  .animate-on-scroll {
    opacity: 0;
    transform: translateY(20px);
    transition: all 0.6s ease-out;
    
    &.active {
      opacity: 1;
      transform: translateY(0);
    }
  }
</style> 