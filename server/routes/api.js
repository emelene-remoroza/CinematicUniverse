require('dotenv').config()
const request = require('superagent')
const managementUrl = process.env.MANAGEMENT_URL
const clientId = process.env.CLIENT_ID
const clientSecret = process.env.CLIENT_SECRET
const apiManagementUrl = process.env.API_MANAGEMENT_URL

function getManagementApiAccessToken () {
  return request
    .post(`${managementUrl}/oauth/token`)
    .set('content-type', 'application/json')
    .send({
      client_id: clientId,
      client_secret: clientSecret,
      audience: apiManagementUrl,
      grant_type: 'client_credentials'
    })
    .then(res => res.body.access_token)
}

function getGithubApiAccessToken (githubId, token) {
  return request
    .get(`${managementUrl}/api/v2/users/${githubId}`)
    .set('Authorization', `Bearer ${token}`)
    .then(userData => userData.body.identities[0].access_token)
}

function isInFoundationsOrg (ghToken) {
  return request
    .get('https://api.github.com/user/orgs?per_page=100')
    .set('Authorization', `token ${ghToken}`)
    .set('Accept', 'application/vnd.github.v3+json')
    .set('User-Agent', 'canihazjob-agent') // can be changed to anything
    .then(({ body: orgs }) => {
      return orgs.some(org => (
        org.login === 'dev-academy-foundations'
      ))
    })
    .catch(err => console.log(err))
}

module.exports = {
  getManagementApiAccessToken,
  getGithubApiAccessToken,
  isInFoundationsOrg
}
