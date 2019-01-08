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
const userCtrl = require('../controllers/user')
const User = require('../models/user')

// ===============================================================
// Routes
// ===============================================================
// Route SignIn
router.post('/signin', passport.authenticate('local', {
  successRedirect: '/dashboard',
  failureFlash: true,
  failureRedirect: '/'
}))
// router.post('/signup', (req, res) => {
//   res.status(200).send({ status: false })
// })
// Route SignUn
// router.get('/signup', async (req, res) => {
//   res.status(200).send({ message: 'signup' })
// })
router.get('/signup', userCtrl.signUp)

// router.post('/signup', passport.authenticate('local'), (req, res) => {
//   // If this function gets called, authentication was successful.
//   // `req.user` contains the authenticated user.
//   // res.redirect('/dashboard')
// })
router.post('/signup', userCtrl.signUp)
// Route Logout
router.get('/logout', (req, res) => {
  req.logout()
  req.flash('success_msg', 'You are loggued out now')
  res.redirect('/')
})

module.exports = router
