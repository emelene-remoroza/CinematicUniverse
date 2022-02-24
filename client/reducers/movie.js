import { SET_MOVIE } from '../actions/movie'

const initialState = { Title: '' }

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MOVIE:
      return action.movie
    default:
      return state
  }
}

export default reducer
