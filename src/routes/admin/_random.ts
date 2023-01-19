import fs from 'fs';
import ImageKit from 'imagekit';
import type { Actions } from './$types';
import { PUBLIC_IMAGEKIT_API, PUBLIC_IMAGEKIT_URL } from '$env/static/public';
import { SECRET_IMAGEKIT_API } from '$env/static/private';

const imagekit = new ImageKit({
    publicKey: PUBLIC_IMAGEKIT_API,
    privateKey: SECRET_IMAGEKIT_API,
    urlEndpoint: PUBLIC_IMAGEKIT_URL
});

export const actions: Actions = {
    default: async ({ request }) => {
        let data = await request.formData();
        let images = data.getAll('images');
        for (let img in images) {
            console.log(img);
            let buffer = Buffer.from(img).toString('base64');
            console.log(buffer);
        }
    }
};