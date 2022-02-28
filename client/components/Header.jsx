import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'

function Header () {
  const { loginWithRedirect, user, logout } = useAuth0()

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
      <div className='login-bar'>
        <IfAuthenticated>
          <span className=''>Hi, {user?.nickname} </span>
          <a href='/' onClick={handleLogOff}>Logout</a>
        </IfAuthenticated>
        <IfNotAuthenticated>
          <a href='/' onClick={handleRegister}>Register</a>
          <a href='/' onClick={handleSignIn}>Sign in</a>
        </IfNotAuthenticated>
      </div>
      <div className='logo-bar'>
        <img src="/images/watch-verse-logo.svg" alt="watch-verse logo with movie reel icon" />
      </div>
    </>
  )
}

export default Header
