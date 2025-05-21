const path = require('path');

/**
 * Middleware to validate file size:
 * - Allows any size for .txt files
 * - Enforces 5MB limit for images and PDFs
 */
const validateFileSize = (req, res, next) => {
  if (!req.file) return next();

  const file = req.file;
  const ext = path.extname(file.originalname).toLowerCase();

  // Allow unlimited size for .txt files
  if (ext === '.txt') {
    return next();
  }

  // Limit image and PDF files to 5MB
  const maxSize = 5 * 1024 * 1024; // 5MB
  if (file.size > maxSize) {
    return res.status(400).json({ error: 'Image and PDF files must be under 5MB.' });
  }

  next();
};

module.exports = validateFileSize;
