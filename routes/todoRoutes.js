const express = require('express')
const router = express.Router()

const todoController = require('../controllers/TodoController')

router.post('/', todoController.createTodo)
router.get('/', todoController.getTodos)
router.get('/id/:id', todoController.getTodo)
// router.put('/update/:id', todoController.updateTodo)
router.post('/delete/id/:id', todoController.deleteTodo)

module.exports = router
