const express = require('express');
const cors = require('cors');
const path = require('path');
const fileRoutes = require('./routes/fileRoutes');
const errorHandler = require('./middleware/errorHandler');

const app = express();
const PORT = process.env.PORT || 3000;

const allowedOrigins = [
    'http://localhost:3000'
  ];
  
  const corsOptions = {
    origin: function (origin, callback) {
      if (!origin) {
        // Allow requests without origin (Postman, REST clients)
        return callback(null, true);
      }
      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      } else {
        return callback(new Error(`Origin ${origin} not allowed by CORS`));
      }
    },
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type'],
  };
  
  app.use(cors(corsOptions));
  
  
  

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
