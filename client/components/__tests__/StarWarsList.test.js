import React from 'react'
import { Provider } from 'react-redux'
import { render, screen } from '@testing-library/react'
import { fetchStarWars } from '../../actions/starwars'
import StarWarsList from '../StarWarsList'

jest.mock('../../actions/starwars')
jest.mock('react-router-dom', () => {
  return {
    Link: function Link () {
      return <div>Link</div>
    }
  }
})

fetchStarWars.mockReturnValue({ type: 'SET_STARWARS' })

describe('<StarWarsList />', () => {
  const fakeStore = {
    getState: () => ( starwars: [{
      id: '1',
      Title: 'Fake Title1',
      Released: 'Fake Released1',
      ChronoDate: 'Fake ChronoDate1',
      Period: 'Fake Period1',
      Image: 'Fake Image1',
      Trailer: 'https://fake.link.1'
    }] 
  }),
    dispatch: jest.fn(),
    subscribe: jest.fn()
  }