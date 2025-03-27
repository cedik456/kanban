const express = require('express');
const router = express.Router();
const {
  getTasks,
  addTask,
  updateTaskStatus,
} = require('../controllers/taskController');

router.get('/', getTasks);
router.post('/', addTask);
router.patch('/:id', updateTaskStatus);

module.exports = router;
