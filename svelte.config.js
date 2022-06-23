import adapter from '@sveltejs/adapter-netlify';
import preprocess from 'svelte-preprocess';
import { imagetools } from 'vite-imagetools';
import path from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),
	kit: {
		adapter: adapter(),
		vite: {
			server: {
				fs: {
					allow: ['..']
				}
			},
			plugins: [imagetools({ force: true })],
			resolve: {
				alias: {
					$artwork: path.resolve('./static/assets/artwork')
				}
			}

		}
	}
};

export default config;
