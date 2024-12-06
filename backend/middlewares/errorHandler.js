// // errorHandler.js


export const handleValidationError = (message, statusCode) => {
  const error = new Error(message);
  error.statusCode = statusCode || 400;  // Default to 400 for validation errors
  throw error;
};

// Global error handler
export const errorHandler = (err, req, res, next) => {
  const statusCode = err.statusCode || 500;  // Default to 500 for server errors
  const message = err.message || "Internal Server Error";
  res.status(statusCode).json({
    success: false,
    message,
  });
};
