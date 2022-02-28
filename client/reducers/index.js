import { combineReducers } from 'redux'

import marvel from './marvel'
import watchlist from './watchlist'

export default combineReducers({
  marvel,
  watchlist
})
