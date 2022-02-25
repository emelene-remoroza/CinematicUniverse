const express = require('express')
const db = require('../db/watchlist')

const router = express.Router()

module.exports = router

router.get('/:id', (req, res) => {
  console.log('hi')
  const id = Number(req.params.id)
  console.log(id)
  db.getWatchlist(id)
    .then(results => {
      return res.json(results)
    })
    .catch(e => console.log(e))
})
