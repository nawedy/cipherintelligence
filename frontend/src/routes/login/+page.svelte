<script lang="ts">
  import { auth } from '$lib/stores/auth';
  import TwoFactorForm from '$lib/components/auth/TwoFactorForm.svelte';
  
  let show2FA = false;
  let tempToken = '';
  
  async function handleLogin(email: string, password: string) {
    const res = await auth.login(email, password);
    if (res.twofa_required) {
      show2FA = true;
      tempToken = res.token;
    }
  }
</script>

{#if show2FA}
  <TwoFactorForm {tempToken} />
{:else}
  <!-- Regular login form -->
{/if} 