import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import { fetchMovie } from '../apis/movie'

export default function Movie (props) {
  const id = Number(useParams().id)
  const movieArr = useSelector(state => state[props.category])
  /* TODO: find may return null, are we ready for that? is there a way to represent the state
   * such that this cannot happen? */
  /* TODO: you have movieArr from useSelector, can you derive movie from that instead? */
  const movie = useSelector(state => state[props.category].find(movie => movie.id === id))
  /* TODO: The component will initally render an empty div as the ratings view,
   * but "we have no ratings" and "waiting for ratings to load" are different states,
   * we should represent them differently so we can show them as different to the user
   */
  const [movieDetail, setMovieDetail] = useState({ Ratings: [] })

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
          <h3>{movieDetail?.Year}</h3> { /* TODO: do we want to render an empty heading when this is null? */}
          <h4>{movieDetail?.Rated}</h4>
          <p><strong>Plot:</strong> {movieDetail?.Plot}</p>
          <p>{movieDetail?.Runtime}</p>

          {/* Watchlist button added but still needs click handler */}
          <button className='watch-list-button'>Add to WatchList</button>

          <div>{ratings}</div>
        </div>
        <div className='arrow-buttons'>
          {/* TODO: this bakes in the assumption that the ids are a meaninful order and that they start at 1
            * properties like that shouldn't reach the frontend. Instead the backend should expose information about
            * what the previous/next item in a sequence is, one way of doing that is with relations as in JSON API
            *
            * https://jsonapi.org/format/#document-resource-object-related-resource-links
            * */}
          {(id > 1) && <Link to={`/${props.category}/${id - 1}`}><button className='previous'>&#8249;</button></Link>}
          {(id < movieArr.length) && <Link to={`/${props.category}/${id + 1}`}><button className='next'>&#8250;</button></Link>}
        </div>
      </div>
    </div>
  )
}
