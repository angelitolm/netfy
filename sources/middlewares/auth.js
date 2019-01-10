/*
  This file is a part of Netfy
  Author: Angel Labrada Massó
 */

// ===============================================================
// User is Authenticated
// ===============================================================
const auth = {}

auth.isAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next()
  }

  req.flash('error_msg', 'Not Authorized')
  res.status(403).send({ message: 'Not Authorized' })
}

module.exports = auth
