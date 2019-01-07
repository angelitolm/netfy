/*
  This file is a part of Netfy
  Author: Angel Labrada Massó
 */
'use strict'

// ===============================================================
// Import Modules
// ===============================================================
const express = require('express')
const path = require('path')
const methodOverride = require('method-override')
const session = require('express-session')
const flash = require('connect-flash')
const passport = require('passport')
const morgan = require('morgan')
const api = require('./src/routes/user')
const { SECRET_TOKEN } = require('./src/configs/parameters')

// ===============================================================
// Initializing App with Express Framework
// ===============================================================
const app = express()
require('./src/configs/passport')

// ===============================================================
// Middleware
// ===============================================================
// Debug by console everything the requests to making on web server
app.use(morgan('dev'))
// App use format json for all requests
app.use(express.json())
app.use(methodOverride('_method'))
// Using Session Variables
app.use(session({
  secret: SECRET_TOKEN,
  resave: true,
  saveUninitialized: true,
  cookie: { secure: true }
}))

app.use(passport.initialize()) // Initializing passport
app.use(passport.session()) // Save Authentication User
app.use(flash()) // Save Flash Messages

// ===============================================================
// Global Variables
// ===============================================================
app.use((req, res, next) => {
  res.locals.success_msg = req.flash('success_msg')
  res.locals.error_msg = req.flash('error_msg')
  res.locals.error = req.flash('error')
  res.locals.user = req.user || null
  next()
})

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
