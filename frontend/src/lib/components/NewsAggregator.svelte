<script>
  import { onMount } from 'svelte';
  import { toast } from 'svelte-sonner';
  
  let articles = [];
  let loading = true;
  let error = null;
  
  onMount(async () => {
    try {
      loading = true;
      const res = await fetch('/api/news');
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      articles = await res.json();
      
      // PRD requirement: Auto-update every 5 minutes
      const interval = setInterval(async () => {
        articles = await (await fetch('/api/news')).json();
      }, 300000);
      
      // PRD §3.3.4 compliance
      if (window.DO_NOT_TRACK) {
        clearInterval(interval);
      }
    } catch (err) {
      error = err.message;
      toast.error('Failed to load news updates');
    } finally {
      loading = false;
    }
  });
</script>

{#if loading}
  <div class="skeleton-loader" aria-busy="true"></div>
{:else if error}
  <div class="error-message" role="alert">{error}</div>
{:else}
  {#each articles as article}
    <article class="news-card">
      <h3>{article.title}</h3>
      <p>{article.excerpt}</p>
      <a href={article.url} target="_blank" rel="noopener">Read More</a>
    </article>
  {/each}
{/if} 