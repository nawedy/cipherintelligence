export { matchers } from './matchers.js';

export const nodes = [
	() => import('./nodes/0'),
	() => import('./nodes/1'),
	() => import('./nodes/2'),
	() => import('./nodes/3'),
	() => import('./nodes/4'),
	() => import('./nodes/5'),
	() => import('./nodes/6'),
	() => import('./nodes/7'),
	() => import('./nodes/8'),
	() => import('./nodes/9'),
	() => import('./nodes/10'),
	() => import('./nodes/11'),
	() => import('./nodes/12'),
	() => import('./nodes/13'),
	() => import('./nodes/14'),
	() => import('./nodes/15'),
	() => import('./nodes/16')
];

export const server_loads = [0,2];

export const dictionary = {
		"/": [3],
		"/admin": [7,[2]],
		"/admin/approvals": [8,[2]],
		"/admin/builder": [9,[2]],
		"/admin/content": [10,[2]],
		"/admin/editor": [11,[2]],
		"/admin/editor/[page_id]": [12,[2]],
		"/login": [13],
		"/products": [14],
		"/products/[slug]": [15],
		"/research": [16],
		"/(auth)/signin": [4],
		"/(auth)/signup": [5],
		"/[...path]": [6]
	};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),
};

export { default as root } from '../root.svelte';