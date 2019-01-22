/*
  This file is a part of Netfy
  Author: Angel Labrada Massó
 */

// ===============================================================
// Import Modules
// ===============================================================
const express = require('express')
const router = express.Router()
const passport =require('passport')
const { SignUp } = require('../controllers/user')

// ===============================================================
// Routes
// ===============================================================
// Route Dashboard
router.get('/api/dashboard', (req, res, next) => {
  console.log('===== user!!======')
  console.log(req.user)
  if (req.user) {
      res.json({ user: req.user })
  } else {
      res.json({ user: null })
  }
})

router.get('/', (req, res, next) => {
  console.log('===== user!!======')
  console.log(req.user)
  if (req.user) {
      res.json({ user: req.user })
  } else {
      res.json({ user: null })
  }
})

// Route SignIn
router.post('/api/signin',
  function (req, res, next) {
    console.log('routes/user.js, login, req.body: ');
    console.log(req.body)
    next()
  },
  passport.authenticate('local'),
  (req, res) => {
    console.log('logged in', req.user);
    let userInfo = {
        username: req.user.username
    };
    res.send(userInfo);
  }
)

router.post('/api/signup', SignUp) // Route SignUp

// Route Logout
router.post('/api/logout', (req, res) => {
  req.logout()
  req.flash('success_msg', 'You are loggued out now')
  res.redirect('/api')
})

module.exports = router
