import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { cacheUser } from '../auth0'

import { Routes, Route } from 'react-router-dom'

import Header from './Header'
import MarvelList from './MarvelList'
import Footer from './Footer'
// import ErrMessage from './ErrMessage'
import Movie from './Movie'

function App () {
  cacheUser(useAuth0)

  return (
    <>
      <div>
        <header>
          <Header/>
          {/* <ErrMessage /> */}
        </header>

        <Routes>
          <Route path='/' element={<>This is the home page</>} />
          <Route path='/marvel' element={<MarvelList />} />
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
