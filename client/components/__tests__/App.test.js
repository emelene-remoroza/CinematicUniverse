import React from 'react'
import { screen, render } from '@testing-library/react'
import '@testing-library/jest-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import App from '../App'
import Header from '../Header'
import NavBar from '../NavBar'
import Footer from '../Footer'
import { fetchWatchlist } from '../../actions'

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

  it('has links on the page', () => {
    fakeStore.getState.mockReturnValue({ user: { token: '1234' } })
    fetchWatchlist.mockReturnValue(['apple', 'pear', 'pineapple'])

    render(<Provider store={fakeStore}><BrowserRouter><App /></BrowserRouter></Provider>)
    expect(screen.getAllByRole('link')).not.toBeNull()
    expect(fakeStore.dispatch).toHaveBeenCalled()
  })
})
