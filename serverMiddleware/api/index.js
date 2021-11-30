const express = require('express')
const app = express()

app.get('/', (req, res, next) => {
  next()
})
app.get('/products', require('./router/products.routes'))

module.exports = app