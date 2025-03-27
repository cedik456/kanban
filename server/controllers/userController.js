const mongoose = require('mongoose');

const User = require('../models/User');

const loginUser = async (req, res) => {
  try {
    const { email } = req.body;

    const user = await User.findOne({ email });
    // if (!user || user.password !== password) {
    //   res.status(401).json({ message: "Invalid email or password" });
    // }

    res.json({
      message: 'Login Successful',
      userId: user._id,
      name: user.name,
    });
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

const signupUser = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const user = await User.create({ name, email, password });
    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

const getAllUser = async (req, res) => {
  const user = await User.find();

  res.status(200).json(user);
};

const getAllUsers = (req, res) => {
  res.send('Get all users');
};

const getUserById = (req, res) => {
  res.send(`Get user with ID: ${req.params.id}`);
};

const updateUser = (req, res) => {
  res.send(`Update user with ID: ${req.params.id}`);
};

const deleteUser = (req, res) => {
  res.send(`Delete user with ID: ${req.params.id}`);
};

module.exports = {
  loginUser,
  signupUser,
  getAllUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
};
