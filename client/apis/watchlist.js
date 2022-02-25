import request from 'superagent'

const watchlistUrl = 'api/v1/watchlist'

export function getWatchlist (id) {
  return request.get(`${watchlistUrl}/${id}`)
    .then(res => {
      return res.body
    })
}
