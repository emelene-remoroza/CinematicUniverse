import { SET_STARWARS } from '../actions/starwars'

const initialState = []

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_STARWARS:
      return action.starwars
    default:
      return state
  }
}

export default reducer
