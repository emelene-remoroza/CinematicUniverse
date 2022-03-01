const request = require('supertest')
const server = require('../../server')

const { getMarvel } = require('../../db/marvel')
const db = require('../../db/marvel')

jest.mock('../../db/marvel')

describe('GET /api/v1/marvel', () => {
  it('respond with array of marvel movies and series', () => {
    db.getMarvel.mockImplementation(() => Promise.resolve([
      { id: 1, Title: 'Captain America: The First Avenger', Released: '2011-07-22', ChronoDate: '1942-01-01', Image: 'captain-america-the-first-avenger.jpg', Trailer: 'https://www.youtube-nocookie.com/embed/W4DlMggBPvc' },
      { id: 2, Title: 'Captain Marvel', Released: '2019-03-08', ChronoDate: '1995-01-01', Image: 'captain-marvel-1.jpg', Trailer: 'https://www.youtube-nocookie.com/embed/Z1BCujX3pw8' },
      { id: 3, Title: 'Iron Man', Released: '2008-05-02', ChronoDate: '2010-01-01', Image: 'iron-man-1.jpg', Trailer: 'https://www.youtube-nocookie.com/embed/byQpcN78UjQ' }
    ]))
    return request(server)
      .get('/api/v1/marvel')
      .expect(200)
      .then((res) => {
        expect(res.body.marvel).toHaveLength(3)
        expect(res.body.marvel[1].ChronoDate).toBe('1995-01-01')
        return null
      })
  })
  it('responds with 500 and error on rejection', () => {
    db.getMarvel.mockImplementation(() => Promise.reject(new Error('mock DB error')))
    return request(server)
      .get('/api/v1/marvel')
      .expect(500)
      .then((err) => {
        expect(err.text).toContain('Somthing went wrong')
        return null
      })
  })
})
it('responds with 500 if error', () => {
  db.getMarvel.mockImplementation(() => Promise.reject(new Error('mock DB error')))
  return request(server)
    .get('/api/v1/marvel')
    .then((res) => {
      expect(res.status).toEqual(500)
      // expect(res.text).toContain('Somthing went wrong')
      return null
    })
})
