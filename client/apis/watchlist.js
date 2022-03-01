import request from 'superagent'

const watchlistUrl = '/api/v1/watchlist'

export function getWatchlist () {
  return request.get(`${watchlistUrl}`)
    .then(res => {
      return res.body
    })
}

export function addToWatchlistMarvel (marvelId) {
  return request.post(`${watchlistUrl}/marvel`)
    .send({ marvelId })
    .then(res => {
      return res.body
    })
}

export function addToWatchlistStarwars (starwarsId) {
  return request.post(`${watchlistUrl}/starwars`)
    .send({ starwarsId })
    .then(res => {
      return res.body
    })
}
