import request from 'superagent'

const rootUrl = '/api/v1'

export function getStarWars () {
  return request.get(rootUrl + '/starwars')
    .then(res => {
      return res.body
    })
}
