import { addToWatchlistMarvel, addToWatchlistStarwars, getWatchlist, removeMarvelWatchList, removeStarwarsWatchList } from '../apis/watchlist'

export const SET_WATCHLIST = 'SET_WATCHLIST'
export const ADD_WATCHLIST = 'ADD_WATCHLIST'
export const UPDATE_WATCHLIST = 'UPDATE_WATCHLIST'
export const REMOVE_WATCHLIST = 'REMOVE_WATCHLIST'

export function setWatchlist (watchlist) {
  return {
    type: SET_WATCHLIST,
    watchlist
  }
}

export function addToWatchlistM (id) {
  return (dispatch, getState) => {
    const token = getState().user.token
    return addToWatchlistMarvel(id, token)
      .then((watchlist) => {
        dispatch(setWatchlist(watchlist))
        return null
      })
  }
}

export function addToWatchlistS (id) {
  return (dispatch, getState) => {
    const token = getState().user.token
    return addToWatchlistStarwars(id, token)
      .then((watchlist) => {
        dispatch(setWatchlist(watchlist))
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
  return (dispatch, getState) => {
    const { user } = getState()
    const token = user?.token
    return getWatchlist(token)
      .then((watchlist) => {
        dispatch(setWatchlist(watchlist))
        return null
      })
  }
}

export function removeWatchListM (id) {
  return (dispatch, getState) => {
    const token = getState().user.token
    return removeMarvelWatchList(id, token)
      .then((watchlist) => {
        dispatch(setWatchlist(watchlist))
        return null
      })
  }
}

export function removeWatchListS (id) {
  return (dispatch, getState) => {
    const token = getState().user.token
    return removeStarwarsWatchList(id, token)
      .then((watchlist) => {
        dispatch(setWatchlist(watchlist))
        return null
      })
  }
}
