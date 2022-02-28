import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import { getWatchlist } from '../apis/watchlist'

export default function WatchList (props) {
  const list = useSelector(state => state.list)
  const dispatch = useDispatch()
  const [newlist, setnewlist] = useState(list)
  useEffect(() => {
    setnewlist(list)
  },
  [list])

  return (
    <div>
      <h1>Watch List</h1>
      <ul>
        {/* {list.map(watchlist => (
          <li key={watchlist}>{watchlist}</li>
        ))} */}
      </ul>
    </div>
  )
}
