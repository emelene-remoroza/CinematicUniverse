import { getMovie } from '../apis/movie'

export const SET_MOVIE = 'SET_MOVIE'

export function setMovie (movie) {
  return {
    type: SET_MOVIE,
    movie
  }
}

export function fetchMovie (title, year) {
  return dispatch => {
    return getMovie(title, year)
      .then(movie => {
        dispatch(setMovie(movie))
        return null
      })
  }
}
