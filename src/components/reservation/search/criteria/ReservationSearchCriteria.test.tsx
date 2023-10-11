import { render, fireEvent, screen } from '@testing-library/react'
import { ReservationSearchCriteria } from './ReservationSearchCriteria'

describe('ReservationSearchCriteria', () => {
  it('renders the component', () => {
    render(<ReservationSearchCriteria onSearch={() => {}}/>)
    const arrivalDateInput = screen.getByLabelText('Date of Arrival')
    const departureDateInput = screen.getByLabelText('Date of Departure')
    const roomSizeInput = screen.getByLabelText('Room Size')
    const searchButton = screen.getByText('Search')

    expect(arrivalDateInput).toBeInTheDocument()
    expect(departureDateInput).toBeInTheDocument()
    expect(roomSizeInput).toBeInTheDocument()
    expect(searchButton).toBeInTheDocument()
  })

  it('handles input change and search button click', () => {
    const mockOnSearch = jest.fn()
    render(<ReservationSearchCriteria onSearch={mockOnSearch} />)
    const arrivalDateInput = screen.getByLabelText('Date of Arrival')
    const departureDateInput = screen.getByLabelText('Date of Departure')
    const roomSizeInput = screen.getByLabelText('Room Size')
    const searchButton = screen.getByText('Search')

    fireEvent.change(arrivalDateInput, { target: { value: '2023-12-31' } })
    fireEvent.change(departureDateInput, { target: { value: '2024-01-02' } })
    fireEvent.change(roomSizeInput, { target: { value: 'Double' } })
    fireEvent.click(searchButton)

    expect(mockOnSearch).toHaveBeenCalledWith({
      checkInDate: '2023-12-31',
      checkOutDate: '2024-01-02',
      roomType: 'Double'
    })
  })
})
