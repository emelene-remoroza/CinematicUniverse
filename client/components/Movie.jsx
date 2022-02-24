import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { fetchMovie } from '../actions/movie'

export default function Movie (props) {
  const dispatch = useDispatch()
  const { id } = useParams()
  const movie = useSelector(state => state[props.category].find(movie => movie.id === Number(id)))
  const movieApi = useSelector(state => state.movie)
  console.log(movieApi)
  const title = movie?.Title

  const releaseDate = new Date(movie?.Released)
  const year = releaseDate.getFullYear()
  console.log(title, year)

  useEffect(() => {
    dispatch(fetchMovie(title, year))
  }, [])

  return (
    <>
      <div>{JSON.stringify(movie)}</div>
      {movie && <img height={500} src={`/images/marvel/${movie?.Image}`}/>}
      {movie && <p>{title}</p>}
    </>)
}

// {
// 	"Title": "Captain America: The First Avenger",
// 	"Year": "2011",
// 	"Rated": "PG-13",
// 	"Released": "22 Jul 2011",
// 	"Runtime": "124 min",
// 	"Genre": "Action, Adventure, Sci-Fi",
// 	"Director": "Joe Johnston",
// 	"Writer": "Christopher Markus, Stephen McFeely, Joe Simon",
// 	"Actors": "Chris Evans, Hugo Weaving, Samuel L. Jackson",
// 	"Plot": "It is 1942, America has entered World War II, and sickly but determined Steve Rogers is frustrated at being rejected yet again for military service. Everything changes when Dr. Erskine recruits him for the secret Project Rebirth. Proving his extraordinary courage, wits and conscience, Rogers undergoes the experiment and his weak body is suddenly enhanced into the maximum human potential. When Dr. Erskine is then immediately assassinated by an agent of Nazi Germany's secret HYDRA research department (headed by Johann Schmidt, a.k.a. the Red Skull), Rogers is left as a unique man who is initially misused as a propaganda mascot; however, when his comrades need him, Rogers goes on a successful adventure that truly makes him Captain America, and his war against Schmidt begins.",
// 	"Language": "English, Norwegian, French",
// 	"Country": "United States",
// 	"Awards": "4 wins & 46 nominations",
// 	"Poster": "https://m.media-amazon.com/images/M/MV5BMTYzOTc2NzU3N15BMl5BanBnXkFtZTcwNjY3MDE3NQ@@._V1_SX300.jpg",
// 	"Ratings": [
// 		{
// 			"Source": "Internet Movie Database",
// 			"Value": "6.9/10"
// 		},
// 		{
// 			"Source": "Rotten Tomatoes",
// 			"Value": "79%"
// 		},
// 		{
// 			"Source": "Metacritic",
// 			"Value": "66/100"
// 		}
// 	],
// 	"Metascore": "66",
// 	"imdbRating": "6.9",
// 	"imdbVotes": "808,312",
// 	"imdbID": "tt0458339",
// 	"Type": "movie",
// 	"DVD": "25 Oct 2011",
// 	"BoxOffice": "$176,654,505",
// 	"Production": "N/A",
// 	"Website": "N/A",
// 	"Response": "True"
// }
