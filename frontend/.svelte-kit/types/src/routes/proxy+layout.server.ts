// @ts-nocheck
import type { LayoutServerLoad } from './$types';

export const load = async ({ locals }: Parameters<LayoutServerLoad>[0]) => {
  const session = await locals.getSession();
  
  return {
    session,
    user: session?.user ? {
      id: session.user.id,
      email: session.user.email,
      role: session.user.app_metadata.role || 'user'
    } : null
  };
}; 