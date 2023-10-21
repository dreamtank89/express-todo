const express = require('express')
const morgan = require('morgan')
var expressLayouts = require('express-ejs-layouts')

// const dotenv = require('dotenv').config()
const port = process.env.PORT || 5000

const app = express()
app.set('view engine', 'ejs')

app.use(morgan('tiny'))

app.use(expressLayouts)

app.use('/', require('./routes/mainRoutes'))

app.listen(port, () => {
    console.log(`App is running on port ${port}`)
})
