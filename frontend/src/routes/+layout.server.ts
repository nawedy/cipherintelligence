import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ locals }) => {
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