const connection = require('./connection')

module.exports = {
  getWatchlist,
  addMovie
  // removeMovie,
  // removeAll
}

function getWatchlist (id, db = connection) {
  return db('watchList')
    .join('users', 'users.id', 'watchList.user_id')
    .select()
    .where('user_id', id)
}

function addMovie (id, marvelId, db = connection) {
  return db('watchList')
    .insert({ marvel_id: marvelId, id })
    .then(id => {
      return getWatchlist(id)
    })
}

// function removeMovie

// function removeAll
