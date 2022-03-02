import { combineReducers } from 'redux'

import marvel from './marvel'
import starwars from './starwars'
import watchlist from './watchlist'
import user from './userauth'
import order from './order'

export default combineReducers({
  marvel,
  starwars,
  watchlist,
  user,
  order
})
