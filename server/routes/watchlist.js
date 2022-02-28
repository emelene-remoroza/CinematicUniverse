const express = require('express')
const db = require('../db/watchlist')

const router = express.Router()

module.exports = router

router.get('/', (req, res) => {
  const id = 'auth0|567'
  db.getWatchlist(id)
    .then(results => {
      return res.json(results)
    })
    .catch(e => console.log(e))
})

router.post('/', (req, res) => {
  const { marvelId } = req.body
  const id = 'auth0|567'
  console.log('id', id)
  console.log('marvelid', marvelId)
  db.addMovie(id, marvelId)
    .then(results => {
      console.log(results)
      return res.json(results)
    })
    .catch(e => console.log(e))
})
