import React from 'react'
// import { NavLink } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
import { useSelector } from 'react-redux'

function Header () {
  const { loginWithRedirect, logout } = useAuth0()

  const user = useSelector(state => state.currentUser)

  function handleLogOff (e) {
    e.preventDefault()
    logout()
  }

  function handleSignIn (e) {
    e.preventDefault()
    loginWithRedirect()
  }

  return (
    <>
      <nav>
        {user?.name
          ? <a href='/' onClick={handleLogOff}>Log Out</a>
          : <a href='/' onClick={handleSignIn}>Log In</a>}

      </nav>
    </>
  )
}

export default Header
