import { SECRET_AWS_ACCESS_ID, SECRET_AWS_ACCESS_KEY } from "$env/static/private";
import { S3 } from "aws-sdk"

const s3 = new S3({
    credentials: {
        accessKeyId: SECRET_AWS_ACCESS_ID,
        secretAccessKey: SECRET_AWS_ACCESS_KEY
    }
});

export default s3;