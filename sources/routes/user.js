/*
  This file is a part of Netfy
  Author: Angel Labrada Massó
 */

// ===============================================================
// Import Modules
// ===============================================================
const express = require('express')
const router = express.Router()
<<<<<<< HEAD
=======
const passport =require('passport')
>>>>>>> 589fee2dcbd9daf26b79d76227d79836499787b5
const { SignUp } = require('../controllers/user')
const passport =require('../../config/passport')
const auth = require('../middlewares/auth')

// ===============================================================
// Routes
// ===============================================================
// Route Dashboard
<<<<<<< HEAD
router.get('/dashboard', (req, res, next) => {
=======
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
>>>>>>> 589fee2dcbd9daf26b79d76227d79836499787b5
  console.log('===== user!!======')
  console.log(req.user)
  if (req.user) {
      res.json({ user: req.user })
  } else {
      res.json({ user: null })
  }
})

// Route SignIn
<<<<<<< HEAD
router.post('/signin',
    function (req, res, next) {
        console.log('routes/user.js, login, req.body: ');
        console.log(req.body)
        next()
    },
    passport.authenticate('local'),
    (req, res) => {
        console.log('logged in', req.user);
        var userInfo = {
            username: req.user.username
        };
        res.send(userInfo);
    }
)

router.post('/signup', SignUp) // Route SignUp

// Route Logout
router.post('/logout', (req, res) => {
    if (req.user) {
        req.logout()
        res.send({ msg: 'logging out' })
    } else {
        res.send({ msg: 'no user to log out' })
    }
=======
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
>>>>>>> 589fee2dcbd9daf26b79d76227d79836499787b5
})

module.exports = router
