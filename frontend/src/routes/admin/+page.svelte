<script lang="ts">
  import { page } from '$app/stores';
  import { supabase } from '$lib/supabase';
  import toast from 'svelte-french-toast';

  async function handleSignOut() {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      toast.success('Signed out successfully');
    } catch (error) {
      toast.error('Error signing out');
    }
  }
</script>

<svelte:head>
  <title>Admin Dashboard</title>
</svelte:head>

<div class="py-6">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
    <h1 class="text-2xl font-semibold text-gray-900">Dashboard</h1>
  </div>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
    <div class="py-4">
      <div class="border-4 border-dashed border-gray-200 rounded-lg h-96 p-4">
        <div class="flex justify-between items-center">
          <div>
            <p class="text-gray-500">Welcome back,</p>
            <p class="text-lg font-medium text-gray-900">{$page.data.session?.user?.email}</p>
          </div>
          <button
            type="button"
            class="btn-secondary"
            on:click={handleSignOut}
          >
            Sign Out
          </button>
        </div>
        
        <!-- Placeholder for admin features -->
        <div class="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div class="card">
            <h3 class="text-lg font-medium text-gray-900">Content Management</h3>
            <p class="mt-1 text-sm text-gray-500">
              Manage your website content, blog posts, and pages.
            </p>
            <a href="/admin/content" class="mt-4 btn">
              Manage Content
            </a>
          </div>
          
          <div class="card">
            <h3 class="text-lg font-medium text-gray-900">User Management</h3>
            <p class="mt-1 text-sm text-gray-500">
              Manage user accounts and permissions.
            </p>
            <a href="/admin/users" class="mt-4 btn">
              Manage Users
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div> 