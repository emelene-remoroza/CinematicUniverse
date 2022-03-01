import nock from 'nock'

import { getMarvel } from '../marvel'

const fakeMarvel = [
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

describe('getMarvels', () => {
  it('returns Marvel from api call', () => {
    nock('http://localhost')
      .get('/api/v1/marvel')
      .reply(200, fakeMarvel)

    expect.assertions(2)
    return getMarvel()
      .then((marvel) => {
        expect(marvel).toEqual(fakeMarvel)
        expect(nock.isDone()).toEqual(true)
        return null
      })
  })
})
