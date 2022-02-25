const express = require('express')
const path = require('path')

const movieRoutes = require('./routes/movie')
const marvelRoutes = require('./routes/marvel')
const userRoutes = require('./routes/users')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/movie', movieRoutes) // external api route
server.use('/api/v1/marvel', marvelRoutes)
server.use('/api/v1/users', userRoutes)

server.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'))
})

module.exports = server
