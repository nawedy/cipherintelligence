import { writable } from 'svelte/store';
import type { App.UserSession } from '$lib/types';

const createAuthStore = () => {
  const { subscribe, set } = writable<App.UserSession | null>(null);

  return {
    subscribe,
    login: async (email: string, password: string) => {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        body: JSON.stringify({ email, password })
      });
      
      if (res.ok) {
        const { token } = await res.json();
        localStorage.setItem('jwt', token);
        set(parseJwt(token));
      }
    },
    logout: () => {
      localStorage.removeItem('jwt');
      set(null);
    }
  };
};

export const auth = createAuthStore();

function parseJwt(token: string): App.UserSession {
  const base64Url = token.split('.')[1];
  const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  return JSON.parse(atob(base64));
} 