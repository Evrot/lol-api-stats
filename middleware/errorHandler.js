// middleware/errorHandler.js

const errorHandler = (err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).json({
    error: {
      message: err.message || 'Internal Server Error',
      stack: process.env.NODE_ENV === 'production' ? '' : err.stack,
    },
  });
};

// Export the error handling middleware
module.exports = errorHandler;
