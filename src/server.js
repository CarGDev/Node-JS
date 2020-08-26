const express = require('express')
const router = express.Router()

const app = express()

app.use(router)

router.get('/message', function (req, res) {
  res.send('Lista de mensajes')
})

router.post('/message', function (req, res) {
  res.send('Mensaje añadido')
})

app.listen(3000);
console.log('La aplicacion esta escuchando en http://localhost:3000')