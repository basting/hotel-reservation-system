import type React from 'react'
import { Container } from '@mui/material'
import { Navbar } from './components/shared/navbar/Navbar'
import { ReservationSearch } from './components/reservation/search/ReservationSearch'

export const App: React.FC = () => {
  return (
    <Container>
      <Navbar />
      <ReservationSearch />
    </Container>
  )
}
