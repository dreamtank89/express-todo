const express = require('express')
const router = express.Router()

const todoController = require('../controllers/TodoController')

router.post('/', todoController.createTodo)
router.get('/', todoController.getTodos)
// router.get('/todos/:id', todoController.getTodoById)
// router.put('/todos/:id', todoController.updateTodo)
// router.delete('/todos/:id', todoController.deleteTodo)

module.exports = router
