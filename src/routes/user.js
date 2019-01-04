/*
  This file is a part of Netfy
  Author: Angel Labrada Massó
 */
'use strict'

// ===============================================================
// Import Modules
// ===============================================================
const router = require('express').Router()
const passport = require('passport')

// ===============================================================
// Routes
// ===============================================================
// Route SignIn
router.post('/', passport.authenticate('local', {
  successRedirect: '/dashboard',
  failureFlash: true
}))
// Route Logout
router.get('/logout', (req, res) => {
  req.logout()
  req.flash('message', 'You are loggued out now')
  res.redirect('/')
})

module.exports = router
