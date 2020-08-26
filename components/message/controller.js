const chalk = require('chalk')

function addMessage(user, message) {
  return new Promise((resolve, reject) => {
    if (!user || !message) {
      console.error(chalk.red(`[MessageController]: No hay mensaje`))
      return reject('Datos incorrectos')
    }
    const fullMessage = {
      user: user,
      message: message,
      date: new Date(),
    }
  
    console.log(fullMessage)
    resolve(fullMessage)
  })
}

module.exports = {
  addMessage
}