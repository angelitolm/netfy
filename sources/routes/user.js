/*
  This file is a part of Netfy
  Author: Angel Labrada Massó
 */

// ===============================================================
// Import Modules
// ===============================================================
const useroute = require('express').Router()
const passport =require('passport')
const { SignUp } = require('../controllers/user')

// ===============================================================
// Routes
// ===============================================================
// Route Dashboard
useroute.get('/dashboard', (req, res) => {
  res.status(200).send({ message: 'Welcome to Dashboard' })
})

// Route SignIn
useroute.post('/signin', passport.authenticate('local', {
  successRedirect: '/dashboard',
  failureRedirect: '/',
  failureFlash: true
}));

useroute.post('/signup', SignUp) // Route SignUp

// Route Logout
useroute.post('/logout', (req, res) => {
  req.logout()
  req.flash('success_msg', 'You are loggued out now')
  res.redirect('/')
})

module.exports = useroute
