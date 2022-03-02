import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import { fetchMovie } from '../apis/movie'
import { addToWatchlistM, addToWatchlistS } from '../actions/index'

export default function Movie (props) {
  const dispatch = useDispatch()
  const id = Number(useParams().id)
  const movieArr = useSelector(state => state[props.category])
  const sortedList = movieArr.sort((a, b) => new Date(a[order]) - new Date(b[order]))
  const movieIndex = sortedList.findIndex(movie => movie.id === id)
  const movie = sortedList[movieIndex]
  const order = useSelector(state => state.order)
  const [movieDetail, setMovieDetail] = useState({ Ratings: [] })
  const [addToWatch, setAddToWatch] = useState(false)

  const title = movie?.Title
  const releaseDate = new Date(movie?.Released)
  const year = releaseDate.getFullYear()

  const nextMovieId = sortedList[movieIndex + 1]?.id
  const prevMovieId = sortedList[movieIndex - 1]?.id

  function onClickHandler () {
    movie.Period
      ? dispatch(addToWatchlistS(id))
      : dispatch(addToWatchlistM(id))
    setAddToWatch(true)
  }

  useEffect(() => {
    fetchMovie(title, year)
      .then(res => {
        res.Ratings && setMovieDetail(res)
        setAddToWatch(false)
        return null
      })
      .catch((err) => {
        console.error(err.message)
      })
  }, [title, year])

  const ratings = movieDetail?.Ratings.map(rating => {
    return <p key={rating.Source}><strong>{rating.Source}</strong> {rating.Value}</p>
  })

  return (
    <div className={`${props.category}-movie`}>
      <div className='movie-view'>

        <div className='emd-vid'>
          <iframe
            className='responsive-iframe'
            src={movie?.Trailer}
            title="YouTube video player"
            frameBorder="0"
            allowFullScreen>
          </iframe>
        </div>

        <img src={`/images/${props.category}/${movie?.Image}`}/>
        <div className='movie-details'>
          {movie && <h2>{title}</h2>}
          <h3>{movieDetail?.Year}</h3>
          <h4>{movieDetail?.Rated}</h4>
          <p><strong>Plot:</strong> {movieDetail?.Plot}</p>
          <p>{movieDetail?.Runtime}</p>

          <button className='watch-list-button' onClick={ onClickHandler }>{addToWatch ? 'Added' : 'Add to WatchList'}</button>

          <div>{ratings}</div>
        </div>
        <div className='arrow-buttons'>
          {(prevMovieId) && <Link to={`/${props.category}/${prevMovieId}`}><button className='previous'>&#8249;</button></Link>}
          {(nextMovieId) && <Link to={`/${props.category}/${nextMovieId}`}><button className='next'>&#8250;</button></Link>}
        </div>
      </div>
    </div>
  )
}
