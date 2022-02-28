import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useAuth0 } from '@auth0/auth0-react'
import { cacheUser } from '../auth0'

import { Routes, Route } from 'react-router-dom'

import { fetchMarvel, fetchWatchlist } from '../actions'
import { fetchStarWars } from '../actions/starwars'

import Header from './Header'
import Movie from './Movie'
import MarvelList from './MarvelList'
import StarWarsList from './StarWarsList'
import Footer from './Footer'
import WatchList from './WatchList'
import Home from './Home'
import NavBar from './NavBar'

function App () {
  cacheUser(useAuth0)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchMarvel())
  }, [])
  useEffect(() => {
    dispatch(fetchWatchlist())
  }, [])

  useEffect(() => {
    dispatch(fetchStarWars())
  }, [])

  return (
    <>
      <div>

        <header>
          <Header/>
        </header>
        <NavBar/>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/marvel' element={<MarvelList />} />
          <Route path='/watchlist/:id' element={<WatchList />} />
          <Route path='/marvel/:id' element={<Movie category="marvel"/>} />
          <Route path='/starwars' element={<StarWarsList />} />
          <Route path='/starwars/:id' element={<Movie category="starwars"/>} />
        </Routes>

        <footer>
          <Footer/>
        </footer>
      </div>
    </>
  )
}

export default App
