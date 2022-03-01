import starwars from '../starwars'

import { setStarWars } from '../../actions/starwars'

describe('checks the reducer', () => {
  it('sets an array with an empty object as initial state', () => {
    const state = starwars(undefined, { type: 'INIT' })
    expect(state).toEqual([])
  })

  it('replaces state with SET_STARWARS', () => {
    const state = starwars([], setStarWars([{
      id: 1,
      Title: 'Star Wars: Episode I - The Phantom Menace',
      Released: '1999-05-19',
      ChronoDate: '3001-01-01',
      Period: '32 BBY',
      Image: 'starwars-ep1.jpg',
      Trailer: 'https://www.youtube-nocookie.com/embed/bD7bpG-zDJQ'
    }]))
    expect(state).toEqual([{
      id: 1,
      Title: 'Star Wars: Episode I - The Phantom Menace',
      Released: '1999-05-19',
      ChronoDate: '3001-01-01',
      Period: '32 BBY',
      Image: 'starwars-ep1.jpg',
      Trailer: 'https://www.youtube-nocookie.com/embed/bD7bpG-zDJQ'
    }])
  })
})
