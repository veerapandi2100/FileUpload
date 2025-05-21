const express = require('express');
const cors = require('cors');
const path = require('path');
const fileRoutes = require('./routes/fileRoutes');
const errorHandler = require('./middleware/errorHandler');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware for handling CORS
app.use(cors());

// Middleware for parsing incoming JSON requests
app.use(express.json());

// Serve static files (uploaded files)
app.use('/files', express.static(path.join(__dirname, 'public')));

// Route handlers
app.use('/', fileRoutes);

// Global error handler middleware
app.use(errorHandler);

// Start the server
app.listen(PORT, () => {
  console.log(`File upload service is running on port ${PORT}`);
});
