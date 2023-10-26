const express = require('express')
const morgan = require('morgan')

// var expressLayouts = require('express-ejs-layouts')

// const dotenv = require('dotenv').config()
const port = process.env.PORT || 5000

const app = express()
app.set('view engine', 'ejs')

app.use(express.static('public'))
app.use(morgan('tiny'))
app.use(express.urlencoded({ extended: true }))

// app.use(expressLayouts)

app.use('/', require('./routes/mainRoutes'))
app.use('/todos', require('./routes/todoRoutes'))

app.listen(port, () => {
    console.log(`App is running on port ${port}`)
})
