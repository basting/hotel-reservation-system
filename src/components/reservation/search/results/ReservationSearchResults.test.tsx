import { render, fireEvent } from '@testing-library/react'
import { ReservationSearchResults } from './ReservationSearchResults'

const mockResults = [
  {
    id: 1,
    stay: {
      arrivalDate: '2021-11-18T05:00:00.000Z',
      departureDate: '2021-11-25T05:00:00.000Z'
    },
    room: {
      roomSize: 'business-suite',
      roomQuantity: 3
    },
    firstName: 'IDM',
    lastName: 'ENG',
    email: 'idm.test@idm.com',
    phone: '9999999999',
    addressStreet: {
      streetName: 'IDM Street',
      streetNumber: '1234'
    },
    addressLocation: {
      zipCode: '123456',
      state: 'Arizona',
      city: 'OAKVILLE'
    },
    extras: [
      'extraBreakfast',
      'extraTV',
      'extraWiFi',
      'extraParking',
      'extraBalcony'
    ],
    payment: 'cc',
    note: 'idm lab test',
    tags: [
      'hotel',
      'booking',
      'labtest'
    ],
    reminder: true,
    newsletter: true,
    confirm: false
  }
]

describe('ReservationSearchResults', () => {
  it('renders a table with the correct columns', () => {
    const { getByText } = render(
      <ReservationSearchResults results={mockResults} onReservationClick={() => {}} />
    )

    // Check if the table headers are present
    expect(getByText('Guest Name')).toBeInTheDocument()
    expect(getByText('Date of Arrival')).toBeInTheDocument()
    expect(getByText('Date of Departure')).toBeInTheDocument()
    expect(getByText('Days')).toBeInTheDocument()
    expect(getByText('Room Type and Quantity')).toBeInTheDocument()
  })

  it('renders reservation data', () => {
    const { getByText } = render(
      <ReservationSearchResults results={mockResults} onReservationClick={() => {}} />
    )

    // Check if reservation data is present
    expect(getByText('IDM ENG')).toBeInTheDocument()
    expect(getByText('Thu, Nov 18, 2021')).toBeInTheDocument()
    expect(getByText('Thu, Nov 25, 2021')).toBeInTheDocument()
    expect(getByText('7')).toBeInTheDocument()
    expect(getByText('Business Suite x 3')).toBeInTheDocument()
  })

  it('calls the onReservationClick callback when a row is clicked', () => {
    const mockClickHandler = jest.fn()
    const { getByTestId } = render(
      <ReservationSearchResults results={mockResults} onReservationClick={mockClickHandler} />
    )

    const row = getByTestId('reservation-row-1')

    fireEvent.click(row)

    expect(mockClickHandler).toHaveBeenCalledWith(1)
  })
})
