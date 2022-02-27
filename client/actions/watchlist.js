// import { getWatchlist } from '../apis/watchlist'

export const SET_WATCHLIST = 'SET_WATCHLIST'

export function setWatchlist (watchlist) {
  return {
    type: SET_WATCHLIST,
    watchlist
  }
}
