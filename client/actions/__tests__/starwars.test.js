import { fetchStarWars } from '../starwars'

import { getStarWars } from '../../apis/starwars'

jest.mock('../../apis/starwars')
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

getStarWars.mockReturnValue(Promise.resolve(fakeStarWars))

describe('fetchStarWars', () => {
  it('gets list of starwars movies and tv shows by chronological and released dates', () => {
    const dispatch = jest.fn()
    return fetchStarWars()(dispatch)
      .then(() => {
        expect(dispatch).toHaveBeenCalled()
        expect(dispatch.mock.calls[0][0].type).toEqual('SET_STARWARS')
        return null
      })
  })
})
