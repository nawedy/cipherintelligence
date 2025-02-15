<script lang="ts">
	import '$lib/styles/global.css';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';
	import { PUBLIC_SITE_NAME } from '$env/static/public';
	import { supabase, initSupabaseClient } from '$lib/supabase';
	import { session } from '$app/stores';
	import { toast } from 'svelte-sonner';
	import { Toaster } from 'svelte-sonner';
	import { startMonitoring } from '$lib/monitoring';

	// Initialize Supabase client
	initSupabaseClient();

	onMount(() => {
		gsap.registerPlugin(ScrollTrigger);
		
		// Initialize animations
		gsap.utils.toArray<HTMLElement>('.animate-on-scroll').forEach((element) => {
			ScrollTrigger.create({
				trigger: element,
				start: "top 80%",
				onEnter: () => element.classList.add('active')
			});
		});

		const { data: authListener } = supabase.auth.onAuthStateChange(async (event, session) => {
			if (event === 'SIGNED_IN' || event === 'TOKEN_REFRESHED') {
				$session = session;
			}
		});

		// WCAG 2.1 compliance
		document.documentElement.lang = 'en';
		document.documentElement.style.setProperty('--color-contrast', '#241e4e');

		startMonitoring();

		return () => {
			authListener?.subscription.unsubscribe();
		};
	});

	async function handleSignOut() {
		try {
			const { error } = await supabase.auth.signOut();
			if (error) throw error;
			toast.success('Signed out successfully', {
				description: 'You have been securely logged out'
			});
		} catch (error) {
			toast.error('Sign out failed', {
				description: error.message || 'Please try again or contact support',
				action: {
					label: 'Retry',
					onClick: () => handleSignOut()
				}
			});
		}
	}
</script>

<svelte:head>
	<!-- SEO Requirements -->
	<meta name="twitter:card" content="summary_large_image">
	<meta property="og:type" content="website">
	<script type="application/ld+json">
		{
			"@context": "https://schema.org",
			"@type": "Organization",
			"name": "EriEthio Research",
			"url": "https://eriethio.com",
			"logo": "/logo.svg",
			"sameAs": [
				"https://twitter.com/eriethio",
				"https://linkedin.com/company/eriethio"
			]
		}
	</script>
	<meta name="twitter:creator" content="@eriethio">
	<meta property="og:locale" content="en_US">
	<link rel="canonical" href="https://eriethio.com{$$page.url.pathname}">
</svelte:head>

<div class="min-h-screen">
	<header class="bg-white shadow-sm">
		<nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<div class="flex justify-between h-16">
				<div class="flex">
					<div class="flex-shrink-0 flex items-center">
						<a href="/" class="text-2xl font-bold text-primary-600">{PUBLIC_SITE_NAME}</a>
					</div>
					<div class="hidden sm:ml-6 sm:flex sm:space-x-8">
						<a href="/services" class="nav-link">Services</a>
						<a href="/about" class="nav-link">About</a>
						<a href="/blog" class="nav-link">Blog</a>
						<a href="/contact" class="nav-link">Contact</a>
					</div>
				</div>
				<div class="hidden sm:ml-6 sm:flex sm:items-center">
					{#if $page.data.session}
						<div class="flex items-center space-x-4">
							<a href="/admin" class="btn-secondary">Dashboard</a>
							<button type="button" class="btn" on:click={handleSignOut}>Sign Out</button>
						</div>
					{:else}
						<a href="/auth/signin" class="btn">Sign In</a>
					{/if}
				</div>
			</div>
		</nav>
	</header>

	<main>
		<slot />
	</main>

	<footer class="bg-gray-900 text-white">
		<div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
			<div class="grid grid-cols-1 md:grid-cols-4 gap-8">
				<div>
					<h3 class="text-lg font-semibold mb-4">Company</h3>
					<ul class="space-y-2">
						<li><a href="/about" class="hover:text-primary-300">About</a></li>
						<li><a href="/careers" class="hover:text-primary-300">Careers</a></li>
						<li><a href="/contact" class="hover:text-primary-300">Contact</a></li>
					</ul>
				</div>
				<div>
					<h3 class="text-lg font-semibold mb-4">Resources</h3>
					<ul class="space-y-2">
						<li><a href="/blog" class="hover:text-primary-300">Blog</a></li>
						<li><a href="/docs" class="hover:text-primary-300">Documentation</a></li>
						<li><a href="/research" class="hover:text-primary-300">Research</a></li>
					</ul>
				</div>
				<div>
					<h3 class="text-lg font-semibold mb-4">Legal</h3>
					<ul class="space-y-2">
						<li><a href="/privacy" class="hover:text-primary-300">Privacy</a></li>
						<li><a href="/terms" class="hover:text-primary-300">Terms</a></li>
					</ul>
				</div>
				<div>
					<h3 class="text-lg font-semibold mb-4">Connect</h3>
					<ul class="space-y-2">
						<li><a href="#" class="hover:text-primary-300">Twitter</a></li>
						<li><a href="#" class="hover:text-primary-300">LinkedIn</a></li>
						<li><a href="#" class="hover:text-primary-300">GitHub</a></li>
					</ul>
				</div>
			</div>
			<div class="mt-8 pt-8 border-t border-gray-700">
				<p class="text-center text-gray-400">
					© {new Date().getFullYear()} {PUBLIC_SITE_NAME}. All rights reserved.
				</p>
			</div>
		</div>
	</footer>
</div>

<style lang="postcss">
	/* Navigation styles */
	.nav-link {
		@apply inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:text-gray-900 hover:border-gray-300;
	}

	.nav-link[aria-current="page"] {
		@apply border-primary-500 text-gray-900;
	}

	/* Animation Classes */
	:global(.scale-up) {
		transform: scale(0.95);
		opacity: 0;
		transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
	}

	:global(.scale-up.active) {
		transform: scale(1);
		opacity: 1;
	}

	:global(.slide-left) {
		transform: translateX(50px);
		opacity: 0;
		transition: all 0.4s ease-out;
	}

	:global(.slide-left.active) {
		transform: translateX(0);
		opacity: 1;
	}

	:global(.animate-on-scroll) {
		opacity: 0;
		transform: translateY(20px);
		transition: all 0.6s ease-out;
	}

	:global(.animate-on-scroll.active) {
		opacity: 1;
		transform: translateY(0);
	}

	:global(a) {
		&:focus-visible {
			outline: 2px solid var(--color-primary-500);
			outline-offset: 2px;
		}
	}
</style>

<Toaster 
	position="top-center" 
	richColors 
	expand={true}
	closeButton
	theme="light"
/> 