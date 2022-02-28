import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function StarWarsList () {
  const list = useSelector(state => state.starwars)

  const [order, setOrder] = useState('ChronoDate')

  const sortedList = list.sort((a, b) => new Date(a[order]) - new Date(b[order]))

  return (

    <div className='starwars-container'>
      <img src='/images/starwars/starwars.svg' alt='starwars-logo' className='list-logo'/>
      <h1>Star Wars Cinematic Universe</h1>
      <div className='order-buttons'>
        <button onClick={() => { setOrder('ChronoDate') }} className={`${order === 'ChronoDate' ? 'disabled' : ''} chrono-button`}>Sort by Chronological Order</button>
        <button onClick={() => { setOrder('Released') }} className={`${order === 'Released' ? 'disabled' : ''}`}>Sort by Release Date</button>
      </div>
      { order === 'ChronoDate' &&
    <div className='chrono-info'>
      <p>*BBY: Before Battle of Yavin</p>
      <p>*ABY: After Battle of Yavin</p>
    </div> }

      <ul>
        {sortedList.map(movie => (
          <Link to={`${movie.id}`} key={movie.id} aria-label={movie.Title}>
            <li className='poster'>
              <img src={`/images/starwars/${movie.Image}`} alt={`Image of ${movie.Title}`} /><br/>
              <h3 className='poster-title'>{movie.Title}</h3>
              { order === 'ChronoDate' ? (
                <p>{movie.Period}</p>
              ) : (
                <p>{new Date(movie[order]).getFullYear()}</p>
              )
              }
            </li>
          </Link>
        ))}
      </ul>
    </div>
  )
}

export default StarWarsList
