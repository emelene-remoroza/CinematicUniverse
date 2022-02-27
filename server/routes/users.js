const express = require('express')
const db = require('../db/users')
const checkJwt = require('../auth0.js')

const router = express.Router()

module.exports = router

// POST /api/v1/users
router.post('/', checkJwt, async (req, res) => {
  const { email } = req.body
  const user = {
    auth0_id: req.user?.sub,
    email
  }
  try {
    const userExists = await db.userExists(req.user?.sub)
    if (userExists) return res.sendStatus(200)

    await db.createUser(user)
    res.sendStatus(201)
  } catch (err) {
    console.error(err)
    res.status(500).send(err.message)
  }
})

// GET /api/v1/usersId
// router.get('/', checkJwt, async (req, res) => {

//   db.getUserById(userById)
//     .then(user => {
//       res.json({ user })
//       return null
//     })
//     .catch(err => {
//       console.error(err)
//       res.sendStatus(500)
//     })
// })

//   try {
//     await db.getUser(user)
//     res.sendStatus(201)
//   } catch (err) {
//     console.error(err)
//     res.status(500).send(err.message)
//   }
// })
