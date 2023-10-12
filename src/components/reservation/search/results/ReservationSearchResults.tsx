import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import type Reservation from '../../../../types/Reservation'
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'
import { DATE_TIME_FORMAT, TIMEZONE } from '../../../shared/constants/TimeConstants'
import './ReservationSearchResults.css'
import { RoomSizeDisplay, getRoomSizeFromString } from '../../../shared/constants/RoomSize'

dayjs.extend(utc)
dayjs.extend(timezone)

interface SearchResultsProps {
  results: Reservation[]
  onReservationClick: (id: number) => void
}

const headerCellStyle = {
  fontWeight: 'bold'
}

export const ReservationSearchResults: React.FC<SearchResultsProps> = ({
  results,
  onReservationClick
}: SearchResultsProps) => {
  return (
  <TableContainer component={Paper}>
      <Table>
        <TableHead style={{ backgroundColor: '#e0e0e0' }}>
          <TableRow>
            <TableCell style={headerCellStyle}>Guest Name</TableCell>
            <TableCell style={headerCellStyle}>Date of Arrival</TableCell>
            <TableCell style={headerCellStyle}>Date of Departure</TableCell>
            <TableCell style={headerCellStyle}>Days</TableCell>
            <TableCell style={headerCellStyle}>Room Type and Quantity</TableCell>
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
