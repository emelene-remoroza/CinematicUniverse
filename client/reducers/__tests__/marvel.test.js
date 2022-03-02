import marvel from '../marvel'

import { setMarvel } from '../../actions/marvel'

describe('checks the reducer', () => {
  it('sets an array with an empty object as initial state', () => {
    const state = marvel(undefined, { type: 'INIT' })
    expect(state).toEqual([])
  })

  it('replaces state with SET_MARVEL', () => {
    const state = marvel([], setMarvel([{
      id: 1,
      Title: 'Captain America: The First Avenger',
      Released: '2011-07-22',
      ChronoDate: '1942-01-01',
      Image: 'captain-america-the-first-avenger.jpg',
      Trailer: 'https://www.youtube-nocookie.com/embed/W4DlMggBPvc'
    }]))
    expect(state).toEqual([{
      id: 1,
      Title: 'Captain America: The First Avenger',
      Released: '2011-07-22',
      ChronoDate: '1942-01-01',
      Image: 'captain-america-the-first-avenger.jpg',
      Trailer: 'https://www.youtube-nocookie.com/embed/W4DlMggBPvc'
    }])
  })
})
