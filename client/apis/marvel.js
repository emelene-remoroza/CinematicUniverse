import request from 'superagent'

const rootUrl = '/api/v1'

export function getMarvel () {
  return request.get(rootUrl + '/marvel')
    .then(res => {
      return res.body
    })
}
