/**
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */

// sample-metadata:
//   title: Upload a File in Chunks With Transfer Manager
//   description: Uploads a single file in in chunks in parallel utilizing transfer manager.
//   usage: node uploadFileInChunksWithTransferManager.js <BUCKET_NAME> <FILE_NAME> <CHUNK_SIZE>
import { Storage, TransferManager } from '@google-cloud/storage';
import {ThrottleGroup} from 'stream-throttle';

function main(
    bucketName = 'subird-fmps-test',
    filePath = './object_store_connector-0.1.0.tar.gz',
    chunkSize = 32 * 1024 * 1024
  ) {
    const tg = new ThrottleGroup({rate: 10240});
    const start = Date.now();
    const storage = new Storage();
  
    // Creates a transfer manager client
    const transferManager = new TransferManager(storage.bucket(bucketName));
  
    async function uploadFileInChunksWithTransferManager() {
      // Uploads the files
      
      await transferManager.uploadFileInChunks(filePath, {
        chunkSizeBytes: chunkSize,
      });
      const end = Date.now();
      const durationSeconds = ((end - start) / 1000).toFixed(2);
      console.log({durationSeconds})
      console.log(`${filePath} uploaded to ${bucketName}.`);
    }
  
    uploadFileInChunksWithTransferManager().catch(console.error);
  }
  
  process.on('unhandledRejection', err => {
    console.error(err.message);
    process.exitCode = 1;
  });
  main(...process.argv.slice(2))