import { SupabaseClient, Session } from '@supabase/supabase-js';

declare global {
	namespace App {
		interface User {
			id: string;
			email: string;
			role: 'admin' | 'editor' | 'user';
		}

		interface Locals {
			supabase: SupabaseClient;
			getSession: () => Promise<Session | null>;
			user: User | null;
		}
		interface PageData {
			session: Session | null;
			user: User | null;
		}
		// interface Error {}
		// interface Platform {}
	}
}

export {}; 