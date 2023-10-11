import { Box, Container, Dialog, DialogTitle, Grid } from '@mui/material'
import type Reservation from '../../../types/Reservation'
import { ReservationSearchCriteria } from './criteria/ReservationSearchCriteria'
import { ReservationSearchResults } from './results/ReservationSearchResults'
import { useState } from 'react'
import { ReservationDetail } from '../detail/ReservationDetail'

export const ReservationSearch: React.FC = () => {
  const [currentReservation, setCurrentReservation] = useState<Reservation>(emptyReservation)

  const handleSearch = (searchCriteria: Record<string, string>): void => {
    // TODO: Search logic to go here
    console.log('Search criteria: ', searchCriteria)
  }

  const handleReservationClick = (id: number): void => {
    console.log('Selected Reservation: ', id)
    const reservation = sampleReservations.find((r) => r.id === id)
    if (reservation !== null && reservation !== undefined) {
      setCurrentReservation(reservation)
      handleClickOpen()
    }
  }

  const [open, setOpen] = useState(false)

  const handleClickOpen = (): void => {
    setOpen(true)
  }

  const handleClose = (): void => {
    setOpen(false)
  }

  return (
    <Container>
      <Box sx={{ p: 5 }}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <ReservationSearchCriteria onSearch={handleSearch} />
          </Grid>
          <Grid item xs={12}>
            <ReservationSearchResults
              results={sampleReservations}
              onReservationClick={handleReservationClick}
            />
          </Grid>
        </Grid>
      </Box>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>View Reservation</DialogTitle>
        <ReservationDetail reservation={currentReservation} handleClose={handleClose} />
      </Dialog>
    </Container>
  )
}

const emptyReservation: Reservation = {
  id: 0,
  stay: {
    arrivalDate: '1970-01-01T00:00:00.000Z',
    departureDate: '1970-01-01T00:00:00.000Z'
  },
  room: {
    roomSize: '',
    roomQuantity: 0
  },
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  addressStreet: {
    streetName: '',
    streetNumber: ''
  },
  addressLocation: {
    zipCode: '',
    state: '',
    city: ''
  },
  extras: [
  ],
  payment: '',
  note: '',
  tags: [
  ],
  reminder: false,
  newsletter: false,
  confirm: false
}

const sampleReservations: Reservation[] = [
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
  },
  {
    id: 2,
    stay: {
      arrivalDate: '2021-11-01T04:00:00.000Z',
      departureDate: '2021-11-04T04:00:00.000Z'
    },
    room: {
      roomSize: 'presidential-suite',
      roomQuantity: 2
    },
    firstName: 'IDM',
    lastName: 'PM',
    email: 'idm.op@idm.com',
    phone: '123456789',
    addressStreet: {
      streetName: 'IDM',
      streetNumber: '1234'
    },
    addressLocation: {
      zipCode: '123456',
      state: 'Arkansas',
      city: 'OAK'
    },
    extras: [
      'extraParking',
      'extraBalcony'
    ],
    payment: 'cash',
    note: 'lab test',
    tags: [
      'angular',
      'material',
      'labtest'
    ],
    reminder: true,
    newsletter: false,
    confirm: true
  },
  {
    id: 3,
    stay: {
      arrivalDate: '2021-10-18T04:00:00.000Z',
      departureDate: '2021-10-22T04:00:00.000Z'
    },
    room: {
      roomSize: 'family-suite',
      roomQuantity: 5
    },
    firstName: 'IDM',
    lastName: 'OPS',
    email: 'idm.ops@idm.com',
    phone: '9999999988',
    addressStreet: {
      streetName: 'IDM Street',
      streetNumber: '123487'
    },
    addressLocation: {
      zipCode: '12345689',
      state: 'Arizona',
      city: 'OAKVILLE'
    },
    extras: [
      'extraBreakfast',
      'extraWiFi'
    ],
    payment: 'bc',
    note: 'idm lab test',
    tags: [
      'hotel',
      'booking',
      'react',
      'angular',
      'material',
      'labtest'
    ],
    reminder: true,
    newsletter: false,
    confirm: false
  }
]
