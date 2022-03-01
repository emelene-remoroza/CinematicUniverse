import { getStarWars } from '../apis/starwars'

export const SET_STARWARS = 'SET_STARWARS'

export function setStarWars (starwars) {
  return {
    type: SET_STARWARS,
    starwars
  }
}

export function fetchStarWars () {
  return dispatch => {
    return getStarWars()
      .then(res => {
        dispatch(setStarWars(res.starwars))
        return null
      })
  }
}
