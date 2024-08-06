const { z } = require('zod');

// Schema for user registration
const registerSchema = z.object({
    username: z.string().min(1, "Username is required"),
    email: z.string().email("Invalid email address"),
    phone: z.string().min(1, "Phone number is required"),
    password: z.string().min(6, "Password must be at least 6 characters long"),
    isAdmin: z.boolean().optional()
});

// Schema for user login
const loginSchema = z.object({
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters long")
});

module.exports = {
    registerSchema,
    loginSchema
};
