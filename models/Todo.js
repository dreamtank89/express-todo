const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const getTodos = async () => {
    return prisma.todo.findMany()
}

const getTodo = async (id) => {
    console.log('Prisma ID', id)

    const results = await prisma.todo.findUnique({
        where: { id: id },
    })
    console.log('UF:', results)
    return results
}

const createTodo = async (title) => {
    return prisma.todo.create({ data: { title, completed: false } })
}

const updateTodo = async (id, todoData) => {
    return prisma.todo.update({
        where: { id: id },
        data: todoData,
    })
}

const deleteTodo = async (id) => {
    return prisma.todo.delete({ where: { id: id } })
}

module.exports = {
    createTodo,
    getTodos,
    updateTodo,
    deleteTodo,
    getTodo,
}
