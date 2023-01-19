import type { PageServerLoad } from './$types';
import s3 from '$lib/data/aws';
import type { ListObjectsV2Request } from 'aws-sdk/clients/s3';

export const load: PageServerLoad = async () => {
    let keys: string[] = [];
    const params: ListObjectsV2Request =
    {
        Bucket: 'yangrchen.com',
        Prefix: 'artwork/',
        MaxKeys: 100
    };
    const contents = (await s3.listObjectsV2(params).promise()).Contents;
    const metadata = (await s3.getObject)
    console.log({ contents });
    // if (contents) {
    //     contents.forEach(obj => keys.push(obj.Key as string));
    // }
    return { keys };
}