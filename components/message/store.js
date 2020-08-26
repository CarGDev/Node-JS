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
  // list.push(message)
  const myMessage = new Model(message)
  myMessage.save()
}

async function getMessage(){
  // return list
  const messages = await Model.find()
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

module.exports = {
  add: addMessage,
  list: getMessage,
  //get
  update: updateText
  //delete
}