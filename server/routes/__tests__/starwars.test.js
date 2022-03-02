const request = require('supertest')
const server = require('../../server')

const db = require('../../db/starwars')

jest.mock('../../db/starwars')

describe('GET /api/v1/starwars', () => {
  it('respond with array of starwars movies and series', () => {
    db.getStarWars.mockImplementation(() => Promise.resolve([
      { id: 1, Title: 'Star Wars: Episode I - The Phantom Menace', Released: '1999-05-19', ChronoDate: '3001-01-01', Period: '32 BBY', Image: 'starwars-ep1.jpg', Trailer: 'https://www.youtube-nocookie.com/embed/bD7bpG-zDJQ' },
      { id: 2, Title: 'Star Wars: Episode II - Attack of the Clones', Released: '2002-05-16', ChronoDate: '3002-01-01', Period: '22 BBY', Image: 'starwars-ep2.jpg', Trailer: 'https://www.youtube-nocookie.com/embed/gYbW1F_c9eM' },
      { id: 3, Title: 'Star Wars: Clone Wars', Released: '2003-11-07', ChronoDate: '3003-01-01', Period: '22-19 BBY', Image: 'starwars-the-clone-wars.jpg', Trailer: 'https://www.youtube-nocookie.com/embed/ZLW2jkd6E7g' }
    ]))
    return request(server)
      .get('/api/v1/starwars')
      .expect(200)
      .then((res) => {
        expect(res.body.starwars).toHaveLength(3)
        expect(res.body.starwars[1].Period).toBe('22 BBY')
        return null
      })
  })
  it('responds with 500 and error on rejection', () => {
    db.getStarWars.mockImplementation(() => Promise.reject(new Error('mock DB error')))
    jest.spyOn(console, 'log')
    console.log.mockImplementation(() => {})
    return request(server)
      .get('/api/v1/starwars')
      .expect(500)
      .then((err) => {
        expect(err.text).toContain('Somthing went wrong')
        return null
      })
  })
})
it('responds with 500 if error', () => {
  db.getStarWars.mockImplementation(() => Promise.reject(new Error('mock DB error')))
  jest.spyOn(console, 'log')
  console.log.mockImplementation(() => {})
  return request(server)
    .get('/api/v1/starwars')
    .then((res) => {
      expect(res.status).toEqual(500)
      return null
    })
})
