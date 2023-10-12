import { selector } from 'recoil'
import { reservationFilterState, reservationState } from '../atoms/reservationState'
import type Reservation from '../../types/Reservation'
import { START_OF_EPOCH } from '../../components/shared/constants/TimeConstants'
import dayjs from 'dayjs'

export const filteredReservations = selector<Reservation[]>({
  key: 'filteredReservations',
  get: ({ get }) => {
    const reservations = get(reservationState)
    const filter = get(reservationFilterState)

    return reservations.filter((reservation: Reservation) => {
      if (filter.roomType !== undefined &&
            filter.roomType !== null &&
            filter.roomType !== '' &&
            reservation.room.roomSize.toLowerCase() !== filter.roomType.toLowerCase()) {
        return false
      }

      const reservationArrivalDate = reservation.stay.arrivalDate

      if (filter.arrivalDate !== undefined &&
            filter.arrivalDate !== null &&
            filter.arrivalDate !== '' &&
            filter.arrivalDate !== START_OF_EPOCH &&
            !dayjs(reservationArrivalDate).utcOffset(0).startOf('date').isSame(dayjs(filter.arrivalDate).utcOffset(0).startOf('date'))) {
        return false
      }

      const reservationDepartureDate = reservation.stay.departureDate

      if (filter.departureDate !== undefined &&
            filter.departureDate !== null &&
            filter.departureDate !== '' &&
            filter.departureDate !== START_OF_EPOCH &&
            !dayjs(reservationDepartureDate).utcOffset(0).startOf('date').isSame(dayjs(filter.departureDate).utcOffset(0).startOf('date'))) {
        return false
      }

      return true
    })
  }
})
