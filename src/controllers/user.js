'use strict'

// Import Modules
const User = require('../models/user')
const service = require('../services')

// SignUp
function signUp (req, res) {
  // let errors = []
  // const { fullName, email, username, password, rpassword } = req.body

  console.log(req.body.fullName)

  return res.status(200).send(req.body.fullName)

  // Pre Validations
  // Password miss match
  // if (password !== rpassword) errors.push({ status_msg: 'error_pwd_miss_match' })
  // // Password don't have max length
  // if (password.length < 6) errors.push({ status_msg: 'error_pwd_length' })
  // // Send errors
  // if (errors.length > 0) res.status(500).send({ errors, fullName, email, username, password, rpassword })
  // else {
  //   // Looking for email coincidence
  //   const emailUser = User.findOne({ email: email })
  //   if (emailUser) {
  //     req.status(406).send({ status_msg: 'err_email_exist' })
  //   } else {
  //     // Save a new User
  //     const newUser = new User({ fullName, email, username, password })
  //     newUser.password = newUser.encryptPassword(password)
  //     req.status(200).send({ status_msg: 'success' })
  //     res.redirect('/dashboard')
  //   }
  // }
  // const user = new User({
  //   fullName: req.body.fullName,
  //   email: req.body.email,
  //   username: req.body.username,
  //   password: req.body.password
  // })
  //
  // // Pre Validation
  // // The passwords miss match
  // // if (req.body.password !== req.body.rpassword) res.status(500).send({ status: 'error_pwd' })
  // // else res.status(201).send({ status: 'success' })
  //
  // Save User
  // user.save((err) => {
  //   if (err) {
  //     console.log(err)
  //     return res.status(500).send({ message: `Error to create user: ${err}` })
  //   }

  //   return res.status(201).send({ token: service.createToken(user) })
  // })
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
