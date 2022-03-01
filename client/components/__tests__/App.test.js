import React from 'react'
import { screen, render } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Routes, BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createMemoryHistory } from 'history'

import App from '../App'
import Header from '../Header'
import NavBar from '../NavBar'
import Footer from '../Footer'
import { fetchMarvel, fetchWatchlist, fetchStarWars } from '../../actions'

jest.mock('react-redux')
jest.mock('../../auth0')
jest.mock('../Header')
jest.mock('../Footer')
jest.mock('../NavBar')
jest.mock('../../actions')

Header.mockImplementation(() => <div>Header</div>)
Footer.mockImplementation(() => <div>Footer</div>)
NavBar.mockImplementation(() => <div>NavBar</div>)

describe('<App />', () => {
  const fakeStore = {
    subscribe: jest.fn(),
    dispatch: jest.fn(),
    getState: jest.fn()
  }

  it.skip('shows a Header', () => {
    const history = createMemoryHistory()
    history.push('/')
    render(<Provider store={fakeStore}><BrowserRouter history={history}><App /></BrowserRouter></Provider>)
    // expect(screen.getByRole('heading')).toHaveTextContent('Header')
  })
})
