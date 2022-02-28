import request from 'superagent'

const watchlistUrl = '/api/v1/watchlist'

export function getWatchlist () {
  return request.get(`${watchlistUrl}`)
    .then(res => {
      return res.body
    })
}

export function addToWatchlistApi (marvelId) {
  return request.post(`${watchlistUrl}`)
    .send({ marvelId })
    .then(res => {
      return res.body
    })
}
