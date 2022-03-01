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

router.post('/marvel', (req, res) => {
  const { marvelId } = req.body
  const id = 'auth0|567'
  db.addMarvel(id, marvelId)
    .then(results => {
      return res.json(results)
    })
    .catch(e => console.log(e))
})

router.post('/starwars', (req, res) => {
  const { starwarsId } = req.body
  const id = 'auth0|567'
  db.addStarwars(id, starwarsId)
    .then(results => {
      return res.json(results)
    })
    .catch(e => console.log(e))
})
