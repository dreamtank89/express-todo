const TodoModel = require('../models/Todo')

// Define CRUD Here
const createTodo = async (req, res) => {
    try {
        // fill any req here
        const todoData = req.body
        console.log(todoData)
        // const newTodoData = await TodoModel.createTodo(todoData)
        // res.json(newTodoData)
        res.redirect('/todos')
    } catch (error) {
        console.log('Eror = ' + error)
    }
}

const getTodos = async (req, res) => {
    try {
        // fill any req here
        res.render('todos')
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
