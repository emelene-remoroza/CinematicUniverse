const connection = require('./connection')

module.exports = {
  getWatchlist,
  addMarvel,
  addStarwars
}

function getWatchlist (id, db = connection) {
  return db('watchList')
    .select()
    .where('auth0_id', id)
}

function addMarvel (id, marvelId, db = connection) {
  return db('watchList')
    .insert({ auth0_id: id, marvel_id: marvelId })
    .then(() => {
      return getWatchlist(id)
    })
}
function addStarwars (id, starwarsId, db = connection) {
  return db('watchList')
    .insert({ auth0_id: id, starwars_id: starwarsId })
    .then(() => {
      return getWatchlist(id)
    })
}
