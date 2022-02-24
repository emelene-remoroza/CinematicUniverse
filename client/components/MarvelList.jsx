import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { fetchMarvel } from '../actions/marvel'

function MarvelList () {
  const list = useSelector(state => state.marvel)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchMarvel())
  }, [])

  return (

    <div>
      <h1>Marvel Movie List </h1>
      <ul>
        {list.map(movie => (
          <li key={movie.id}>{JSON.stringify(movie)}</li>
        ))}
      </ul>
    </div>
  )
}

export default MarvelList
