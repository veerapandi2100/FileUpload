const express = require('express');
const router = express.Router();
const upload = require('../config/multerConfig');
const fileController = require('../controllers/fileController');
const validateFileSize = require('../middleware/validateFileSizeMiddleware'); // ✅ Import the middleware


// Route to handle file upload
router.post('/upload', upload.single('file'), validateFileSize, fileController.uploadFile);

// Route to list all uploaded files
router.get('/files', fileController.listFiles);

// Route to download a specific file
router.get('/files/:filename', fileController.downloadFile);

module.exports = router;