const express = require("express");

const router = express.Router();

// controller
const {
  loginUser,
  signupUser,
  getAllUsers,
} = require("../controllers/userController");

// Get all users
router.get("/", getAllUsers);

// Login
router.post("/login", loginUser);

// Signup
router.post("/signup", signupUser);

module.exports = router;
