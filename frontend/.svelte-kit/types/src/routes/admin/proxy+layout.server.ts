// @ts-nocheck
import { redirect } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';

export const load = async ({ locals: { getSession } }: Parameters<LayoutServerLoad>[0]) => {
  const session = await getSession();

  if (!session) {
    throw redirect(303, '/auth/signin');
  }

  return {
    session
  };
}; 