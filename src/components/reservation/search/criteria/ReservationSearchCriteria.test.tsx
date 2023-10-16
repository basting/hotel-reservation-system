import { render, screen, fireEvent } from '@testing-library/react'
import { ReservationSearchCriteria } from './ReservationSearchCriteria'

test('ReservationSearchCriteria renders correctly', () => {
  // Render the component
  render(<ReservationSearchCriteria onSearch={() => {}} onCreate={() => {}} />)

  // Check if key elements are rendered
  expect(screen.getByText('Date of Arrival')).toBeInTheDocument()
  expect(screen.getByText('Date of Departure')).toBeInTheDocument()
  expect(screen.getByText('Room Size')).toBeInTheDocument()
  expect(screen.getByText('Search')).toBeInTheDocument()
  expect(screen.getByText('Create')).toBeInTheDocument()
})

test('Search button click should call onSearch function', () => {
  const onSearchMock = jest.fn()
  render(<ReservationSearchCriteria onSearch={onSearchMock} onCreate={() => {}} />)

  // Simulate a button click
  fireEvent.click(screen.getByText('Search'))

  // Check if the onSearch function is called
  expect(onSearchMock).toHaveBeenCalled()
})

test('Create button click should call onCreate function', () => {
  const onCreateMock = jest.fn()
  render(<ReservationSearchCriteria onSearch={() => {}} onCreate={onCreateMock} />)

  // Simulate a button click
  fireEvent.click(screen.getByText('Create'))

  // Check if the onCreate function is called
  expect(onCreateMock).toHaveBeenCalled()
})
