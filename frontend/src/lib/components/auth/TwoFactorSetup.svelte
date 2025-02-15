<script lang="ts">
  let secret = "";
  let qrCodeUrl = "";
  let recoveryCodes: string[] = [];
  
  async function setup2FA() {
    const res = await fetch("/api/2fa/setup", { method: "POST" });
    const data = await res.json();
    secret = data.secret;
    qrCodeUrl = data.qr_code;
    recoveryCodes = data.recovery_codes;
  }
</script>

{#if secret}
  <img src={qrCodeUrl} alt="2FA QR Code" />
  <p>Secret: {secret}</p>
  <div class="recovery-codes">
    {#each recoveryCodes as code}
      <code>{code}</code>
    {/each}
  </div>
{:else}
  <button on:click={setup2FA}>Enable 2FA</button>
{/if} 