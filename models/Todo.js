const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const getTodos = async () => {
    return prisma.todo.findMany()
}

const createTodo = async (todoData) => {
    return prisma.todo.create({ data: todoData })
}

const updateTodo = async (id, todoData) => {
    return prisma.todo.update({
        where: { id: id },
        data: todoData,
    })
}

const deleteTodo = async (id) => {
    return prisma.todo.delete({
        where: { id: id },
    })
}

module.exports = {
    createTodo,
    getTodos,
    updateTodo,
    deleteTodo,
}
