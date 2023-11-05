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

        res.render('todos', { todos, locals, layout: 'layouts/main' })
    } catch (error) {
        console.log('Eror = ' + error)
    }
}

const getTodo = async (req, res) => {
    const locals = {
        title: 'Todo List',
    }
    try {
        // fill any req here
        const id = parseInt(req.params.id, 10)

        const todo = await TodoModel.getTodo(id)
        console.log('Controller ID:', id)
        res.render('todo', { todo, locals })
        // res.send(todo)
    } catch (error) {
        console.log('Eror = ' + error)
    }
}

const updateTodo = async (req, res) => {
    const id = parseInt(req.params.id)
    const { title, completed } = req.body
    const todoData = {
        title: title,
        completed: completed,
    }
    try {
        // fill any req here
        // const updateData = await TodoModel.updateTodo(id, todoData)
        // console.log(updateData)
        // res.redirect(`/todos/id/${id}`)
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
    getTodo,
}
