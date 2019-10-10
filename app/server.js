const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const routes = require('./web/Api')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(routes)

app.listen(80, () => {
  console.log('Server listening on port 80')
})
