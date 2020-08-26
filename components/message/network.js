const express = require('express')
const router = express.Router()
const response = require('../../network/response')
const controller = require('./controller')

router.get('/', function (req, res) {
  console.log(req.headers)
  res.header({
    "custom-header": "Nuestro valor predeterminado"
  })
  response.success(req, res, 'Lista de mensajes')
})

router.post('/', function (req, res) {

  controller.addMessage(req.body.user, req.body.message)
    .then((fullMessage) => {
      response.success(req, res, fullMessage, 201)
    })
    .catch (e => {
      response.error(req, res, 'Invalid information', 400, 'Login error')
    })
})


module.exports = router