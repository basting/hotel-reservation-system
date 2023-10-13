import { Alert, type AlertColor, Box, Container, Dialog, DialogTitle, Grid, Snackbar } from '@mui/material'
import type Reservation from '../../../types/Reservation'
import { ReservationSearchCriteria } from './criteria/ReservationSearchCriteria'
import { ReservationSearchResults } from './results/ReservationSearchResults'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { useState } from 'react'
import { ReservationDetail } from '../detail/ReservationDetail'
import { reservationFilterState, reservationState } from '../../../recoil/recoil'
import { filteredReservations } from '../../../recoil/selectors/filteredReservations'
import dayjs from 'dayjs'
import { ConfirmDialog } from '../../shared/dialog/ConfirmDialog'

export const ReservationSearch: React.FC = () => {
  const [currentReservation, setCurrentReservation] = useState<Reservation>(emptyReservation)
  const [open, setOpen] = useState(false)
  const [createMode, setCreateMode] = useState(false)
  const [enableAlert, setEnableAlert] = useState(false)
  const [alertMessage, setAlertMessage] = useState('')
  const [alertSeverity, setAlertSeverity] = useState<AlertColor>('success')
  const [idToDelete, setIdToDelete] = useState(0)
  const [isDeleteConfirmDialogOpen, setDeleteConfirmDialogOpen] = useState(false)
  const reservations = useRecoilValue(filteredReservations)
  const allReservations = useRecoilValue(reservationState)
  const setReservations = useSetRecoilState(reservationState)
  const setReservationFilter = useSetRecoilState(reservationFilterState)

  const showAlert = (message: string, severity: AlertColor = 'success'): void => {
    setAlertMessage(message)
    setAlertSeverity(severity)
    setEnableAlert(true)
  }

  const handleSearch = (searchCriteria: Record<string, string>): void => {
    setReservationFilter(searchCriteria)
  }

  const handleCreate = (): void => {
    setCreateMode(true)
    setCurrentReservation({
      ...emptyReservation,
      stay: {
        arrivalDate: dayjs().toISOString(),
        departureDate: dayjs().toISOString()
      }
    })
    handleClickOpen()
  }

  const handleReservationClick = (id: number): void => {
    const reservation = reservations.find((r) => r.id === id)
    if (reservation !== null && reservation !== undefined) {
      setCreateMode(false)
      setCurrentReservation(reservation)
      handleClickOpen()
    }
  }

  const handleUpdateReservation = (updatedReservation: Reservation): void => {
    const id = updatedReservation.id
    const updatedReservations = [...reservations]
    if (id === null || id === undefined || id === 0) {
      // Create reservation
      const maxId: number = allReservations.reduce((max, item) => (item.id > max ? item.id : max), 0)
      updatedReservation = { ...updatedReservation, id: maxId + 1 }
      updatedReservations.push(updatedReservation)
      showAlert('Reservation created successfully!')
    } else {
      // Update reservation
      const index = reservations.findIndex((r) => r.id === updatedReservation.id)
      if (index !== -1) {
        updatedReservations[index] = updatedReservation
      }
      showAlert('Reservation updated successfully!')
    }
    setReservations(updatedReservations)
  }

  const handleConfirmDelete = (): void => {
    if (idToDelete === 0) {
      return
    }
    const reservationsAfterDelete = allReservations.filter(item => item.id !== idToDelete)
    setReservations(reservationsAfterDelete)
    setIdToDelete(0)
    showAlert('Reservation deleted successfully!')
    closeDeleteConfirmDialog()
  }

  const handleDeleteReservation = (id: number): void => {
    setIdToDelete(id)
    openDeleteConfirmDialog()
  }

  const handleClickOpen = (): void => {
    setOpen(true)
  }

  const handleClose = (): void => {
    setOpen(false)
  }

  const handleAlertClose = (): void => {
    setEnableAlert(false)
  }

  const openDeleteConfirmDialog = (): void => {
    setDeleteConfirmDialogOpen(true)
  }

  const closeDeleteConfirmDialog = (): void => {
    setDeleteConfirmDialogOpen(false)
  }

  return (
    <Container>
      <Box sx={{ p: 5 }}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <ReservationSearchCriteria onSearch={handleSearch} onCreate={handleCreate}/>
          </Grid>
          <Grid item xs={12}>
            <ReservationSearchResults
              results={reservations}
              onReservationClick={handleReservationClick}
            />
          </Grid>
        </Grid>
      </Box>
      <Dialog open={open} onClose={handleClose}>
        {createMode
          ? (
          <DialogTitle>Create Reservation</DialogTitle>
            )
          : (
          <DialogTitle>View and Edit Reservation</DialogTitle>
            )}
        <ReservationDetail
          reservation={currentReservation}
          handleClose={handleClose}
          onUpdateReservation={handleUpdateReservation}
          onDeleteReservation={handleDeleteReservation}
        />
      </Dialog>
      <div>
        {enableAlert &&
          (
            <Snackbar open={enableAlert} autoHideDuration={5000} onClose={handleAlertClose} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
              <Alert onClose={handleAlertClose} severity={alertSeverity} sx={{ width: '100%' }} variant='filled'>
                {alertMessage}
              </Alert>
            </Snackbar>
          )}
      </div>
      <div>
        <ConfirmDialog
          open={isDeleteConfirmDialogOpen}
          message="Are you sure you want to delete this reservation?"
          onClose={closeDeleteConfirmDialog}
          onConfirm={handleConfirmDelete}
        />
      </div>
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
    roomQuantity: 1
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
