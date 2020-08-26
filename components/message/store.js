const db = require('mongoose')
const chalk = require('chalk')
const password = require('./password')

const url = `mongodb+srv://db_user_nodeServer:${password.password}V@cluster0.izd6p.mongodb.net/${password.dataBase}?retryWrites=true&w=majority`
db.Promise = global.Promise
db.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('[db]: Connected successfully'))
  .catch(e => console.error(chalk.red(`[db Error]: ${e}`)))



function addMessage(message) {
  list.push(message)
}

function getMessage(){
  return list
}

module.exports = {
  add: addMessage,
  list: getMessage
  //get
  //update
  //delete
}