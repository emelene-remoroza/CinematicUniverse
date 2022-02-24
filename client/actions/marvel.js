import { getMarvel } from '../apis/marvel'

export const SET_MARVEL = 'SET_MARVEL'

export function setMarvel (marvel) {
  return {
    type: SET_MARVEL,
    marvel
  }
}

export function fetchMarvel () {
  return dispatch => {
    return getMarvel()
      .then(res => {
        dispatch(setMarvel(res.marvel))
        return null
      })
  }
}
