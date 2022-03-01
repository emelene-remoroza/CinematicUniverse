import request from 'superagent'

const watchlistUrl = '/api/v1/watchlist'

export function getWatchlist (token) {
  return request.get(`${watchlistUrl}`)
    .set('authorization', `Bearer ${token}`)
    .then(res => {
      return res.body
    })
}

export function addToWatchlistMarvel (marvelId, token) {
  return request.post(`${watchlistUrl}/marvel`)
    .set('authorization', `Bearer ${token}`)
    .send({ marvelId })
    .then(res => {
      return res.body
    })
}

export function addToWatchlistStarwars (starwarsId, token) {
  return request.post(`${watchlistUrl}/starwars`)
    .set('authorization', `Bearer ${token}`)
    .send({ starwarsId })
    .then(res => {
      return res.body
    })
}

export function removeMarvelWatchList (marvelId, token) {
  return request.delete(`${watchlistUrl}/marvel`)
    .set('authorization', `Bearer ${token}`)
    .send({ marvelId })
    .then(res => {
      return res.body
    })
}

export function removeStarwarsWatchList (starwarsId, token) {
  return request.del(`${watchlistUrl}/starwars`)
    .set('authorization', `Bearer ${token}`)
    .send({ starwarsId })
    .then(res => {
      return res.body
    })
}
