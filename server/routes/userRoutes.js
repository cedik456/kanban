const express = require('express');

const router = express.Router();

// controller
const {
  loginUser,
  signupUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
} = require('../controllers/userController');

// Get all users
router.get('/', getAllUsers);

// Get a single user by ID
router.get('/:id', getUserById);

// Update a user by ID
router.put('/:id', updateUser);

// Delete a user by ID
router.delete('/:id', deleteUser);

// Login
router.post('/login', loginUser);

// Signup
router.post('/signup', signupUser);

module.exports = router;
