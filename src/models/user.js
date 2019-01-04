/*
  This file is a part of Netfy
  Author: Angel Labrada Massó
 */
'use strict'

// ===============================================================
// Import Modules
// ===============================================================
const mongoose = require('mongoose')
const { Schema } = mongoose
const bcrypt = require('bcrypt-nodejs')

// ===============================================================
// UserSchema
// ===============================================================
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

// ===============================================================
// Encrypt Password
// ===============================================================
UserSchema.methods.encryptPassword = async (password) => {
  const salt = await bcrypt.genSalt(10)
  const hash = await bcrypt.hash(password, salt)
  return hash
}

// ===============================================================
// Match Password
// ===============================================================
UserSchema.methods.matchPassword = async (password) => {
  return bcrypt.compare(password, this.password)
}

module.exports = mongoose.model('User', UserSchema)
