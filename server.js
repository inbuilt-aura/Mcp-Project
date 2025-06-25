const express = require('express');
const fs = require('fs');
const fsPromises = require('fs').promises;
const path = require('path');
const cors = require('cors');
const multer = require('multer');

const app = express();
app.use(express.json());
app.use(cors());

const filesDir = path.resolve(__dirname, 'files');

if (!fs.existsSync(filesDir)) {
  fs.mkdirSync(filesDir);
}

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, filesDir);
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  }
});

const upload = multer({ storage: storage });

// Serve static files
app.use(express.static(__dirname));

     // File upload endpoint
     app.post('/upload', upload.single('file'), (req, res) => {
       try {
         if (!req.file) {
           return res.status(400).json({ error: 'No file uploaded' });
         }
         res.json({ 
           message: `File ${req.file.filename} uploaded successfully`,
           filename: req.file.filename,
           size: req.file.size
         });
       } catch (error) {
         res.status(500).json({ error: error.message });
       }
     });

     // List files endpoint
     app.get('/list', async (req, res) => {
       try {
         const files = await fsPromises.readdir(filesDir);
         res.json({ files: files.filter(file => !file.startsWith('.')) });
       } catch (error) {
         res.status(500).json({ error: error.message });
       }
     });

     app.post('/mcp', async (req, res) => {
       const { action, filename, content } = req.body;
       const filePath = path.join(filesDir, filename);

       try {
         switch (action) {
           case 'create':
             await fsPromises.writeFile(filePath, content || '', 'utf8');
             res.json({ message: `Created file ${filename}` });
             break;
           case 'edit':
             if (fs.existsSync(filePath)) {
               await fsPromises.writeFile(filePath, content || '', 'utf8');
               res.json({ message: `Edited file ${filename}` });
             } else {
               res.status(404).json({ error: `File ${filename} not found` });
             }
             break;
           case 'delete':
             if (fs.existsSync(filePath)) {
               await fsPromises.unlink(filePath);
               res.json({ message: `Deleted file ${filename}` });
             } else {
               res.status(404).json({ error: `File ${filename} not found` });
             }
             break;
           case 'read':
             if (fs.existsSync(filePath)) {
               const fileContent = await fsPromises.readFile(filePath, 'utf8');
               res.json({ message: `Content of ${filename}`, content: fileContent });
             } else {
               res.status(404).json({ error: `File ${filename} not found` });
             }
             break;
           default:
             res.status(400).json({ error: 'Invalid action. Use: create, edit, delete, or read' });
         }
       } catch (error) {
         res.status(500).json({ error: error.message });
       }
     });

     app.listen(3000, () => {
       console.log('MCP Server running on http://localhost:3000');
     });