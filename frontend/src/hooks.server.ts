import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
  const response = await resolve(event);
  return response;
};

// Type augmentation for session data
declare global {
  namespace App {
    interface Locals {
      user: App.UserSession | null;
    }
  }
} 