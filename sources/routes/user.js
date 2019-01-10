/*
  This file is a part of Netfy
  Author: Angel Labrada Massó
 */

// ===============================================================
// Import Modules
// ===============================================================
const useroute = require('express').Router()
const passport =require('passport')
const userCtrl = require('../controllers/user')

// ===============================================================
// Routes
// ===============================================================
// Route SignIn
useroute.post('/signin', passport.authenticate('local', {
  successRedirect: '/dashboard',
  failureFlash: true,
  failureRedirect: '/'
}))
// Route SignUp
useroute.post('/signup', userCtrl.SignUp)
// Route Logout
useroute.post('/logout', (req, res) => {
  req.logout()
  req.flash('success_msg', 'You are loggued out now')
  res.redirect('/')
})

module.exports = useroute
