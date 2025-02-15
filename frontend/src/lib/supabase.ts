import { createClient } from '@supabase/supabase-js'
import { PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY } from '$env/static/public'

export const supabase = createClient(
  PUBLIC_SUPABASE_URL, 
  PUBLIC_SUPABASE_ANON_KEY, 
  {
    auth: {
      flowType: 'pkce',
      persistSession: true,
      autoRefreshToken: true
    }
  }
)

export function initSupabaseClient() {
  const authListener = supabase.auth.onAuthStateChange((event, session) => {
    // Handler logic
  });

  // Cleanup
  authListener.data?.subscription.unsubscribe();

  return supabase;
} 