'use strict'

// Import Modules
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt-nodejs')
const crypto = require('crypto')

// UserSchema
const UserSchema = new Schema({
  username: { type: String, unique: true, lowercase: true },
  email: { type: String, unique: true, lowercase: true },
  enabled: Boolean,
  password: { type: String, select: false },
  signupDate: { type: Date, default: Date.now() },
  lastLogin: Date,
  locked: Boolean,
  expired: Date,
  expiresAt: Date,
  roles: String,
  credentialsExpired: Date,
  credentialExpireAt: Date,
  name: String,
  phone: Number,
  address: String,
  locale: String,
  avatar: String
})

// Befor save User
UserSchema.pre('save', (next) => {
  let user = this

  // Salt
  bcrypt.genSalt(10, (err, salt) => {
    if (err) return next(err)

    // Encrypt Password
    bcrypt.hash(user.password, salt, null, (err, hash) => {
      if (err) return next(err)

      user.password = hash
      next()
    })
  })
})

// Avatar
UserSchema.methods.gravatar = function () {
  if (!this.email) return `https://gravatar.com/avatar/?s=200&d=retro`

  // Encrypt picture name
  const md5 = crypto.createHash('md5').update(this.email).digest('hex')
  return `https://gravatar.com/avatar/${md5}?s=200&d=retro`
}

module.exports = mongoose.model('User', UserSchema)
