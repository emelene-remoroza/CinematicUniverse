import { SET_ORDER } from '../actions/order'

const initialState = 'ChronoDate'

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ORDER:
      return action.order
    default:
      return state
  }
}

export default reducer
