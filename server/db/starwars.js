const connection = require('./connection')

function getStarWars (db = connection) {
  return db('starwars').select()
}

module.exports = {
  getStarWars
}
