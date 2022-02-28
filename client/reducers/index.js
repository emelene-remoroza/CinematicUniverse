import { combineReducers } from 'redux'

import marvel from './marvel'
import starwars from './starwars'

export default combineReducers({
  marvel,
  starwars
})
