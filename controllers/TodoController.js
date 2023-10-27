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
    const locals = {
        title: 'Todo List',
    }
    try {
        // fill any req here
        const todos = await TodoModel.getTodos()
        const title = 'Todo List'
        res.render('todos', { todos, locals, layout: 'layouts/main' })
    } catch (error) {
        console.log('Eror = ' + error)
    }
}

const getTodoById = async (req, res) => {
    try {
        // fill any req here
        const id = parseInt(req.params.id)
        // console.log(typeof id)
        const todo = await TodoModel.getTodo(id)
        res.render('todo', { todo })
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
        const id = parseInt(req.params.id)
        const delItemId = await TodoModel.deleteTodo(id)

        res.redirect('/todos')
    } catch (error) {
        console.log('Eror = ' + error)
    }
}

module.exports = {
    createTodo,
    getTodos,
    updateTodo,
    deleteTodo,
    getTodoById,
}
