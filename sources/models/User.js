/*
  This file is a part of Netfy
  Author: Angel Labrada Massó
 */

// ===============================================================
// Import Modules
// ===============================================================
const mongoose = require('mongoose')
const { Schema } = mongoose
const bcrypt = require('bcryptjs')

// ===============================================================
// UserSchema
// ===============================================================
const UserSchema = new Schema({
  name: { type: String, require: true },
  email: { type: String, lowercase: true, require: true },
  username: { type: String, lowercase: true, require: true },
  password: { type: String, require: true },
  enabled: { type: Boolean, default: true },
  signupDate: { type: Date, default: Date.now() },
  lastLogin: Date,
  locked: { type: Boolean, default: false },
  expired: Date,
  expiresAt: Date,
  roles: String,
  credentialsExpired: Date,
  credentialExpireAt: Date,
  phone: Number,
  address: String,
  locale: String,
  avatar: String
})

// ===============================================================
// Check Password and Encrypt Password
// ===============================================================
UserSchema.methods = {
  // Check Password
	checkPassword: function (inputPassword) {
		return bcrypt.compareSync(inputPassword, this.password)
	},
  // Encrypt Password
	hashPassword: plainTextPassword => {
		return bcrypt.hashSync(plainTextPassword, 10)
	}
}

module.exports = mongoose.model('User', UserSchema)
