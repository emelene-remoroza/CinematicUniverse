import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeWatchListM, removeWatchListS } from '../actions'

export default function WatchList (props) {
  const list = useSelector(state => state.watchlist)
  const marvel = useSelector(state => state.marvel)
  const starwars = useSelector(state => state.starwars)
  const dispatch = useDispatch()

  function handleUnwatchClicked (e, universe, id) {
    e.preventDefault()
    switch (universe) {
      case 'starwars':
        dispatch(removeWatchListS(id))
        return

      case 'marvel':
        dispatch(removeWatchListM(id))
        return

      default:
        console.error('')
    }
  }

  const listMarvel = list.map((results) => {
    return marvel.map((marvelResults) => {
      if (marvelResults.id === results.marvel_id) {
        return <li className='watch-movie-wrapper' key={marvelResults.id} aria-label={marvelResults.Title}>
          <div className='watch-movie'>
            <img src={`/images/marvel/${marvelResults.Image}`}/>
            <p className='watch-movie-title'>{marvelResults.Title}</p>
          </div>
          <button className='watched-button' onClick={(e) => handleUnwatchClicked(e, 'marvel', marvelResults.id)}>Watched</button>
        </li>
      }
    })
  })
  const listStarwars = list.map((results) => {
    return starwars.map((starwarsResults) => {
      if (starwarsResults.id === results.starwars_id) {
        return <li className='watch-movie-wrapper' key={starwarsResults.id} aria-label={starwarsResults.Title}>
          <div className='watch-movie'>
            <img src={`/images/starwars/${starwarsResults.Image}`}/>
            <p className='watch-movie-title'>{starwarsResults.Title}</p>
          </div>
          <button className='watched-button' onClick={(e) => handleUnwatchClicked(e, 'starwars', starwarsResults.id)}>Watched</button>
        </li>
      }
    })
  })

  return (
    <div className='watchlist'>
      <h1>My Watch List</h1>
      <h2>Marvel Movies to Watch</h2>
      <ul>
        {listMarvel}
      </ul>
      <h2>Starwars Movies to Watch</h2>
      <ul>
        {listStarwars}
      </ul>
    </div>
  )
}
