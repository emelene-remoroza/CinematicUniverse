const connection = require('./connection')

module.exports = {
  userExists,
  getUserByName,
  createUser,
  getUserById
}

function userExists (auth0Id, db = connection) {
  return db('users')
    .count('id as n')
    .where('auth0_id', auth0Id)
    .then(count => {
      return count[0].n > 0
    })
}

function getUserByName (username, db = connection) {
  return db('users')
    .select()
    .where('username', username)
    .first()
}

function createUser (user, db = connection) {
  return db('users')
    .insert(user)
}

function getUserById (userName, db = connection) {
  return db('users')
    .select()
    .where('auth0_id', userName)
}
