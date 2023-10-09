import { Box, Button, Checkbox, FormControlLabel, Grid, Paper, Switch, TextField } from '@mui/material'
import type Reservation from '../../types/Reservation'
import dayjs from 'dayjs'
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

interface ReservationDetailProps {
  reservation: Reservation
  handleClose: () => void
}

export const ReservationDetail: React.FC<ReservationDetailProps> = ({ reservation, handleClose }: ReservationDetailProps) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Paper elevation={3} style={{ padding: '20px' }}>
        <Box sx={{ my: 2 }}>
          <Grid container spacing={5}>
            <Grid item xs={6}>
              <DatePicker
                label="Date of Arrival"
                value={dayjs(reservation.stay.arrivalDate)}
              />
            </Grid>
            <Grid item xs={6}>
              <DatePicker
                label="Date of Departure"
                value={dayjs(reservation.stay.departureDate)}
              />
            </Grid>
          </Grid>
        </Box>
        <Box sx={{ my: 2 }}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                label="Room Size"
                value={reservation.room.roomSize}
                helperText='Choose a room type'
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Room Quantity"
                value={reservation.room.roomQuantity}
                helperText='Maximum: 5'
              />
            </Grid>
          </Grid>
        </Box>
        <Box sx={{ my: 2 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                label="First Name"
                value={reservation.firstName}
              />
            </Grid>
          </Grid>
        </Box>
        <Box sx={{ my: 2 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                label="Last Name"
                value={reservation.lastName}
              />
            </Grid>
          </Grid>
        </Box>
        <Box sx={{ my: 2 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                label="Email"
                value={reservation.email}
              />
            </Grid>
          </Grid>
        </Box>
        <Box sx={{ my: 2 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                label="Phone Number"
                value={reservation.phone}
                helperText="Add your country code first"
              />
            </Grid>
          </Grid>
        </Box>
        <Box sx={{ my: 2 }}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                label="Street Name"
                value={reservation.addressStreet.streetName}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Street Number"
                value={reservation.addressStreet.streetNumber}
              />
            </Grid>
          </Grid>
        </Box>
        <Box sx={{ my: 2 }}>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <TextField
                label="ZIP"
                value={reservation.addressLocation.zipCode}
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                label="State"
                value={reservation.addressLocation.state}
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                label="City"
                value={reservation.addressLocation.city}
              />
            </Grid>
          </Grid>
        </Box>
        <Box sx={{ my: 2 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                label="Extras"
                value={reservation.extras}
              />
            </Grid>
          </Grid>
        </Box>
        <Box sx={{ my: 2 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                label="Payment"
                value={reservation.payment}
              />
            </Grid>
          </Grid>
        </Box>
        <Box sx={{ my: 2 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                label="Personal Note"
                value={reservation.note}
              />
            </Grid>
          </Grid>
        </Box>
        <Box sx={{ my: 2 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                label="Tags"
                value={reservation.tags}
              />
            </Grid>
          </Grid>
        </Box>
        <Box sx={{ my: 2 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <FormControlLabel control={<Switch />} label="Send me a reminder" checked={reservation.reminder}/>
            </Grid>
          </Grid>
        </Box>
        <Box sx={{ my: 2 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <FormControlLabel control={<Switch />} label="Subscribe to newsletter" checked={reservation.newsletter}/>
            </Grid>
          </Grid>
        </Box>
        <Box sx={{ my: 2 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <FormControlLabel control={<Checkbox />} label="I confirm the information given above" checked={reservation.confirm}/>
            </Grid>
          </Grid>
        </Box>
        <Button variant="contained" onClick={handleClose}>
            Close
        </Button>
      </Paper>
      </LocalizationProvider>
  )
}
