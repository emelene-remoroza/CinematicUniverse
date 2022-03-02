import React from 'react'
import { Provider } from 'react-redux'
import { render, screen, fireEvent } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { fetchStarWars } from '../../actions/starwars'
import StarWarsList from '../StarWarsList'

jest.mock('../../actions/starwars')

// const fakeStarWars = [
//   {
//     id: '1',
//     Title: 'Fake Title1',
//     Released: 'Fake Released1',
//     ChronoDate: 'Fake ChronoDate1',
//     Period: 'Fake Period1',
//     Image: 'Fake Image1',
//     Trailer: 'https://fake.link.1'
//   }
// ]

describe('<StarWarsList />', () => {
  const fakeStore = {
    subscribe: jest.fn(),
    getState: jest.fn(() => {
      return {
        starwars: [
          {
            id: '1',
            Title: 'Fake Title1',
            Released: 'Fake Released1',
            ChronoDate: 'Fake ChronoDate1',
            Period: 'Fake Period1',
            Image: 'Fake Image1',
            Trailer: 'https://fake.link.1'
          }
        ],
        order: 'ChronoDate'
      }
    }),
    dispatch: jest.fn()
  }
  it('displays list of starwars movies and series', () => {
    render(<Provider store={fakeStore}><BrowserRouter><StarWarsList /></BrowserRouter></Provider>)
    const listItems = screen.getAllByRole('listitem')
    expect(listItems).toHaveLength(1)
  })
  it('sorts the movie list by chronological order', () => {
    expect.assertions(2)
    fetchStarWars.mockReturnValue('starwars')
    render(<Provider store={fakeStore}><BrowserRouter><StarWarsList /></BrowserRouter></Provider>)
    const button = screen.getByText('Sort by Chronological Order')
    fireEvent.click(button)
    const date = screen.getByTestId('starwarsDate')
    expect(date.innerHTML).toContain('Battle of Yavin')
    expect(fakeStore.dispatch.mock.calls[0][0]).toEqual({ order: 'ChronoDate', type: 'SET_ORDER' })
  })
  it('sort by release date button sorts movies in correct order', () => {
    fetchStarWars.mockReturnValue('starwars')
    render(<Provider store={fakeStore}><BrowserRouter><StarWarsList /></BrowserRouter></Provider>)
    const button = screen.getByText('Sort by Release Date')
    fireEvent.click(button)
    expect(fakeStore.dispatch.mock.calls[1][0]).toEqual({ order: 'Released', type: 'SET_ORDER' })
  })
})
