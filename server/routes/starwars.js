const express = require('express')

const db = require('../db/starwars')

const router = express.Router()

router.get('/', (req, res) => {
  db.getStarWars()
    .then(results => {
      res.json({ starwars: results })
      return null
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ message: 'Somthing went wrong' })
    })
})

module.exports = router
