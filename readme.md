### 🚀 Uploading Files to Google Cloud Storage with Node.js

#### ✅ Prerequisites
- **Node.js** v14 or higher
- A **Google Cloud Storage (GCS)** bucket
- GCP credentials set up (via environment or service account)

---

### 📁 Project Setup

1. **Create a folder and navigate into it:**
   ```bash
   mkdir gcs-upload
   cd gcs-upload
   ```

2. **Create the upload script:**
   ```bash
   touch upload.js
   ```
   Open `upload.js` and paste the script.

3. **Update the following variables in `upload.js`:**
   ```js
   const bucketName = 'your-bucket-name';           // Replace with your GCS bucket name
   const filePath = './path/to/your/file.ext';      // Replace with the path to your local file
   const chunkSize = 32 * 1024 * 1024;              // Optional: customize chunk size (default is 32MB)
   ```

---

### 📦 Install Dependencies

4. **Initialize the project and install required packages:**
   ```bash
   npm init -y
   npm install express @google-cloud/storage
   ```

---

### 📂 Folder Structure

```
gcs-upload/
├── upload.js
├── package.json
```

---

### ▶️ Running the Script

5. **Execute the upload script:**
   ```bash
   node upload.js
   ```

---

### ✅ Sample Success Output

```
{ durationSeconds: '11.66' }
./DraftVersion.mp4 uploaded to subird-fmps-test.
```


