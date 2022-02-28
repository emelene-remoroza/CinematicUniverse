import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'

export default function NavBar () {
  const location = useLocation()
  const paths = location.pathname.split('/')
  const category = paths[1]

  return (
    <nav>
      <div className='back-link'>
        {(paths.length > 2) && <NavLink to={`/${category}`}>
          Back to {`${category[0].toUpperCase()}${category.slice(1)}`} List
        </NavLink>}
      </div>
      <div className='nav-link'>
        <NavLink to='/' >
          Home
        </NavLink>
        <NavLink to='/watchlist' >
          Watchlist
        </NavLink>
      </div>
    </nav>
  )
}
