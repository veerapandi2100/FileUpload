/**
 * Global error-handling middleware
 * Captures any errors from routes/middleware and returns proper JSON response
 */
module.exports = (err, req, res, next) => {
    console.error("--->Checkkkkk", err.stack);
    res.status(500).json({ error: err.message || 'Internal Server Error' });
  };