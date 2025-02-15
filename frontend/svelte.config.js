import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			runtime: 'edge',
			regions: ['iad1'], // US East (N. Virginia)
		}),
		alias: {
			$components: 'src/lib/components',
			$utils: 'src/lib/utils',
			$styles: 'src/lib/styles'
		}
	},
	preprocess: vitePreprocess()
};

export default config; 