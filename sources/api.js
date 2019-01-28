/*
  This file is a part of Netfy
  Author: Angel Labrada Massó
 */

// ===============================================================
// Import Modules
// ===============================================================
const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const passport = require('../config/passport')
const { SECRET_TOKEN, dbUri } = require('../config/parameters')
const session = require('express-session')
const MongoStore = require('connect-mongo')(session)

// ===============================================================
// Route requires
// ===============================================================
const user = require('./routes/user')
const passport = require('passport')
const path = require('path')
const user = require('./routes/user')
const { SECRET_TOKEN } = require('../config/parameters')
const session = require('express-session')
const cors = require('cors');

// ===============================================================
// Initializing API with Express Framework
// ===============================================================
const api = express()
// require('../config/passport');

// ===============================================================
// Middleware
// ===============================================================
api.use(cors({ origin: true, credentials: true  }));
// Debug by console everything the requests to making on web server
api.use(morgan('dev'))
// API use format json for all requests
api.use(bodyParser.urlencoded({ 'extended': 'false' }))
api.use(bodyParser.json())
// Using Session Variables
api.use(session({
  secret: SECRET_TOKEN,
  resave: false, //required
// api.use(methodOverride('_method'))
// Using Session Variables
api.use(session({
  secret: SECRET_TOKEN,
  resave: true, //required
  saveUninitialized: false //required
  // cookie: { secure: true }
}))
// Passport
api.use(passport.initialize()) // Initializing passport
api.use(passport.session()) // Save Authentication User

// ===============================================================
// Global Variables
// ===============================================================
api.use((req, res, next) => {
  res.locals.success_msg = req.flash('success_msg')
  res.locals.error_msg = req.flash('error_msg')
  res.locals.error = req.flash('error')
  res.locals.user = req.user || null

  console.log('req.session', req.session);

  return next()
})

// ===============================================================
// Routes
// ===============================================================
api.get('/api', (req, res) => {
  res.status(200).send('<h1>The API Rest running here...')
})
api.use(user) // User Route
api.get('/api/user', (req, res, next) => {
  console.log('===== user!!======')
  console.log(req.user)
  if (req.user) {
      res.json({ user: req.user })
  } else {
      res.json({ user: null })
  }
})

// ===============================================================
// Static files
// ===============================================================
// api.use(express.static(path.join(__dirname, '/public')))

module.exports = api
