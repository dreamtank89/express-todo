const TodoModel = require('../models/Todo')

// Define CRUD Here
const createTodo = async (req, res) => {
    try {
        // fill any req here
        const { title } = req.body
        const newTodoData = await TodoModel.createTodo(title)
        // res.json(newTodoData)
        console.log(newTodoData)
        res.redirect('/todos')
    } catch (error) {
        console.log('Eror = ' + error)
    }
}

const getTodos = async (req, res) => {
    try {
        // fill any req here
        const todos = await TodoModel.getTodos()
        // console.log(allTodos)
        res.render('todos', { todos })
    } catch (error) {
        console.log('Eror = ' + error)
    }
}

const updateTodo = async (req, res) => {
    try {
        // fill any req here
    } catch (error) {
        console.log('Eror = ' + error)
    }
}

const deleteTodo = async (req, res) => {
    try {
        // fill any req here
    } catch (error) {
        console.log('Eror = ' + error)
    }
}

module.exports = {
    createTodo,
    getTodos,
    updateTodo,
    deleteTodo,
}
