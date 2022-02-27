import React from 'react'
import { Link } from 'react-router-dom'

export default function Home () {
  return (
    <div className='home-container'>
      <p>
        Welcome to Watch-Verse - your Cinematic Universe Viewing Guide. Select a universe below for viewing lists.
      </p>

      <Link to={'/marvel'} aria-label='Marvel'>
        <img src='/images/marvel/marvel.svg' alt='marvel-logo' />
      </Link>

    </div>
  )
}
