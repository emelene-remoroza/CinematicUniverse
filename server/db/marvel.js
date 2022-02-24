const connection = require('./connection')

function getMarvel (db = connection) {
  return db('Marvel').select()
}

module.exports = {
  getMarvel
}
