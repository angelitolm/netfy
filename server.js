'use strict'

// Import Modules
const express = require('express')
const morgan = require('morgan')
const path = require('path')
const session = require('express-session')
const api = require('./src/routes/app.routes')
const { SECRET_TOKEN } = require('./src/configs/passport')

// Database Config
// const { mongoose } = require('./index')

// Initializing App
const app = express()

// Middleware
app.use(morgan('dev'))
app.use(express.json())
app.use(session({
  secret: SECRET_TOKEN,
  resave: false,
  seveUnitialized: false
}))

// Routes API
app.use('/', api)

// Route Login
app.get('/login', (req, res) => {
  res.send({ message: 'login' })
})

// Static files
app.use(express.static(path.join(__dirname, 'src/public')))

module.exports = app
