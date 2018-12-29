'use strict'

// Import Modules
const User = require('../models/user')
const service = require('../services')

// SignUp
function signUp (req, res) {
  const user = new User({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password
  })

  // Save User
  user.save((err) => {
    if (err) {
      console.log(err)
      return res.status(500).send({ message: `Error to create user: ${err}` })
    }

    return res.status(201).send({ token: service.createToken(user) })
  })
}

// SignIn
function signIn (req, res) {
  User.find({ username: req.body.username }, (err, user) => {
    // If something error exist
    if (err) return res.status(500).send({ message: err })
    // If User don't exist
    if (!user) return res.status(404).send({ message: 'The user don`t exist' })

    // If User is correct
    req.user = user
    res.status(200).send({
      message: 'You has signed successful',
      token: service.createToken(user)
    })
  })
}

module.exports = {
  signUp,
  signIn
}
