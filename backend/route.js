const express = require('express');
const router = express.Router();
const todoController = require('./controller');

router.get('/', todoController.getAllTodos);
router.post('/', todoController.createTodo);
router.put('/:id', todoController.updateTodoCompletion);
router.delete('/:id', todoController.deleteTodo);

module.exports = router;

// route.js