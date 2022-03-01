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
        console.log(marvelResults)
        return <li key={marvelResults.id}>
          <img src={`/images/marvel/${marvelResults.Image}`}/>
          {marvelResults.Title}
        </li>
      }
    })
  })
  const listStarwars = newlist.map((results) => {
    return starwars.map((starwarsResults) => {
      if (starwarsResults.id === results.starwars_id) {
        return <li key={starwarsResults.id}>
          <img src={`/images/starwars/${starwarsResults.Image}`}/>
          {starwarsResults.Title}
        </li>
      }
    })
  })

  return (
    <div className='watchlist'>
      <h1>Watch List</h1>
      <h2>Marvel List</h2>
      <ul>
        {listMarvel}
      </ul>
      <h2>Starwars List</h2>
      <ul>
        {listStarwars}
      </ul>
    </div>
  )
}
