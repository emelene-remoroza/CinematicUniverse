import { addToWatchlistApi, getWatchlist } from '../apis/watchlist'

export const SET_WATCHLIST = 'SET_WATCHLIST'
export const ADD_WATCHLIST = 'ADD_WATCHLIST'
export const UPDATE_WATCHLIST = 'UPDATE_WATCHLIST'

export function setWatchlist (watchlist) {
  return {
    type: SET_WATCHLIST,
    watchlist
  }
}

export function addToWatchlist (id) {
  return (dispatch) => {
    return addToWatchlistApi(id)
      .then((watchlist) => {
        dispatch(setWatchlist(watchlist))
        console.log('watchlist', watchlist)
        return null
      })
  }
}
export function updateWatchlist (watchlist) {
  return {
    type: UPDATE_WATCHLIST,
    watchlist
  }
}

export function fetchWatchlist () {
  const id = 'auth0|567'
  return dispatch => {
    return getWatchlist(id)
      .then((watchlist) => {
        dispatch(setWatchlist(watchlist))
        return null
      })
  }
}
