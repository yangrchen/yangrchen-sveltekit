import { sveltekit } from '@sveltejs/kit/vite';
import { imagetools } from 'vite-imagetools';
import basicSsl from '@vitejs/plugin-basic-ssl';
import postcss from 'postcss';

/** @type {import('vite').UserConfig} */
const config = {
    server: {
        fs: {
            allow: ['..']
        }
    },
    plugins: [sveltekit(), imagetools({ force: true }), basicSsl(), postcss()],
    resolve: {
        alias: {
            '$artwork': '$lib/assets/artwork'
        }
    }
};

export default config;