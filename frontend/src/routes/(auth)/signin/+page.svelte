<script lang="ts">
  import AuthForm from '$lib/components/auth/AuthForm.svelte';
  import { PUBLIC_SITE_NAME } from '$env/static/public';
</script>

<svelte:head>
  <title>Sign In - {PUBLIC_SITE_NAME}</title>
  <meta name="description" content="Sign in to your account" />
</svelte:head>

<AuthForm mode="signin" /> 