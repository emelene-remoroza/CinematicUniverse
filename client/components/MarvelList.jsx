import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

import { setOrder } from '../actions'

function MarvelList () {
  const dispatch = useDispatch()
  const list = useSelector(state => state.marvel)

  const order = useSelector(state => state.order)

  const sortedList = list.sort((a, b) => new Date(a[order]) - new Date(b[order]))

  return (

    <div className='marvel-container'>
      <img src='/images/marvel/marvel.svg' alt='marvel-logo' className='list-logo'/>
      <h1>Marvel Cinematic Universe</h1>
      <div className='order-buttons'>
        <button onClick={() => { dispatch(setOrder('ChronoDate')) }} className={`${order === 'ChronoDate' ? 'disabled' : ''} chrono-button`}>Sort by Chronological Order</button>
        <button onClick={() => { dispatch(setOrder('Released')) }} className={`${order === 'Released' ? 'disabled' : ''}`}>Sort by Release Date</button>
      </div>
      <ul>
        {sortedList.map(movie => (
          <Link to={`${movie.id}`} key={movie.id} aria-label={movie.Title}>
            <li className='poster'>
              <img src={`/images/marvel/${movie.Image}`} alt={`Image of ${movie.Title}`} /><br/>
              <h3 className='poster-title'>{movie.Title}</h3>
              <p data-testid='yeartest'>{String(new Date(movie[order]).getFullYear())}</p>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  )
}

export default MarvelList
