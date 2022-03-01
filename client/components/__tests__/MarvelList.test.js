import React from 'react'
import { Provider } from 'react-redux'
import { render, screen, fireEvent } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { fetchMarvel } from '../../actions/marvel'
import MarvelList from '../MarvelList'

jest.mock('../../actions/marvel')

// const fakeMarvel = [
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

describe('<MarvelList />', () => {
  const fakeStore = {
    subscribe: jest.fn(),
    getState: jest.fn(() => {
      return {
        marvel: [
          {
            id: '1',
            Title: 'Fake Title1',
            Released: 'Fake Released1',
            ChronoDate: '1942',
            Image: 'Fake Image1',
            Trailer: 'https://fake.link.1'
          }
        ]
      }
    }),
    dispatch: jest.fn()
  }
  it('displays list of marvel movies and series', () => {
    render(<Provider store={fakeStore}><BrowserRouter><MarvelList /></BrowserRouter></Provider>)
    const listItems = screen.getAllByRole('listitem')
    expect(listItems).toHaveLength(1)
  })
  it('sorts the movie list by chronological order', () => {
    fetchMarvel.mockReturnValue('marvel')
    render(<Provider store={fakeStore}><BrowserRouter><MarvelList /></BrowserRouter></Provider>)
    const button = screen.getByText('Sort by Chronological Order')
    fireEvent.click(button)
    const chronoDate = screen.getByTestId('yeartest')
    expect(chronoDate.innerHTML).toContain('1942')
  })
  it('sorts the movie list by release date', () => {
    fetchMarvel.mockReturnValue('marvel')
    render(<Provider store={fakeStore}><BrowserRouter><MarvelList /></BrowserRouter></Provider>)
    const button = screen.getByText('Sort by Release Date')
    fireEvent.click(button)
    expect(screen.queryByTestId('marvelDate')).toBeNull()
  })
})
