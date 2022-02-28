import { combineReducers } from 'redux'

import marvel from './marvel'
import starwars from './starwars'
import watchlist from './watchlist'

export default combineReducers({
  marvel,
  starwars,
  watchlist
})
