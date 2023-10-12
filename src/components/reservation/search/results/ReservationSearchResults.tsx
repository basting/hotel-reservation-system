import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import type Reservation from '../../../../types/Reservation'
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'
import { DATE_TIME_FORMAT, TIMEZONE } from '../../../shared/constants/TimeConstants'
import { withStyles } from '@mui/styles'
import './ReservationSearchResults.css'
import { RoomSizeDisplay, getRoomSizeFromString } from '../../../shared/constants/RoomSize'

dayjs.extend(utc)
dayjs.extend(timezone)

const StyledTableCell = withStyles(() => ({
  head: {
    backgroundColor: '#e0e0e0',
    fontWeight: 'bold'
  }
}))(TableCell)

interface SearchResultsProps {
  results: Reservation[]
  onReservationClick: (id: number) => void
}

export const ReservationSearchResults: React.FC<SearchResultsProps> = ({
  results,
  onReservationClick
}: SearchResultsProps) => {
  return (
  <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <StyledTableCell>Guest Name</StyledTableCell>
            <StyledTableCell>Date of Arrival</StyledTableCell>
            <StyledTableCell>Date of Departure</StyledTableCell>
            <StyledTableCell>Days</StyledTableCell>
            <StyledTableCell>Room Type and Quantity</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {results.map((reservation) => (
            <TableRow key={reservation.id} onClick={() => { onReservationClick(reservation.id) } } className='table-row' data-testid={`reservation-row-${reservation.id}`}>
             <TableCell>{reservation.firstName + ' ' + reservation.lastName}</TableCell>
              <TableCell>{dayjs(reservation.stay?.arrivalDate).tz(TIMEZONE).format(DATE_TIME_FORMAT)}</TableCell>
              <TableCell>{dayjs(reservation.stay?.departureDate).tz(TIMEZONE).format(DATE_TIME_FORMAT)}</TableCell>
              <TableCell>{dayjs(reservation.stay?.departureDate).diff(dayjs(reservation.stay?.arrivalDate), 'day')}</TableCell>
              <TableCell>
                {RoomSizeDisplay[getRoomSizeFromString(reservation.room?.roomSize)] + ' x ' + reservation.room?.roomQuantity}
                </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
