/*
  This file is a part of Netfy
  Author: Angel Labrada Massó
 */
'use strict'

// ===============================================================
// Import Modules
// ===============================================================
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
// const mongoose = require('mongoose')
const User = require('../models/user')

// ===============================================================
// Create a new Strategy
// ===============================================================
passport.use(new LocalStrategy({
  usernameField: 'username'
}, async (username, password, done) => {
  // Match Email's User
  const user = await User.findOne({ username: username })
  if (!user) {
    return done(null, false, { message: 'Not User found.' })
  } else {
    // Match Password's User
    const match = await user.matchPassword(password)
    if (match) {
      return done(null, user)
    } else {
      return done(null, false, { message: 'Incorrect Password.' })
    }
  }
}))

// Serialize User with passport
passport.serializeUser((user, done) => {
  done(null, user.id)
})

// Deserialize User with passport
passport.deserializeUser((id, done) => {
  User.findbyId(id, (err, user) => {
    done(err, user)
  })
})
