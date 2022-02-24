import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router'

export default function Movie (props) {
  const { id } = useParams()
  const movie = useSelector(state => state[props.category].find(movie => movie.id === Number(id)))

  return (
    <div>{JSON.stringify(movie)}</div>
  )
}
