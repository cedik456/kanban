const express = require("express");

// model

const User = require("../models/userModel");

const router = express.Router();

// Login
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user || user.password !== password) {
      res.status(401).json({ message: "Invalid email or password" });
    }

    res.json({ message: "Login Successful", userId: user._id });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});

// Signup

router.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const user = await User.create({ name, email, password });
    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

module.exports = router;
