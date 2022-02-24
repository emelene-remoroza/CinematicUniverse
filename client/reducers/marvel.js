import { SET_MARVEL } from '../actions'

const initialState = []

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MARVEL:
      return action.marvel
    default:
      return state
  }
}

export default reducer
