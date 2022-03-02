import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

import { setOrder } from '../actions'

function StarWarsList () {
  const dispatch = useDispatch()
  const list = useSelector(state => state.starwars)

  const order = useSelector(state => state.order)

  const sortedList = list.sort((a, b) => new Date(a[order]) - new Date(b[order]))

  return (

    <div className='starwars-container'>
      <img src='/images/starwars/starwars.svg' alt='starwars-logo' className='list-logo'/>
      <h1>Star Wars Cinematic Universe</h1>
      <div className='order-buttons'>
        <button onClick={() => { dispatch(setOrder('ChronoDate')) }} className={`${order === 'ChronoDate' ? 'disabled' : ''} chrono-button`}>Sort by Chronological Order</button>
        <button onClick={() => { dispatch(setOrder('Released')) }} className={`${order === 'Released' ? 'disabled' : ''}`}>Sort by Release Date</button>
      </div>
      { order === 'ChronoDate' &&
    <div className='chrono-info' data-testid='starwarsDate'>
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
                <p>{String(new Date(movie[order]).getFullYear())}</p>
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
