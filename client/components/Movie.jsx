import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { fetchMovie } from '../actions/movie'

export default function Movie (props) {
  const dispatch = useDispatch()
  const { id } = useParams()
  const movie = useSelector(state => state[props.category].find(movie => movie.id === Number(id)))

  const title = movie?.Title

  const releaseDate = new Date(movie?.Released)
  const year = releaseDate.getFullYear()
  console.log(title, year)

  useEffect(() => {
    // fetchMovie(title, year)
    //   .then
  }, [])

  return (
    <>
      <div>{JSON.stringify(movie)}</div>
      {movie && <img height={500} src={`/images/marvel/${movie?.Image}`}/>}
      {movie && <p>{title}</p>}
    </>)
}
