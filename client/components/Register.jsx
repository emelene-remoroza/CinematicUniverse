import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import { addUser } from '../apis/userauth'

function Register () {
  const user = useSelector(state => state)
  const history = useHistory()
  const [form, setForm] = useState({
    auth0Id: '',
    email: ''
  })

  useEffect(() => {
    setForm({
      auth0Id: user?.auth0Id,
      email: user?.email
    })
  }, [user])

  async function handleClick () {
    await addUser(form)
    history.push('/')
  }

  return (
    <>
      <h2>Register</h2>
      <div>Auth0 Id:</div>
      <div>{form.auth0Id}</div>
      <div>{form.email}</div>
      <a href='/' onClick={handleClick}>Register</a>
    </>
  )
}

export default Register
