import nock from 'nock'

import { getStarWars } from '../starwars'

const fakeStarWars = [
  {
    id: '1',
    Title: 'Fake Title1',
    Released: 'Fake Released1',
    ChronoDate: 'Fake ChronoDate1',
    Period: 'Fake Period1',
    Image: 'Fake Image1',
    Trailer: 'https://fake.link.1'
  },
  {
    id: '2',
    Title: 'Fake Title2',
    Released: 'Fake Released2',
    ChronoDate: 'Fake ChronoDate2',
    Period: 'Fake Period2',
    Image: 'Fake Image2',
    Trailer: 'https://fake.link.2'
  }
]

describe('getStarWars', () => {
  it('returns StarWarsfrom api call', () => {
    nock('http://localhost')
      .get('/api/v1/starwars')
      .reply(200, fakeStarWars)

    expect.assertions(2)
    return getStarWars()
      .then((starwars) => {
        expect(starwars).toEqual(fakeStarWars)
        expect(nock.isDone()).toEqual(true)
        return null
      })
  })
})
