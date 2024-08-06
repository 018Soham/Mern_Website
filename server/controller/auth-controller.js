const User = require("../models/user-models");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
require("dotenv").config(); // Ensure this is included

// Creating Home Logic
const home = async (req, res) => {
  try {
    res.status(200).send("Home Page Of MERN Website");
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// Create Registration Logic
const register = async (req, res, next) => {
  try {
    const { username, email, phone, password } = req.body;

    // Check if a user with the given email already exists
    const userExist = await User.findOne({ email });
    if (userExist) {
      return res.status(400).json({ message: "Email Already Exists" });
    }

    // Hash the password
    const saltRounds = 10;
    const hash_password = await bcrypt.hash(password, saltRounds);

    // Create a new user with the hashed password
    const userCreated = new User({
      username,
      email,
      phone,
      password: hash_password,
    });
    await userCreated.save();

    // Generate token
    const token = await userCreated.generateToken();

    res.status(200).json({
      message: "User Registered Successfully",
      user: userCreated,
      token: token,
    });
  } catch (err) {
    // Check if there are errors and extract the first message
    const status = 400;
    const message = "Fill the input properly";
    const extradetails = err.errors && err.errors.length > 0 ? err.errors.map(e => e.message) : ["An unknown error occurred"];
    const error = {
      status,
      message,
      extradetails,
    };
    next(error);
  }
};


// Create Login Page
const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const userExist = await User.findOne({ email });

    if (!userExist) {
      return res.status(400).json({ message: "Email Does Not Exist" });
    }

    // Compare password
    const verifyPassword = await bcrypt.compare(password, userExist.password);

    if (verifyPassword) {
      // Generate token
      const token = await userExist.generateToken();

      return res.status(200).json({
        message: "User Login Successful",
        user: userExist,
        token: token,
      });
    } else {
      return res.status(400).json({ message: "Invalid Password" });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
//user data-send to any frontend Value Logics
const user=async (req,res)=>{
try {
  const userdata=req.user;
  console.log(userdata);
res.status(200).json({msg:userdata})

} catch (error) {
  console.log("Error From The user Route!!!")
}

}

module.exports = { home, register, login,user };
