import { combineReducers } from 'redux'

import marvel from './marvel'
import errorMessage from './errorMessage'

export default combineReducers({
  marvel,
  errorMessage
})
