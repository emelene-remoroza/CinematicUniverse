import { SET_WATCHLIST, ADD_WATCHLIST, UPDATE_WATCHLIST, REMOVE_WATCHLIST } from '../actions/watchlist'

const initialState = []

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_WATCHLIST:
      return action.watchlist

    case ADD_WATCHLIST:
      return state.some(list => list.id === action.id)

    case UPDATE_WATCHLIST:
      return action.watchlist

    case REMOVE_WATCHLIST:
      return action.watchlist

    default:
      return state
  }
}

export default reducer
