'use strict'

// Import Modules
const express = require('express')
const userCtrl = require('../controllers/user')
const auth = require('../middelwares/auth')

// Initializing API
const api = express.Router()

// Global Routes
// signIn
api.post('/signin', userCtrl.signIn)
// signUp
api.post('/signup', userCtrl.signUp)

// api.get('/', (req, res) => {
//   res.json({
//     status: 'API is running!!!'
//   })
// })

module.exports = api
