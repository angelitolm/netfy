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
const morgan = require('morgan')
const passport = require('passport')
const path = require('path')
const { SECRET_TOKEN } = require('../config/parameters.js')
const session = require('express-session')

// ===============================================================
// Initializing API with Express Framework
// ===============================================================
const api = express()

// ===============================================================
// Middleware
// ===============================================================
// Debug by console everything the requests to making on web server
api.use(morgan('dev'))
// API use format json for all requests
api.use(express.json())
api.use(bodyParser.json())
api.use(bodyParser.urlencoded({ 'extended': 'false' }))

// ===============================================================
// Routes
// ===============================================================
api.get('/', (req, res) => {
  res.status(200).send({ message: 'API Rest go here...' })
})

// ===============================================================
// Static files
// ===============================================================
api.use(express.static(path.join(__dirname, '/public')))

module.exports = api
