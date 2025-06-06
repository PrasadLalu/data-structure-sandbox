import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
import multer from 'multer';
import fs from 'fs';

const upload = multer({ dest: './upload' });

const s3 = new S3Client({
    region: 'us-east-1',
    credentials: {
        accessKeyId: '',
        secretAccessKey: ''
    }
})

export const handler = upload.single('file') = async (event) => {
    const file = req.file;
    if (!file) throw new Error('File not file');
    const data = fs.createReadStream(req.file.path);

    const params = {
        Bucket: 'test-bucket',
        Key: file.originalName,
        Body: data,
        ContentType: file.mimetype
    }
    try {
        await s3.send(new PutObjectCommand(params));
        fs.unlink(file.path);

        const response = {
            statusCode: 200,
            body: JSON.stringfy("file uploaded..."),
        };
        return response;
    } catch (e) {
        console.log(e);
    }
}