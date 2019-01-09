/*
  This file is a part of Netfy
  Author: Angel Labrada Massó
 */
'use strict'

// ===============================================================
// Import Modules
// ===============================================================
const apiuser = require('express').Router()
const passport = require('passport')
const userCtrl = require('../controllers/user')

// ===============================================================
// Routes
// ===============================================================
// Route SignIn
apiuser.post('/signin', passport.authenticate('local', {
  successRedirect: '/dashboard',
  failureFlash: true,
  failureRedirect: '/'
}))
// Route SignUn
// router.get('/signup', async (req, res) => {
//   res.status(200).send({ message: 'signup' })
// })
apiuser.get('/signup', (req, res) => {
  res.status(200).send({ message: 'Sign Up Page' })
})

// router.post('/signup', passport.authenticate('local'), (req, res) => {
//   // If this function gets called, authentication was successful.
//   // `req.user` contains the authenticated user.
//   // res.redirect('/dashboard')
// })
apiuser.post('/signup', userCtrl.signUp)
// Route Logout
apiuser.get('/logout', (req, res) => {
  req.logout()
  req.flash('success_msg', 'You are loggued out now')
  res.redirect('/')
})

module.exports = apiuser
