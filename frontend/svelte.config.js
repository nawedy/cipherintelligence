import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({ runtime: 'nodejs20.x' }),
		alias: {
			$lib: './src/lib',
			$components: './src/lib/components'
		}
	},
	preprocess: vitePreprocess()
};

export default config; 