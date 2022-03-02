const connection = require('./connection')

module.exports = {
  getWatchlist,
  addMarvel,
  addStarwars,
  removeMarvel,
  removeStarwars
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

function removeMarvel (auth0Id, marvelId, db = connection) {
  return db('watchList')
    .delete()
    .where({ auth0_id: auth0Id, marvel_id: marvelId })
    .then(() => {
      return getWatchlist(auth0Id)
    })
}

function removeStarwars (auth0Id, starwarsId, db = connection) {
  return db('watchList')
    .delete()
    .where({ auth0_id: auth0Id, starwars_id: starwarsId })
    .then(() => {
      return getWatchlist(auth0Id)
    })
}
