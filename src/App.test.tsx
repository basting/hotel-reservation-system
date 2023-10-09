import { render } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders the App component', () => {
    const { getByText } = render(<App />)

    // Check if the Navbar and ReservationSearch components are present
    expect(getByText('Hotel Reservation System')).toBeInTheDocument()
  })
})
