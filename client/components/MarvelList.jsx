import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function MarvelList () {
  const list = useSelector(state => state.marvel)

  const [order, setOrder] = useState('ChronoDate')

  const sortedList = list.sort((a, b) => new Date(a[order]) - new Date(b[order]))

  return (

    <div>
      <h1>Marvel Movie List </h1>
      <button onClick={() => { setOrder('ChronoDate') }}>Sort by Chronological Order</button>
      <button onClick={() => { setOrder('Released') }}>Sort by Release Date</button>
      <ul>
        {sortedList.map(movie => (
          <Link to={`${movie.id}`} key={movie.id}>
            <li>
              <h3>{movie.Title}</h3>
              <p>{new Date(movie[order]).getFullYear()}</p>
              <img height={250} src={`/images/marvel/${movie.Image}`} alt={`Image of ${movie.Title}`} /><br/>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  )
}

export default MarvelList
