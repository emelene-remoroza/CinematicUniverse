import request from 'superagent'

const usersApiUrl = '/api/v1/users'

export function verifyUser (user) {
  if (!user.token) return ({ statusType: 4, statusCode: 401, statusMessage: 'No token provided' })
  const { name, githubUsername, email, picture } = user
  return request
    .post(`${usersApiUrl}/verify`)
    .set('Authorization', `Bearer ${user.token}`)
    .send({ name, githubUsername, email, picture })
    .then(({ statusType, statusText, statusCode }) => {
      return { statusType, statusText, statusCode }
    })
}
