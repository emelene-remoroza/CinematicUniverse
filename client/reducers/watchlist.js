import { SET_WATCHLIST } from '../actions/watchlist'

const initialState = []

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_WATCHLIST:
      return action.watchlist
    default:
      return state
  }
}

export default reducer
