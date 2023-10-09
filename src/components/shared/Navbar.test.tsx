import { render } from '@testing-library/react'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders the Navbar component', () => {
    const { getByText } = render(<Navbar />)

    // Check if the Navbar title is present
    expect(getByText('Hotel Reservation System')).toBeInTheDocument()
  })
})
