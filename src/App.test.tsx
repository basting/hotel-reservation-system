import { render } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders the App component', () => {
    const { getByText } = render(<App />)

    // Check if the Navbar and ReservationSearch components are present
    expect(getByText('Hotel Reservation System')).toBeInTheDocument()
    // Ensure that elements from the ReservationSearch component are rendered as well
    expect(getByText('Date of Arrival')).toBeInTheDocument()
  })
})
