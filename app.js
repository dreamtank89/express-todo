const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const morgan = require('morgan')
const { PrismaClient } = require('@prisma/client')

const app = express()
const prisma = new PrismaClient()
// Middleware for logging
app.use(morgan('tiny'))

// Middleware for handling URL-encoded data
app.use(express.urlencoded({ extended: true }))

// Set the view engine and use EJS layouts
app.set('view engine', 'ejs')
// app.use(expressLayouts)

// Serve static files (e.g., CSS, JavaScript) from the 'public' directory
app.use(express.static('public'))

// Define your routes
app.use('/', require('./routes/mainRoutes'))
app.use('/todos', require('./routes/todoRoutes'))

// Start the server
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})
