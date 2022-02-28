// import { getWatchlist } from '../apis/watchlist'

export const SET_WATCHLIST = 'SET_WATCHLIST'
export const ADD_WATCHLIST = 'ADD_WATCHLIST'
export const UPDATE_WATCHLIST = 'UPDATE_WATCHLIST'

export function setWatchlist (watchlist) {
  return {
    type: SET_WATCHLIST,
    watchlist
  }
}

export function addToWatchlist (watchlist) {
  return {
    type: ADD_WATCHLIST,
    watchlist
  }
}
export function updateWatchlist (watchlist) {
  return {
    type: UPDATE_WATCHLIST,
    watchlist
  }
}
