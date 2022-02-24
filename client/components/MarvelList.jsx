import React from 'react'
import { useSelector } from 'react-redux'

function MarvelList () {
  const list = useSelector(state => state.marvel)

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
