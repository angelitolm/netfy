/*
  This file is a part of Netfy
  Author: Angel Labrada Massó
 */

// ===============================================================
// Import Modules
// ===============================================================
const express = require('express')
const bodyParser = require('body-parser')
const flash = require('connect-flash')
const methodOverride = require('method-override')
const morgan = require('morgan')
const passport = require('passport')
const path = require('path')
const useroute = require('./routes/user')
const { SECRET_TOKEN } = require('../config/parameters')
const session = require('express-session')

// ===============================================================
// Initializing API with Express Framework
// ===============================================================
const api = express()
require('../config/passport');

// ===============================================================
// Middleware
// ===============================================================
// Debug by console everything the requests to making on web server
api.use(morgan('dev'))
// API use format json for all requests
api.use(bodyParser.urlencoded({ 'extended': 'false' }))
api.use(methodOverride('_method'))
// Using Session Variables
api.use(session({
  secret: SECRET_TOKEN,
  resave: true,
  saveUninitialized: true
  // cookie: { secure: true }
}))
// Passport
api.use(passport.initialize()) // Initializing passport
api.use(passport.session()) // Save Authentication User
api.use(flash()) // Save Flash Messages

// ===============================================================
// Global Variables
// ===============================================================
api.use((req, res, next) => {
  res.locals.success_msg = req.flash('success_msg')
  res.locals.error_msg = req.flash('error_msg')
  res.locals.error = req.flash('error')
  res.locals.user = req.user || null
  next()
})

// ===============================================================
// Routes
// ===============================================================
api.get('/', (req, res) => {
  res.status(200).send('<h1>The API Rest running here...')
})
api.use(useroute) // User Route

// ===============================================================
// Static files
// ===============================================================
api.use(express.static(path.join(__dirname, '/public')))

module.exports = api
