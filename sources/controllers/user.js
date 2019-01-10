/*
  This file is a part of Netfy
  Author: Angel Labrada Massó
 */

// ===============================================================
// Import Modules
// ===============================================================
const User = require('../models/user')

// ===============================================================
// SignUp
// ===============================================================
function SignUp (req, res, next) {
  let errors = []
  const { name, email, username, password, rpassword } = req.body

  // Pre Validations
  // Password miss match
  if (password !== rpassword) errors.push({ status_msg: 'error_pwd_miss_match' })
  // Password don't have max length
  if (password < 6) errors.push({ status_msg: 'error_pwd_length' })
  // Send Errors
  if (errors > 0) res.status(500).send({ errors, name, email, username, password, rpassword })

  // Looking for username coincidence
  const findUsername = User.findOne({ username })
  if (findUsername) res.status(406).send({ status_msg: 'err_username_exist' })

  // Save a new User
  const newUser = new User({ name, email, username, password })
  newUser.password = newUser.encrtptPassword(password)
  res.status(200).send({ status_msg: 'success' })

  next()
}

module.exports = {
  SignUp
}
