const Contact = require("../models/contact-model");
const mongoose = require("mongoose");

const contact = async (req, res, next) => {
  try {
    const { username, email, message } = req.body;

    // Create a new contact document
    const contactCreated = new Contact({
      username,
      email,
      message,
    });

    // Save the contact document to the database
    await contactCreated.save();

    // Respond with a success message
    res.status(201).json({ msg: "Contact created successfully!" });
  } catch (error) {
    // Log the error for debugging
    console.error(error);

    // Respond with an error message and pass the error to the error handler
    res.status(400).json({ msg: "Some error occurred!" });
    next(error);
  }
};

module.exports = contact;
