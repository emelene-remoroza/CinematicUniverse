import { combineReducers } from 'redux'

import fruits from './fruits'
import errorMessage from '../reducers/errorMessage'

export default combineReducers({
  fruits,
  errorMessage
})
