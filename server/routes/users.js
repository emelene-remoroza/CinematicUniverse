const express = require('express')
const db = require('../db/users')

const router = express.Router()

module.exports = router

// POST /api/v1/users
router.post('/users', async (req, res) => {
  const newUser = req.body
  const { auth0Id, email } = newUser
  const user = {
    auth0_id: auth0Id,
    email
  }
  try {
    await db.createUser(user)
    res.sendStatus(201)
  } catch (err) {
    console.error(err)
    res.status(500).send(err.message)
  }
})

// GET /api/v1/usersId
router.get('/user/:userId', async (req, res) => {
  const userById = req.params.userId
  db.getUserById(userById)
    .then(user => {
      res.json({ user })
      return null
    })
    .catch(err => {
      console.error(err)
      res.sendStatus(500)
    })
})

//   try {
//     await db.getUser(user)
//     res.sendStatus(201)
//   } catch (err) {
//     console.error(err)
//     res.status(500).send(err.message)
//   }
// })
