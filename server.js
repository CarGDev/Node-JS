const express = require('express')
const bodyParser = require('body-parser')
const route = require('./network/routers')

const db = require('./db')
const app = express()
const password = require('./components/message/password')
const url = password.uri

db.connect(url)

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
route(app)

app.use('/app', express.static('public'))

app.listen(3000);
console.log('La aplicacion esta escuchando en http://localhost:3000')