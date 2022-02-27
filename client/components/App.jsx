import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useAuth0 } from '@auth0/auth0-react'
import { cacheUser } from '../auth0'

import { Routes, Route } from 'react-router-dom'

import { fetchMarvel } from '../actions'

import Header from './Header'
import Movie from './Movie'
import MarvelList from './MarvelList'
import Footer from './Footer'
import Home from './Home'

function App () {
  cacheUser(useAuth0)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchMarvel())
  }, [])

  return (
    <>
      <div>
        <header>
          <Header/>
        </header>

        <Routes>
          <Route path='/' element={<Home />} />
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
