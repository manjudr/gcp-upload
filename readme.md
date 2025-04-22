STEPS
1. mkdir gcs-upload
2. cd gcs-upload and run touch upload.js and paste script
3. Inside upload.js, update the following:

const bucketName = 'your-bucket-name';     // Replace with your actual GCS bucket name
const filePath = './path/to/your/file.ext'; // Replace with the local file path
const chunkSize = 32 * 1024 * 1024;         // Optional: customize chunk size (default is 32MB)

4. run npm init -y
5. run npm install express @google-cloud/storage

REQUIREMENTS 
1. Node.js version 14+

FOLDER STRUCTURE 
gcs-upload/
├── upload.js
├── package.json

TO EXECUTE SCRIPT 
1. run command node upload.js

SAMPLE SUCCESS OUTPUT EXAMPLE
- { durationSeconds: '11.66' }
- ./DraftVersion.mp4 uploaded to subird-fmps-test.

