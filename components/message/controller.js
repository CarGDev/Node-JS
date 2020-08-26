const chalk = require('chalk')
const store = require('./store')

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
    store.add(fullMessage)
    resolve(fullMessage)
  })
}

function getMessage(filterUser) {
  return new Promise ((resolve, reject) => {
    resolve(store.list(filterUser))
  })
}

function updateMessage (id, message) {
  return new Promise(async (resolve, reject) => {
    if (!id || !message) {
      reject('Invalid data')
      return false
    }
    const result = await store.update(id, message)
    resolve(result)
  })
}

function deleteMessage(id) {
  return new Promise(async (resolve, reject) => {
    if (!id) {
      reject('Invalid Id')
      return false
    }
    store.delete(id)
      .then (() => {
        resolve()
      })
      .catch(e => {
        reject(e)
      })
  })
}

module.exports = {
  addMessage,
  getMessage,
  updateMessage,
  deleteMessage
}

