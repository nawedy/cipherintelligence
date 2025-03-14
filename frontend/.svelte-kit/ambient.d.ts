
// this file is generated — do not edit it


/// <reference types="@sveltejs/kit" />

/**
 * Environment variables [loaded by Vite](https://vitejs.dev/guide/env-and-mode.html#env-files) from `.env` files and `process.env`. Like [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), this module cannot be imported into client-side code. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://kit.svelte.dev/docs/configuration#env) (if configured).
 * 
 * _Unlike_ [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), the values exported from this module are statically injected into your bundle at build time, enabling optimisations like dead code elimination.
 * 
 * ```ts
 * import { API_KEY } from '$env/static/private';
 * ```
 * 
 * Note that all environment variables referenced in your code should be declared (for example in an `.env` file), even if they don't have a value until the app is deployed:
 * 
 * ```
 * MY_FEATURE_FLAG=""
 * ```
 * 
 * You can override `.env` values from the command line like so:
 * 
 * ```bash
 * MY_FEATURE_FLAG="enabled" npm run dev
 * ```
 */
declare module '$env/static/private' {
	export const MAILER_API_KEY: string;
	export const DATABASE_URL: string;
	export const JWT_EXPIRES_IN: string;
	export const JWT_REFRESH_EXPIRES_IN: string;
	export const CMS_ADMIN_EMAIL: string;
	export const SESSION_SECRET: string;
	export const STRIPE_SECRET_KEY: string;
	export const STRIPE_WEBHOOK_SECRET: string;
	export const SENTRY_DSN: string;
	export const GOOGLE_OAUTH_CLIENT_ID: string;
	export const GOOGLE_OAUTH_SECRET: string;
	export const GCP_PROJECT_ID: string;
	export const GCP_SA_KEY: string;
	export const RATE_LIMIT: string;
	export const NODE_OPTIONS: string;
	export const VERCEL_PROJECT_ID: string;
	export const VERCEL_TOKEN: string;
	export const RENDER_API_KEY: string;
	export const VERCEL_TEAM_ID: string;
	export const NVM_RC_VERSION: string;
	export const TERM_PROGRAM: string;
	export const NODE: string;
	export const NVM_CD_FLAGS: string;
	export const INIT_CWD: string;
	export const SHELL: string;
	export const TERM: string;
	export const TMPDIR: string;
	export const HOMEBREW_REPOSITORY: string;
	export const CONDA_SHLVL: string;
	export const npm_config_global_prefix: string;
	export const CONDA_PROMPT_MODIFIER: string;
	export const TERM_PROGRAM_VERSION: string;
	export const GSETTINGS_SCHEMA_DIR_CONDA_BACKUP: string;
	export const MallocNanoZone: string;
	export const ORIGINAL_XDG_CURRENT_DESKTOP: string;
	export const CURSOR_TRACE_ID: string;
	export const ZDOTDIR: string;
	export const COLOR: string;
	export const npm_config_noproxy: string;
	export const PNPM_HOME: string;
	export const npm_config_local_prefix: string;
	export const USER: string;
	export const NVM_DIR: string;
	export const COMMAND_MODE: string;
	export const CONDA_EXE: string;
	export const npm_config_globalconfig: string;
	export const SSH_AUTH_SOCK: string;
	export const __CF_USER_TEXT_ENCODING: string;
	export const npm_execpath: string;
	export const _CE_CONDA: string;
	export const PATH: string;
	export const GSETTINGS_SCHEMA_DIR: string;
	export const _: string;
	export const npm_package_json: string;
	export const __CFBundleIdentifier: string;
	export const CONDA_PREFIX: string;
	export const USER_ZDOTDIR: string;
	export const npm_config_init_module: string;
	export const npm_config_userconfig: string;
	export const PWD: string;
	export const npm_command: string;
	export const JAVA_HOME: string;
	export const EDITOR: string;
	export const npm_lifecycle_event: string;
	export const npm_package_name: string;
	export const LANG: string;
	export const XPC_FLAGS: string;
	export const VSCODE_GIT_ASKPASS_EXTRA_ARGS: string;
	export const npm_config_npm_version: string;
	export const npm_config_node_gyp: string;
	export const npm_package_version: string;
	export const XPC_SERVICE_NAME: string;
	export const _CE_M: string;
	export const VSCODE_INJECTION: string;
	export const HOME: string;
	export const SHLVL: string;
	export const VSCODE_GIT_ASKPASS_MAIN: string;
	export const HOMEBREW_PREFIX: string;
	export const LOGNAME: string;
	export const CONDA_PYTHON_EXE: string;
	export const npm_config_cache: string;
	export const npm_lifecycle_script: string;
	export const VSCODE_GIT_IPC_HANDLE: string;
	export const CONDA_DEFAULT_ENV: string;
	export const npm_config_user_agent: string;
	export const HOMEBREW_CELLAR: string;
	export const INFOPATH: string;
	export const GIT_ASKPASS: string;
	export const VSCODE_GIT_ASKPASS_NODE: string;
	export const DASHSCOPE_API_KEY: string;
	export const COLORTERM: string;
	export const npm_config_prefix: string;
	export const npm_node_execpath: string;
	export const NODE_ENV: string;
}

/**
 * Similar to [`$env/static/private`](https://kit.svelte.dev/docs/modules#$env-static-private), except that it only includes environment variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Values are replaced statically at build time.
 * 
 * ```ts
 * import { PUBLIC_BASE_URL } from '$env/static/public';
 * ```
 */
declare module '$env/static/public' {
	export const PUBLIC_API_URL: string;
	export const PUBLIC_SITE_NAME: string;
	export const PUBLIC_SUPABASE_URL: string;
	export const PUBLIC_SUPABASE_ANON_KEY: string;
	export const PUBLIC_GA_ID: string;
	export const PUBLIC_STRIPE_PUBLIC_KEY: string;
	export const PUBLIC_SUPABASE_KEY: string;
	export const PUBLIC_FIREBASE_CONFIG: string;
}

/**
 * This module provides access to runtime environment variables, as defined by the platform you're running on. For example if you're using [`adapter-node`](https://github.com/sveltejs/kit/tree/master/packages/adapter-node) (or running [`vite preview`](https://kit.svelte.dev/docs/cli)), this is equivalent to `process.env`. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://kit.svelte.dev/docs/configuration#env) (if configured).
 * 
 * This module cannot be imported into client-side code.
 * 
 * ```ts
 * import { env } from '$env/dynamic/private';
 * console.log(env.DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 * 
 * > In `dev`, `$env/dynamic` always includes environment variables from `.env`. In `prod`, this behavior will depend on your adapter.
 */
declare module '$env/dynamic/private' {
	export const env: {
		MAILER_API_KEY: string;
		DATABASE_URL: string;
		JWT_EXPIRES_IN: string;
		JWT_REFRESH_EXPIRES_IN: string;
		CMS_ADMIN_EMAIL: string;
		SESSION_SECRET: string;
		STRIPE_SECRET_KEY: string;
		STRIPE_WEBHOOK_SECRET: string;
		SENTRY_DSN: string;
		GOOGLE_OAUTH_CLIENT_ID: string;
		GOOGLE_OAUTH_SECRET: string;
		GCP_PROJECT_ID: string;
		GCP_SA_KEY: string;
		RATE_LIMIT: string;
		NODE_OPTIONS: string;
		VERCEL_PROJECT_ID: string;
		VERCEL_TOKEN: string;
		RENDER_API_KEY: string;
		VERCEL_TEAM_ID: string;
		NVM_RC_VERSION: string;
		TERM_PROGRAM: string;
		NODE: string;
		NVM_CD_FLAGS: string;
		INIT_CWD: string;
		SHELL: string;
		TERM: string;
		TMPDIR: string;
		HOMEBREW_REPOSITORY: string;
		CONDA_SHLVL: string;
		npm_config_global_prefix: string;
		CONDA_PROMPT_MODIFIER: string;
		TERM_PROGRAM_VERSION: string;
		GSETTINGS_SCHEMA_DIR_CONDA_BACKUP: string;
		MallocNanoZone: string;
		ORIGINAL_XDG_CURRENT_DESKTOP: string;
		CURSOR_TRACE_ID: string;
		ZDOTDIR: string;
		COLOR: string;
		npm_config_noproxy: string;
		PNPM_HOME: string;
		npm_config_local_prefix: string;
		USER: string;
		NVM_DIR: string;
		COMMAND_MODE: string;
		CONDA_EXE: string;
		npm_config_globalconfig: string;
		SSH_AUTH_SOCK: string;
		__CF_USER_TEXT_ENCODING: string;
		npm_execpath: string;
		_CE_CONDA: string;
		PATH: string;
		GSETTINGS_SCHEMA_DIR: string;
		_: string;
		npm_package_json: string;
		__CFBundleIdentifier: string;
		CONDA_PREFIX: string;
		USER_ZDOTDIR: string;
		npm_config_init_module: string;
		npm_config_userconfig: string;
		PWD: string;
		npm_command: string;
		JAVA_HOME: string;
		EDITOR: string;
		npm_lifecycle_event: string;
		npm_package_name: string;
		LANG: string;
		XPC_FLAGS: string;
		VSCODE_GIT_ASKPASS_EXTRA_ARGS: string;
		npm_config_npm_version: string;
		npm_config_node_gyp: string;
		npm_package_version: string;
		XPC_SERVICE_NAME: string;
		_CE_M: string;
		VSCODE_INJECTION: string;
		HOME: string;
		SHLVL: string;
		VSCODE_GIT_ASKPASS_MAIN: string;
		HOMEBREW_PREFIX: string;
		LOGNAME: string;
		CONDA_PYTHON_EXE: string;
		npm_config_cache: string;
		npm_lifecycle_script: string;
		VSCODE_GIT_IPC_HANDLE: string;
		CONDA_DEFAULT_ENV: string;
		npm_config_user_agent: string;
		HOMEBREW_CELLAR: string;
		INFOPATH: string;
		GIT_ASKPASS: string;
		VSCODE_GIT_ASKPASS_NODE: string;
		DASHSCOPE_API_KEY: string;
		COLORTERM: string;
		npm_config_prefix: string;
		npm_node_execpath: string;
		NODE_ENV: string;
		[key: `PUBLIC_${string}`]: undefined;
		[key: `${string}`]: string | undefined;
	}
}

/**
 * Similar to [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), but only includes variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Note that public dynamic environment variables must all be sent from the server to the client, causing larger network requests — when possible, use `$env/static/public` instead.
 * 
 * ```ts
 * import { env } from '$env/dynamic/public';
 * console.log(env.PUBLIC_DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 */
declare module '$env/dynamic/public' {
	export const env: {
		PUBLIC_API_URL: string;
		PUBLIC_SITE_NAME: string;
		PUBLIC_SUPABASE_URL: string;
		PUBLIC_SUPABASE_ANON_KEY: string;
		PUBLIC_GA_ID: string;
		PUBLIC_STRIPE_PUBLIC_KEY: string;
		PUBLIC_SUPABASE_KEY: string;
		PUBLIC_FIREBASE_CONFIG: string;
		[key: `PUBLIC_${string}`]: string | undefined;
	}
}
