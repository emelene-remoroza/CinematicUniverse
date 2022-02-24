import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { cacheUser } from '../auth0'
// import { useSelector } from 'react-redux'
import { Routes, Route } from 'react-router-dom'

import Header from './Header'
import Footer from './Footer'
import ErrMessage from './ErrMessage'
import Marvel from './Marvel'
import Movie from './Movie'

function App () {
  // const user = useSelector(state => state.currentUser)
  cacheUser(useAuth0)

  return (
    <>
      <div>
        {/* <div className='app'>
          {user?.name && (
            <div>
              <div style={{ float: 'right' }}>
                <p>Welcome, {user.name}</p>
                <img src={user.picture} alt={`${user.name} thumbnail`} width="100px" />
              </div>
            </div>

          )}
        </div> */}
        <header>
          <Header/>
          <ErrMessage />
        </header>

        <Routes>
          <Route path='/' element={<>This is the home page</>} />
          <Route path='/marvel' element={<Marvel />} />
          <Route path='/movie' element={<Movie />} />
        </Routes>

        <footer>
          <Footer/>
        </footer>
      </div>
    </>
  )
}

export default App
