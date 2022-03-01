import React from 'react'
import { screen, render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import NavBar from '../NavBar'
import '@testing-library/jest-dom'
import { createBrowserHistory } from 'history'

describe('<NavBar />', () => {
  it('has nav links on screen', () => {
    const history = createBrowserHistory()
    history.push('/marvel/1')

    render(<BrowserRouter history={history}><NavBar/></BrowserRouter>)

    expect(screen.getByRole('navigation')).toHaveTextContent('Home')
    expect(screen.getByRole('link', { name: /Watchlist/ })).toBeInTheDocument()
    expect(screen.getByText('Back to Marvel List')).toBeInTheDocument()
  })
})
