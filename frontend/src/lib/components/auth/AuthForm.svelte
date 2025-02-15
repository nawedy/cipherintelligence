<script lang="ts">
  import { enhance } from '$app/forms';
  import { supabase } from '$lib/supabase';
  import { page } from '$app/stores';
  import toast from 'svelte-french-toast';

  export let mode: 'signin' | 'signup' = 'signin';
  
  let loading = false;
  let email = '';
  let password = '';

  async function handleSubmit() {
    loading = true;
    try {
      if (mode === 'signin') {
        const { error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });
        if (error) throw error;
        toast.success('Welcome back!');
      } else {
        const { error } = await supabase.auth.signUp({
          email,
          password,
        });
        if (error) throw error;
        toast.success('Check your email for the confirmation link!');
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      loading = false;
    }
  }
</script>

<div class="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
  <div class="sm:mx-auto sm:w-full sm:max-w-md">
    <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
      {mode === 'signin' ? 'Sign in to your account' : 'Create your account'}
    </h2>
    <p class="mt-2 text-center text-sm text-gray-600">
      {#if mode === 'signin'}
        Don't have an account?
        <a href="/auth/signup" class="font-medium text-primary-600 hover:text-primary-500">
          Sign up
        </a>
      {:else}
        Already have an account?
        <a href="/auth/signin" class="font-medium text-primary-600 hover:text-primary-500">
          Sign in
        </a>
      {/if}
    </p>
  </div>

  <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
    <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
      <form class="space-y-6" on:submit|preventDefault={handleSubmit}>
        <div>
          <label for="email" class="block text-sm font-medium text-gray-700">
            Email address
          </label>
          <div class="mt-1">
            <input
              id="email"
              name="email"
              type="email"
              autocomplete="email"
              required
              bind:value={email}
              class="input"
            />
          </div>
        </div>

        <div>
          <label for="password" class="block text-sm font-medium text-gray-700">
            Password
          </label>
          <div class="mt-1">
            <input
              id="password"
              name="password"
              type="password"
              autocomplete={mode === 'signin' ? 'current-password' : 'new-password'}
              required
              bind:value={password}
              class="input"
            />
          </div>
        </div>

        {#if mode === 'signin'}
          <div class="flex items-center justify-between">
            <div class="text-sm">
              <a href="/auth/reset-password" class="font-medium text-primary-600 hover:text-primary-500">
                Forgot your password?
              </a>
            </div>
          </div>
        {/if}

        <div>
          <button
            type="submit"
            class="btn w-full"
            disabled={loading}
          >
            {#if loading}
              <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
                <path
                  class="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
            {/if}
            {mode === 'signin' ? 'Sign in' : 'Sign up'}
          </button>
        </div>
      </form>

      <div class="mt-6">
        <div class="relative">
          <div class="absolute inset-0 flex items-center">
            <div class="w-full border-t border-gray-300" />
          </div>
          <div class="relative flex justify-center text-sm">
            <span class="px-2 bg-white text-gray-500">Or continue with</span>
          </div>
        </div>

        <div class="mt-6 grid grid-cols-1 gap-3">
          <button
            type="button"
            class="btn-secondary w-full"
            on:click={() => supabase.auth.signInWithOAuth({ provider: 'github' })}
          >
            <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path
                fill-rule="evenodd"
                d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                clip-rule="evenodd"
              />
            </svg>
            GitHub
          </button>
        </div>
      </div>
    </div>
  </div>
</div> 