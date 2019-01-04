'use strict'

// Import Modules
const express = require('express')
const userCtrl = require('../controllers/user')
const auth = require('../middelwares/auth')
const passport = require('passport')

// Initializing API
const api = express.Router()

// Global Routes
// signIn
api.post('/signin', userCtrl.signIn)
// signUp
api.post('/signup', userCtrl.signUp)

module.exports = api
