const mongoose = require("mongoose");

const User = require("../models/userModel");

// Login User (controller)

const loginUser = async (req, res) => {
  try {
    const { email } = req.body;

    const user = await User.findOne({ email });
    // if (!user || user.password !== password) {
    //   res.status(401).json({ message: "Invalid email or password" });
    // }

    res.json({ message: "Login Successful", userId: user._id });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

// Signup User (controller)

const signupUser = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const user = await User.create({ name, email, password });
    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

// Get All User

const getAllUser = async (req, res) => {
  const user = await User.find();

  res.status(200).json(user);
};

module.exports = {
  loginUser,
  signupUser,
  getAllUser,
};
