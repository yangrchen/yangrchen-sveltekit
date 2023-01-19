import type { RequestHandler } from './$types';
import { json } from '@sveltejs/kit';
import s3 from '$lib/data/aws'
import type { ManagedUpload } from 'aws-sdk/lib/s3/managed_upload';
import { error } from '@sveltejs/kit';

const uploadFile = async (file: File) => {
    return new Promise<string>(async (resolve, reject) => {
        const buffer = Buffer.from(await file.arrayBuffer());
        const params = {
            Bucket: 'yangrchen.com',
            Key: `artwork/${file.name}`,
            Body: buffer,
            ContentType: file.type
        };
        await s3.upload(params, (err: Error, data: ManagedUpload.SendData) => {
            if (err) {
                reject(err);
            };
            resolve(data.Location);
        }
        ).promise();
    });
}

export const POST: RequestHandler = async ({ request }) => {
    try {
        let data = await request.formData();
        let files: File[] = data.getAll('files') as File[];
        let uploadPromises: Promise<string>[] = [];
        files.forEach((file: File) => uploadPromises.push(
            uploadFile(file)
        ));
        await Promise.all(uploadPromises);
        return json({ 'message': 'Successfully uploaded images' });

    } catch (err) {
        throw error(500, 'Error occurred while uploading images')
    }
};
