/*
  This file is a part of Netfy
  Author: Angel Labrada Massó
 */
'use strict'

// ===============================================================
// Import Modules
// ===============================================================
const express = require('express')
const router = express.Router()
const { isAuthenticated } = require('../middelwares/auth')

// ===============================================================
// Routes
// ===============================================================
// Dashboard
router.get('/dashboard', isAuthenticated, async (req, res) => {
  res.status(200).send({ message: 'You are in dashboard' })
})

module.exports = router
