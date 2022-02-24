const express = require('express')

const db = require('../db/marvel')

const router = express.Router()

router.get('/', (req, res) => {
  db.getMarvel()
    .then(results => {
      res.json({ marvel: results })
      return null
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ message: 'Somthing went wrong' })
    })
})

module.exports = router
