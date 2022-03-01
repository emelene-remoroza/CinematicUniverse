import { fetchMarvel } from '../marvel'

import { getMarvel } from '../../apis/marvel'

jest.mock('../../apis/marvel')
const fakeMarvel = [
  {
    id: '1',
    Title: 'Fake Title1',
    Released: 'Fake Released1',
    ChronoDate: 'Fake ChronoDate1',
    Image: 'Fake Image1',
    Trailer: 'https://fake.link.1'
  },
  {
    id: '2',
    Title: 'Fake Title2',
    Released: 'Fake Released2',
    ChronoDate: 'Fake ChronoDate2',
    Image: 'Fake Image2',
    Trailer: 'https://fake.link.2'
  }
]

getMarvel.mockReturnValue(Promise.resolve(fakeMarvel))

describe('fetchStarWars', () => {
  it('gets list of starwars movies and tv shows by chronological and released dates', () => {
    const dispatch = jest.fn()
    return fetchMarvel()(dispatch)
      .then(() => {
        expect(dispatch).toHaveBeenCalled()
        expect(dispatch.mock.calls[0][0].type).toEqual('SET_MARVEL')
        return null
      })
  })
})
