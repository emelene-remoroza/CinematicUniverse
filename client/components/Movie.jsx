import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import { fetchMovie } from '../apis/movie'

export default function Movie (props) {
  const id = Number(useParams().id)
  const movieArr = useSelector(state => state[props.category])
  const movie = useSelector(state => state[props.category].find(movie => movie.id === id))
  const [movieDetail, setMovieDetail] = useState({ Ratings: [] })
  console.log(movieDetail)

  const title = movie?.Title
  const releaseDate = new Date(movie?.Released)
  const year = releaseDate.getFullYear()

  useEffect(() => {
    fetchMovie(title, year)
      .then(res => {
        res.Ratings && setMovieDetail(res)
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

        <img src={`/images/marvel/${movie?.Image}`}/>
        <div className='movie-details'>
          {movie && <h2>{title}</h2>}
          <h3>{movieDetail?.Year}</h3>
          <h4>{movieDetail?.Rated}</h4>
          <p><strong>Plot:</strong> {movieDetail?.Plot}</p>
          <p>{movieDetail?.Runtime}</p>

          {/* Watchlist button added but still needs click handler */}
          <button className='watch-list-button'>Add to WatchList</button>

          <div>{ratings}</div>
        </div>
        <div className='arrow-buttons'>
          {(id > 1) && <Link to={`/${props.category}/${id - 1}`}><button className='previous'>&#8249;</button></Link>}
          {(id < movieArr.length) && <Link to={`/${props.category}/${id + 1}`}><button className='next'>&#8250;</button></Link>}
        </div>
      </div>
    </div>
  )
}
