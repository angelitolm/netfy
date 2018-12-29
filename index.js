'use strict'

// Import Modules
const app = require('./app')
const mongoose = require('mongoose')

// Settings
const config = require('./config')

// Connection to Database
mongoose.set('useCreateIndex', true)
mongoose.connect(config.dbUri, { useNewUrlParser: true })
  .then(db => console.log('MongoDB is running'))
  .catch(err => console.error(err))

// Starting the server
app.listen(config.port, () => {
  console.log(`API Rest Netfy running on http://localhost:${config.port}`)
})

module.exports = mongoose
