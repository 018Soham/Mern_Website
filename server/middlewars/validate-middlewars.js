const { z } = require('zod');

// Middleware to validate request body against a Zod schema
const validate = (schema) => (req, res, next) => {
    try {
        schema.parse(req.body); // Validate request body
        next(); // Proceed to the next middleware or route handler
    } catch (error) {
        if (error instanceof z.ZodError) {
            return res.status(400).json({ errors: error.errors });
        }
        next(error); // Pass error to the next error-handling middleware
    }
};

module.exports = validate;
