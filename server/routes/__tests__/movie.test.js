const request = require('supertest')
const server = require('../../server')
const nock = require('nock')

describe('GET/api/v1/movie/:title/:year', () => {
  it('returns movie details from external api', () => {
    const apiResponse = { title: 'The trials and tribulations of testing' }
    const scope = nock('http://www.omdbapi.com')
      .get('/')
      .query(true)
      .reply(200, apiResponse)

    expect.assertions(1)
    return request(server)
      .get('/api/v1/movie/spooderman/2001')
      .then((response) => {
        expect(response.body.title).toContain('trials and tribulations')
        scope.done()
        return null
      })
  })
  it('returns 500 if error', () => {
    const scope = nock('http://www.omdbapi.com')
      .get('/')
      .query(true)
      .reply(500)
    jest.spyOn(console, 'log')
    console.log.mockImplementation(() => {})
    expect.assertions(3)
    return request(server)
      .get('/api/v1/movie/spooderman/2001')
      .then((response) => {
        expect(response.status).toEqual(500)
        expect(response.text).toContain('Something went wrong')
        expect(console.log).toHaveBeenCalled()
        console.log.mockRestore()
        scope.done()
        return null
      })
  })
})
