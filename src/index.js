const express = require('express')
const usersRouter = require('./routes/users')
const ordersRouter = require('./routes/orders')
const searchRouter = require('./routes/search')

const app = express()
app.use(express.json())

app.use('/users', usersRouter)
app.use('/orders', ordersRouter)
app.use('/search', searchRouter)

module.exports = app
