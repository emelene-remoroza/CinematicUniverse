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
        ]
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
    fetchStarWars.mockReturnValue('starwars')
    render(<Provider store={fakeStore}><BrowserRouter><StarWarsList /></BrowserRouter></Provider>)
    const button = screen.getByText('Sort by Chronological Order')
    fireEvent.click(button)
    const date = screen.getByTestId('starwarsDate')
    expect(date.innerHTML).toContain('Battle of Yavin')
  })
  it('sorts the movie list by release date', () => {
    fetchStarWars.mockReturnValue('starwars')
    render(<Provider store={fakeStore}><BrowserRouter><StarWarsList /></BrowserRouter></Provider>)
    const button = screen.getByText('Sort by Release Date')
    fireEvent.click(button)
    expect(screen.queryByTestId('starwarsDate')).toBeNull()
    // console.log(screen.getByTestId('starwarsDate'))
    // const date = screen.getByTestId('starwarsDate')
    // expect(date.innerHTML).notToContain('Battle of Yavin')
  })
})
