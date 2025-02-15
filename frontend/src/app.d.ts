import { SupabaseClient, Session } from '@supabase/supabase-js';

declare global {
	namespace App {
		interface UserSession {
			id: string;
			email: string;
			role: 'admin' | 'editor' | 'user';
		}

		interface Locals {
			supabase: SupabaseClient;
			getSession(): Promise<Session | null>;
			user: UserSession | null;
		}
		interface PageData {
			session: Session | null;
			user: UserSession | null;
		}
		// interface Error {}
		// interface Platform {}
	}
}

export {}; 