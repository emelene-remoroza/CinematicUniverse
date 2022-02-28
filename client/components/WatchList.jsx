import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
// import { getWatchlist } from '../apis/watchlist'

export default function WatchList (props) {
  const list = useSelector(state => state.watchlist)
  const marvel = useSelector(state => state.marvel)
  const [newlist, setnewlist] = useState(list)
  useEffect(() => {
    setnewlist(list)
  },
  [list])
  const listResults = newlist.map((results) => {
    return marvel.map((marvelResults) => {
      if (marvelResults.id === results.marvel_id) {
        return <li key={marvelResults.id}>{marvelResults.Title}</li>
      }
    })
  })

  return (
    <div>
      <h1>Watch List</h1>
      <ul>
        {listResults}
      </ul>
    </div>
  )
}
