import type { RequestHandler } from './$types';
import { SECRET_IMAGEKIT_API } from '$env/static/private';
import { PUBLIC_IMAGEKIT_API, PUBLIC_IMAGEKIT_URL } from '$env/static/public';
import ImageKit from 'imagekit';
import { json } from '@sveltejs/kit';
// TODO: Protect endpoint with auth
let imagekit = new ImageKit({
    publicKey: PUBLIC_IMAGEKIT_API,
    privateKey: SECRET_IMAGEKIT_API,
    urlEndpoint: PUBLIC_IMAGEKIT_URL
});

export const GET: RequestHandler = async () => {
    let authenticationParameters = imagekit.getAuthenticationParameters();
    return json(authenticationParameters);
};