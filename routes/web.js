let express = require('express')
let barcode = require('../controllers/barcode-controller')
let Route = express()

// Get index.pug
Route.get('/', (req, res, next) => {
  res.render('index')
})

Route.post('/', barcode.create)

module.exports = Route
