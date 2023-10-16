import { render, screen, fireEvent } from '@testing-library/react'
import { ReservationDetail } from './ReservationDetail'

describe('ReservationDetail Component', () => {
  const mockReservation = {
    id: 1,
    stay: {
      arrivalDate: '2023-01-01',
      departureDate: '2023-01-05'
    },
    room: {
      roomSize: 'family-suite',
      roomQuantity: 2
    },
    firstName: 'John',
    lastName: 'Doe',
    email: 'john@example.com',
    phone: '123-456-7890',
    addressStreet: {
      streetName: '123 Street',
      streetNumber: 'Apt 4B'
    },
    addressLocation: {
      zipCode: '12345',
      state: 'CA',
      city: 'Los Angeles'
    },
    extras: ['wifi'],
    payment: 'cc',
    note: 'Special requests',
    tags: [],
    reminder: true,
    newsletter: false,
    confirm: true
  }

  it('renders ReservationDetail with provided data', () => {
    const mockUpdateReservation = jest.fn()
    const mockDeleteReservation = jest.fn()
    const mockClose = jest.fn()

    render(
      <ReservationDetail
        reservation={mockReservation}
        onUpdateReservation={mockUpdateReservation}
        onDeleteReservation={mockDeleteReservation}
        handleClose={mockClose}
      />
    )

    expect(screen.getByLabelText('First Name')).toBeInTheDocument()
    expect(screen.getByLabelText('Last Name')).toBeInTheDocument()

    expect(screen.getByLabelText('First Name')).toHaveValue(mockReservation.firstName)
    expect(screen.getByLabelText('Last Name')).toHaveValue(mockReservation.lastName)

    expect(screen.getByText('Maximum: 5')).toBeInTheDocument()

    expect(screen.getByText('Save')).toBeInTheDocument()
    expect(screen.getByText('Close')).toBeInTheDocument()
    expect(screen.getByText('Delete')).toBeInTheDocument()
  })

  it('handles user interactions and updates local state', () => {
    render(
      <ReservationDetail
        reservation={mockReservation}
        handleClose={() => {}}
        onUpdateReservation={() => {}}
        onDeleteReservation={() => {}}
      />
    )

    const firstNameInput = screen.getByLabelText('First Name')
    fireEvent.change(firstNameInput, { target: { value: 'John1' } })

    const firstNameField = screen.getByTestId('reservation-first-name').querySelector('input')
    expect(firstNameField?.value).toContain('John1')
  })

  it('calls onUpdateReservation when Save button is clicked with valid input', () => {
    const mockUpdateReservation = jest.fn()

    render(
      <ReservationDetail
        reservation={mockReservation}
        handleClose={() => {}}
        onUpdateReservation={mockUpdateReservation}
        onDeleteReservation={() => {}}
      />
    )

    const firstNameInput = screen.getByLabelText('First Name')
    fireEvent.change(firstNameInput, { target: { value: 'John1' } })
    const lastNameInput = screen.getByLabelText('Last Name')
    fireEvent.change(lastNameInput, { target: { value: 'Doe1' } })

    const saveButton = screen.getByText('Save')
    fireEvent.click(saveButton)

    expect(mockUpdateReservation).toHaveBeenCalledTimes(1)
  })

  it('calls onDeleteReservation when Delete button is clicked', () => {
    const mockDeleteReservation = jest.fn()

    render(
      <ReservationDetail
        reservation={mockReservation}
        handleClose={() => {}}
        onUpdateReservation={() => {}}
        onDeleteReservation={mockDeleteReservation}
      />
    )

    const deleteButton = screen.getByText('Delete')
    fireEvent.click(deleteButton)

    expect(mockDeleteReservation).toHaveBeenCalledTimes(1)
  })
})
