import { S3Client, PutObjectCommand} from '@aws-sdk/client-s3'

const s3Client = new S3Client({ region: 'us-east-1' });

export const handler = async (event) => {
    const body = 'this is a sample data'
    const params = {
        bucket: 'test_bucket',
        key: 'test1.txt',
        Body: body,
        ContentType: 'text/plain' 
    }

    s3Client.send(new PutObjectCommand(params));

    const response = {
        statusCode: 200,
        body: JSON.stringify("Hello, World!"),
    }
    return response;
}
