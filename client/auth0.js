import { verifyUserHandler } from './actions/userauth'
import { useDispatch, useSelector } from 'react-redux'
// import { useAuth0 } from '@auth0/auth0-react'

export async function cacheUser (useAuth0) {
  const { isAuthenticated, getAccessTokenSilently, user } = useAuth0()
  const userState = useSelector(state => state.currentUser)
  const dispatch = useDispatch()

  if (isAuthenticated && !userState?.token) {
    try {
      const userToSave = {
        name: user.name,
        picture: user.picture,
        email: user.email,
        githubUsername: user.nickname,
        token: await getAccessTokenSilently()
      }
      dispatch(verifyUserHandler(userToSave))
    } catch (err) {
      console.error(err)
    }
  }
}
