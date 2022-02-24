import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useAuth0 } from '@auth0/auth0-react'
import { cacheUser } from '../auth0'
// import { useSelector } from 'react-redux'
import { Routes, Route } from 'react-router-dom'

import { fetchMarvel } from '../actions'

import Header from './Header'
import ErrMessage from './ErrMessage'
import Movie from './Movie'
import MarvelList from './MarvelList'
import Footer from './Footer'

function App () {
  // const user = useSelector(state => state.currentUser)
  cacheUser(useAuth0)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchMarvel())
  }, [])

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
          <Route path='/marvel' element={<MarvelList />} />
          <Route path='/marvel/:id' element={<Movie category="marvel"/>} />
        </Routes>

        <footer>
          <Footer/>
        </footer>
      </div>
    </>
  )
}

export default App
