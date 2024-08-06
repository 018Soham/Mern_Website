const errorHandler = (err, req, res, next) => {
    // Log the full error for debugging
    console.error(err);
  
    // Set default status and message
    const status = err.status || 500;
    const message = err.message || "An unknown error occurred";
    let extradetails = [];
  
    // Check if there are validation errors and extract the messages
    if (err.errors && err.errors.length > 0) {
      extradetails = err.errors.map(e => e.message);
    }
  
    // Respond with the status, message, and error details
    res.status(status).json({
      status: status,
      message: message,
      extradetails: extradetails
    });
  };
  
  module.exports = errorHandler;
  