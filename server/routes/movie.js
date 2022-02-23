require('dotenv').config()
const express = require('express')
const request = require('superagent')

const router = express.Router()

router.get('/:title/:year', (req, res) => {
  const title = req.params.title
  const year = req.params.year
  const apiKey = process.env.OMDB_API_KEY
  return request.get(`http://www.omdbapi.com/?apikey=${apiKey}&t=${title}&y=${year}&plot=full`)
    .then(response => {
      return res.json(response.body)
    })
    .catch((err) => {
      console.log(err)
      res.status(500).json({ message: 'Something went wrong' })
    })
})

module.exports = router
