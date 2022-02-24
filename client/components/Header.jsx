import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'

function Header () {
  const { loginWithRedirect, logout } = useAuth0()

  function handleLogOff (e) {
    e.preventDefault()
    logout()
  }

  function handleRegister (e) {
    e.preventDefault()
    return loginWithRedirect()
  }

  function handleSignIn (e) {
    e.preventDefault()
    loginWithRedirect()
  }

  return (
    <>
      <IfAuthenticated>
        <a href='/' onClick={handleLogOff}>Logout</a>
      </IfAuthenticated>
      <IfNotAuthenticated>
        <a href='/' onClick={handleRegister}>Register</a>
        <a href='/' onClick={handleSignIn}>Sign in</a>
      </IfNotAuthenticated>
      <h1>Movies</h1>
    </>
  )
}

export default Header
