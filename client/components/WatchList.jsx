import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

export default function WatchList (props) {
  const list = useSelector(state => state.watchlist)
  const marvel = useSelector(state => state.marvel)
  const starwars = useSelector(state => state.starwars)
  const [newlist, setnewlist] = useState(list)
  useEffect(() => {
    setnewlist(list)
  },
  [list])

  const listMarvel = newlist.map((results) => {
    return marvel.map((marvelResults) => {
      if (marvelResults.id === results.marvel_id) {
        return <li className='watch-movie' key={marvelResults.id}>
          <img src={`/images/marvel/${marvelResults.Image}`}/>
          <p className='watch-movie-title'>{marvelResults.Title}</p>
        </li>
      }
    })
  })
  const listStarwars = newlist.map((results) => {
    return starwars.map((starwarsResults) => {
      if (starwarsResults.id === results.starwars_id) {
        return <li className='watch-movie' key={starwarsResults.id}>
          <img src={`/images/starwars/${starwarsResults.Image}`}/>
          <p className='watch-movie-title'>{starwarsResults.Title}</p>
        </li>
      }
    })
  })

  return (
    <div className='watchlist'>
      <h1>My Watch List</h1>
      <h2>Marvel Movies to Watch</h2>
      <ul>
        {listMarvel}
      </ul>
      <h2>Starwars Movies to Watch</h2>
      <ul>
        {listStarwars}
      </ul>
    </div>
  )
}
