/*
  This file is a part of Netfy
  Author: Angel Labrada Massó
 */
'use strict'

// ===============================================================
// Import Modules
// ===============================================================
const express = require('express')
const morgan = require('morgan')
const path = require('path')
const passport = require('passport')
const flash = require('connect-flash')
const session = require('express-session')
const api = require('./src/routes/app')
const { SECRET_TOKEN } = require('./src/configs/parameters')

// ===============================================================
// Initializing App with Express Framework
// ===============================================================
const app = express()

// ===============================================================
// Middleware
// ===============================================================
// Debug by console everything the requests to making on web server
app.use(morgan('dev'))
// App use format json for all requests
app.use(express.json())
// Using Session Variables
app.use(session({
  secret: SECRET_TOKEN,
  resave: true,
  saveUninitialized: true,
  cookie: { secure: true }
}))
// Initializing passport
app.use(passport.initialize())
// Save Authentication User
app.use(passport.session())
// Save Flash Messages
app.use(flash())

// ===============================================================
// Routes API
// ===============================================================
// app.use(api)

// Route Login
// app.get('/login', (req, res) => {
//   res.send({ message: 'login' })
// })

// ===============================================================
// Static files
// ===============================================================
app.use(express.static(path.join(__dirname, 'src/public')))

module.exports = app
