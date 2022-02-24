import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { fetchMovie } from '../apis/movie'

export default function Movie (props) {
  const { id } = useParams()
  const movie = useSelector(state => state[props.category].find(movie => movie.id === Number(id)))
  const [movieDetail, setMovieDetail] = useState('')

  const title = movie?.Title

  const releaseDate = new Date(movie?.Released)
  const year = releaseDate.getFullYear()

  useEffect(() => {
    fetchMovie(title, year)
      .then(res => {
        setMovieDetail(res)
        return null
      })
      .catch((err) => {
        console.error(err.message)
      })
  }, [title, year])

  console.log(movieDetail)
  return (
    <div className='movie-page'>

      {movie && <img height={500} src={`/images/marvel/${movie?.Image}`}/>}
      {movie && <h2>{title}</h2>}
      <h3>{movieDetail?.Year}</h3>
      <p>{movieDetail?.Plot}</p>
    </div>)
}
