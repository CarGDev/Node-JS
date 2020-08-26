const db = require('mongoose')
const chalk = require('chalk')
const password = require('./password')
const Model = require('./model')

const url = password.uri
db.Promise = global.Promise
db.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('[db]: Connected successfully'))
  .catch(e => console.error(chalk.red(`[db Error]: ${e}`)))



function addMessage(message) {
  const myMessage = new Model(message)
  myMessage.save()
}

async function getMessage(filterUser){
  let filter = {}
  if (filterUser != null){
    filter = {user: filterUser}
  }
  const messages = await Model.find(filter)
  return messages
}

async function updateText (id, message) {
  const foundMessage = await Model.findOne({
    _id: id,
  })
  foundMessage.message = message
  const newMessage = await foundMessage.save()
  return newMessage
}

function deleteText(id) {
  return Model.deleteOne({
    _id: id
  })
}

module.exports = {
  add: addMessage,
  list: getMessage,
  update: updateText,
  delete: deleteText
}