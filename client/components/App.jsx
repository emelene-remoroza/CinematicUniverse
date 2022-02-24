import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { cacheUser } from '../auth0'
import { useSelector } from 'react-redux'
// import { Routes, Route } from 'react-router-dom'

import Header from './Header'
import MarvelList from './MarvelList'
import Footer from './Footer'
import ErrMessage from './ErrMessage'

function App () {
  // const user = useSelector(state => state.currentUser)
  cacheUser(useAuth0)

  return (
    <>
      <div>
        {/* <div className='app'>
          <h1>Trial</h1>
          {user?.name && (
            <div>
              <div style={{ float: 'right' }}>
                <p>Welcome, {user.name}</p>
                <img src={user.picture} alt={`${user.name} thumbnail`} width="100px" />
              </div>
            </div>

          )}
        </div> */}

        <div>
          <Header/>
          <ErrMessage />
        </div>

        <div>
          <MarvelList />
        </div>

        <div>
          <Footer/>
        </div>

        {/* <Routes>
          <Route exact path='/listings ' element={<Header/>} />
          <Route path='/listings ' element={<Footer/>} />
          <Route path='/listings ' element={<Body/>} />

        </Routes> */}
      </div>
    </>
  )
}

export default App
