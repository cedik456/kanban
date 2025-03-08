const express = require("express");

const router = express.Router();

// controller

const {
  loginUser,
  signupUser,
  getAllUser,
} = require("../controllers/userController");

// Get all users
router.get("/", getAllUser);

// Login
router.post("/login", loginUser);

// Signup
router.post("/signup", signupUser);

module.exports = router;
