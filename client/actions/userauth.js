export const SET_USER = 'SET_USER'
export const CLEAR_USER = 'CLEAR_USER'

export function setUser (user) {
  return {
    type: SET_USER,
    user
  }
}

export function clearUser () {
  return {
    type: CLEAR_USER
  }
}

// ..........................................................
// import { verifyUser } from '../apis/userauth'
// import { setError } from './errMessage'

// export function verifyUserHandler (user) {
//   return async (dispatch) => {
//     try {
//       const status = await verifyUser(user)
//       if (status.statusType === 2) {
//         dispatch(setUser(user))
//       }
//     } catch (err) {
//       dispatch(setError(err))
//       dispatch(clearUser())
//     }
//   }
// }
