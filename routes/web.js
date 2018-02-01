let express = require('express')
let Route = express()

// Get index.pug
Route.get('/', (req, res, next) => {
  res.render('index')
})

module.exports = Route
