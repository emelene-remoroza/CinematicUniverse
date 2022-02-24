import { combineReducers } from 'redux'

import marvel from './marvel'
import movie from './movie'
import errorMessage from './errorMessage'

export default combineReducers({
  marvel,
  movie,
  errorMessage
})
