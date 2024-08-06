const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
// Define the schema for user registration
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phone: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        default: false
    }
});
// Method to generate a JWT token
userSchema.methods.generateToken = async function() {
    try {
        const token = jwt.sign(
            {
                userId: this._id.toString(),
                email: this.email,
                isAdmin: this.isAdmin
            },
            process.env.JWT_SECRET_KEY,
            {
                expiresIn: "30d"
            }
        );
        return token;
    } catch (error) {
        console.log(error);
        throw new Error('Error generating token');
    }
};
// Create a model from the schema
const User = mongoose.model('User', userSchema);

module.exports = User;
