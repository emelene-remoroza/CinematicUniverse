import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { cacheUser } from '../auth0'

import { useSelector } from 'react-redux'
import { Routes, Route } from 'react-router-dom'

import Header from './Header'
import Body from './Body'
import Footer from './Footer'
import ErrMessage from './ErrMessage'

function App () {
  const user = useSelector(state => state.currentUser)
  cacheUser(useAuth0)

  return (
    <>
      <div>
        <Header/>
        <ErrMessage />
      </div>

      <div>
        <Body/>
      </div>

      <div>
        <Footer/>
      </div>

      {/* <Routes>
          <Route exact path='/listings ' element={<Header/>} />
          <Route path='/listings ' element={<Footer/>} />
          <Route path='/listings ' element={<Body/>} />

        </Routes> */}

    </>
  )
}

export default App
