import request from 'superagent'

const movieUrl = '/api/v1/movie'

export function fetchMovie (title, year) {
  return request.get(`${movieUrl}/${title}/${year}`)
    .then(res => {
      return res.body
    })
}
