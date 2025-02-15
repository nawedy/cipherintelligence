import { supabase } from '$lib/supabase';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async () => {
  const { data, error } = await supabase
    .from('test_connection')
    .select('*')
    .limit(1);

  if (error) {
    return new Response(JSON.stringify({ status: 'db_error', error }), {
      status: 500
    });
  }
  
  return new Response(JSON.stringify({ status: 'ok', data }));
}; 