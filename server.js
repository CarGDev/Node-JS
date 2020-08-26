const express = require('express')
const bodyParser = require('body-parser')
const route = require('./network/routers')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
route(app)

app.use('/app', express.static('public'))

app.listen(3000);
console.log('La aplicacion esta escuchando en http://localhost:3000')