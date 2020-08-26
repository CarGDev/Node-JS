const express = require('express')
const router = express.Router()

const app = express()

app.use(router)

router.get('/', function (req, res) {
  res.send('hola')
})


app.listen(3000);
console.log('La aplicacion esta escuchando en http://localhost:3000')