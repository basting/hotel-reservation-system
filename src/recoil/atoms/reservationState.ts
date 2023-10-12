import { atom } from 'recoil'
import type Reservation from '../../types/Reservation'

interface FilterCriteria {
  arrivalDate?: string
  departureDate?: string
  roomType?: string
}

export const reservationFilterState = atom<FilterCriteria>({
  key: 'reservationFilterState',
  default: {}
})

export const reservationState = atom<Reservation[]>({
  key: 'reservationState',
  default: [
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
})
