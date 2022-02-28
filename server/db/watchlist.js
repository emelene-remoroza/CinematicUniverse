const connection = require('./connection')

module.exports = {
  getWatchlist,
  addMovie
}

function getWatchlist (id, db = connection) {
  return db('watchList')
    .select()
    .where('auth0_id', id)
}

function addMovie (id, marvelId, db = connection) {
  return db('watchList')
    .insert({ marvel_id: marvelId, auth0_id: id })
    .then(() => {
      return getWatchlist(id)
    })
}
