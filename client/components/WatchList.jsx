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
        return <li key={marvelResults.id}>{marvelResults.Title}</li>
      }
    })
  })
  const listStarwars = newlist.map((results) => {
    return starwars.map((starwarsResults) => {
      if (starwarsResults.id === results.starwars_id) {
        return <li key={starwarsResults.id}>{starwarsResults.Title}</li>
      }
    })
  })

  return (
    <div>
      <h1>Watch List</h1>
      <ul>
        Marvel List{listMarvel}
      </ul><br/>
      <ul>
        Starwars List{listStarwars}
      </ul>
    </div>
  )
}
