const express = require('express')
const db = require('../db/watchlist')

const router = express.Router()

module.exports = router

router.get('/:id', (req, res) => {
  const id = Number(req.params.id)
  db.getWatchlist(id)
    .then(results => {
      return res.json(results)
    })
    .catch(e => console.log(e))
})

router.post('/', (req, res) => {
  const { marvelId } = req.body
  const id = 'auth0|567'
  db.addMovie(id, marvelId)
    .then(results => {
      return res.json(results)
    })
    .catch(e => console.log(e))
})
