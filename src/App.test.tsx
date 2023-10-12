import { render } from '@testing-library/react'
import { App } from './App'
import { RecoilRoot } from 'recoil'

describe('App', () => {
  it('renders the App component', () => {
    const { getByText } = render(
      <RecoilRoot>
        <App />
      </RecoilRoot>
    )

    // Check if the Navbar and ReservationSearch components are present
    expect(getByText('Hotel Reservation System')).toBeInTheDocument()
  })
})
