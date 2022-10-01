import { sveltekit } from '@sveltejs/kit/vite';
import { imagetools } from 'vite-imagetools';
import path from 'path';

/** @type {import('vite').UserConfig} */
const config = {
    server: {
        fs: {
            allow: ['..']
        }
    },
    publicDir: 'static',
    plugins: [sveltekit(), imagetools({ force: true })],
    resolve: {
        alias: {
            '$artwork': path.resolve('/static/assets/artwork')
        }
    }
};

export default config;