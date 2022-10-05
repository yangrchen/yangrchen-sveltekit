import { sveltekit } from '@sveltejs/kit/vite';
import { imagetools } from 'vite-imagetools';

/** @type {import('vite').UserConfig} */
const config = {
    server: {
        fs: {
            allow: ['..']
        }
    },
    plugins: [sveltekit(), imagetools({ force: true })],
    resolve: {
        alias: {
            '$artwork': '/src/assets/artwork'
        }
    }
};

export default config;