import { PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY } from '$env/static/public';
import { createServerClient } from '@supabase/ssr';
import type { Handle } from '@sveltejs/kit';
// import * as Sentry from '@sentry/node';

export const handle: Handle = async ({ event, resolve }) => {
  event.locals.supabase = createServerClient(
    PUBLIC_SUPABASE_URL,
    PUBLIC_SUPABASE_ANON_KEY,
    {
      cookies: {
        get: (key) => event.cookies.get(key),
        set: (key, value, options) => event.cookies.set(key, value, options),
        remove: (key, options) => event.cookies.delete(key, options)
      }
    }
  );

  /**
   * A convenience helper so we can just call await getSession() instead of
   * await getSession(event.cookies)
   */
  event.locals.getSession = async () => {
    const {
      data: { session },
    } = await event.locals.supabase.auth.getSession();
    return session;
  };

  const response = await resolve(event, {
    filterSerializedResponseHeaders(name) {
      return name === 'content-range';
    },
  });

  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('Permissions-Policy', 'interest-cohort=()');
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  response.headers.set('Content-Security-Policy', 
    "default-src 'self'; script-src 'self' 'unsafe-eval' *.supabase.co; connect-src 'self' *.supabase.co; style-src 'self' 'unsafe-inline'; img-src 'self' data:;");

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

// Comment out Sentry until properly configured
// export const handleError = ({ error, event }) => {
//   console.error(error);
//   Sentry.captureException(error, { extra: { event } });
//   
//   return {
//     message: 'An unexpected error occurred',
//     code: error?.code ?? 'UNKNOWN'
//   };
// }; 