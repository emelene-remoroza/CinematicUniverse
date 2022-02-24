import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
import styled from 'styled-components'

// import { useSelector } from 'react-redux'

import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'

const NavGroup = styled.nav`
  float: right;
`

const NavLink = styled(Link)`
  margin-right: 30px;
`

function Header () {
  const { loginWithRedirect, logout } = useAuth0()

  // const user = useSelector(state => state.currentUser)
  function handleLogOff (e) {
    e.preventDefault()
    logout()
  }

  function handleRegister (e) {
    e.preventDefault()
    return loginWithRedirect({ redirectUri: `${window.location.origin}/register` })
  }

  function handleSignIn (e) {
    e.preventDefault()
    loginWithRedirect()
  }

  return (
    <>

      <NavGroup>
        <NavLink to='/'>Home</NavLink>
        <IfAuthenticated>
          <a href='/' onClick={handleLogOff}>Logout</a>
        </IfAuthenticated>
        <IfNotAuthenticated>
          <a href='/' onClick={handleRegister}>Register</a>
          <a href='/' onClick={handleSignIn}>Sign in</a>
        </IfNotAuthenticated>
      </NavGroup>
      <h1>Movies</h1>

    </>
  )
}

export default Header
