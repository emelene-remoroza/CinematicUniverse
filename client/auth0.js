import { setUser } from './actions/userauth'
import store from './store'

export async function cacheUser (useAuth0, state) {
  const { isAuthenticated, getAccessTokenSilently, user } = useAuth0()

  if (isAuthenticated && !state?.token) {
    try {
      const token = await getAccessTokenSilently()
      const userToSave = {
        auth0Id: user.sub,
        email: user.email,
        token: token
      }
      store.dispatch(setUser(userToSave))
    } catch (err) {
      console.error(err)
    }
  }
}

// ..............................................
// const usersApiUrl = '/api/v1/users'

// export function verifyUser (user) {
//   if (!user.token) return ({ statusType: 4, statusCode: 401, statusMessage: 'No token provided' })
//   const { name, githubUsername, email, picture } = user
//   return request
//     .post(`${usersApiUrl}/verify`)
//     .set('Authorization', `Bearer ${user.token}`)
//     .send({ name, githubUsername, email, picture })
//     .then(({ statusType, statusText, statusCode }) => {
//       return { statusType, statusText, statusCode }
//     })
// }
