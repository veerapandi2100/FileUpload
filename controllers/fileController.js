const fs = require('fs');
const path = require('path');

const uploadDir = path.join(__dirname, '../public');

exports.uploadFile = (req, res) => {
  /**
   * req.file: populated by multer middleware
   * Contains metadata like filename, path, mimetype, size, etc.
   */
  if (!req.file) {
    return res.status(400).json({ error: 'No file uploaded.' });
  }
  res.status(200).json({ message: 'File uploaded successfully.', filename: req.file.filename });
};

exports.listFiles = (req, res) => {
  fs.readdir(uploadDir, (err, files) => {
    if (err) return res.status(500).json({ error: 'Could not list files.' });
    res.status(200).json({ files });
  });
};

exports.downloadFile = (req, res) => {
  /**
   * req.params.filename: the file requested in the route
   * Use path.basename to prevent path traversal attacks
   */
  const filename = path.basename(req.params.filename);
  const filepath = path.join(uploadDir, filename);
  if (!fs.existsSync(filepath)) {
    return res.status(404).send('File not found.');
  }
  res.download(filepath);
};
