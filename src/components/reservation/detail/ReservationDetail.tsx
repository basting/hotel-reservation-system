import { Box, Button, Checkbox, Chip, FormControl, FormControlLabel, FormHelperText, Grid, InputLabel, MenuItem, Paper, Radio, RadioGroup, Select, Switch, TextField } from '@mui/material'
import type Reservation from '../../../types/Reservation'
import dayjs from 'dayjs'
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { RoomSize, RoomSizeDisplay } from '../../shared/constants/RoomSize'
import { makeStyles } from '@mui/styles'
import { Extras, ExtrasDisplay, getExtrasFromString } from '../../shared/constants/Extras'
import { Tag, TagDisplay, getTagFromString } from '../../shared/constants/Tag'
import { PaymentMethod, PaymentMethodDisplay } from '../../shared/constants/PaymentMethod'

const useStyles = makeStyles({
  fillWidthHorizontal: {
    width: '100%'
  },
  rightAlignedText: {
    textAlign: 'right'
  }
})

interface ReservationDetailProps {
  reservation: Reservation
  handleClose: () => void
}

export const ReservationDetail: React.FC<ReservationDetailProps> = ({ reservation, handleClose }: ReservationDetailProps) => {
  const classes = useStyles()

  const maxAllowedFirstNameSize = 25
  const maxAllowedLastNameSize = 50

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Paper elevation={3} style={{ padding: '20px' }}>
        <Box sx={{ my: 2 }}>
          <Grid container spacing={5}>
            <Grid item xs={6}>
              <DatePicker
                slotProps={{ textField: { variant: 'standard' } }}
                label="Date of Arrival"
                value={dayjs(reservation.stay.arrivalDate)}
              />
            </Grid>
            <Grid item xs={6}>
              <DatePicker
                slotProps={{ textField: { variant: 'standard' } }}
                label="Date of Departure"
                value={dayjs(reservation.stay.departureDate)}
              />
            </Grid>
          </Grid>
        </Box>
        <Box sx={{ my: 2 }}>
          <Grid container spacing={2} marginTop={2}>
            <Grid item xs={6}>
              <FormControl variant='standard' className={classes.fillWidthHorizontal}>
                <InputLabel>Room Size</InputLabel>
                <Select
                    value={reservation.room.roomSize}
                    aria-describedby="room-size-helper-text"
                  >
                    {Object.values(RoomSize).map((roomSize) => (
                      <MenuItem key={roomSize} value={roomSize}>
                        {RoomSizeDisplay[roomSize]}
                      </MenuItem>
                    ))}
                </Select>
                <FormHelperText id="room-size-helper-text">
                  Choose a room type
                </FormHelperText>
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <TextField variant='standard'
                label="Room Quantity"
                value={reservation.room.roomQuantity}
                helperText='Maximum: 5'
              />
            </Grid>
          </Grid>
        </Box>
        <Box sx={{ my: 2 }}>
          <Grid container spacing={2} marginTop={2}>
            <Grid item xs={12}>
              <TextField variant='standard'
                label="First Name"
                value={reservation.firstName}
              />
              <FormHelperText>
                {`${reservation.firstName.length} / ${maxAllowedFirstNameSize}`}
              </FormHelperText>
            </Grid>
          </Grid>
        </Box>
        <Box sx={{ my: 2 }}>
          <Grid container spacing={2} marginTop={2}>
            <Grid item xs={12}>
              <TextField variant='standard'
                label="Last Name"
                value={reservation.lastName}
              />
              <FormHelperText>
                {`${reservation.lastName.length} / ${maxAllowedLastNameSize}`}
              </FormHelperText>
            </Grid>
          </Grid>
        </Box>
        <Box sx={{ my: 2 }}>
          <Grid container spacing={2} marginTop={2}>
            <Grid item xs={12}>
              <TextField variant='standard'
                label="Email"
                value={reservation.email}
              />
            </Grid>
          </Grid>
        </Box>
        <Box sx={{ my: 2 }}>
          <Grid container spacing={2} marginTop={2}>
            <Grid item xs={12}>
              <TextField variant='standard'
                label="Phone Number"
                value={reservation.phone}
                helperText="Add your country code first"
              />
            </Grid>
          </Grid>
        </Box>
        <Box sx={{ my: 2 }}>
          <Grid container spacing={2} marginTop={2}>
            <Grid item xs={6}>
              <TextField variant='standard'
                label="Street Name"
                value={reservation.addressStreet.streetName}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField variant='standard'
                label="Street Number"
                value={reservation.addressStreet.streetNumber}
              />
            </Grid>
          </Grid>
        </Box>
        <Box sx={{ my: 2 }}>
          <Grid container spacing={2} marginTop={2}>
            <Grid item xs={4}>
              <TextField variant='standard'
                label="ZIP"
                value={reservation.addressLocation.zipCode}
              />
            </Grid>
            <Grid item xs={4}>
              <TextField variant='standard'
                label="State"
                value={reservation.addressLocation.state}
              />
            </Grid>
            <Grid item xs={4}>
              <TextField variant='standard'
                label="City"
                value={reservation.addressLocation.city}
              />
            </Grid>
          </Grid>
        </Box>
        <Box sx={{ my: 2 }}>
          <Grid container spacing={2} marginTop={2}>
            <Grid item xs={12}>
              <FormControl variant='standard' className={classes.fillWidthHorizontal}>
                <InputLabel>Extras</InputLabel>
                <Select
                    multiple
                    value={reservation.extras}
                    renderValue={(selected) => selected.map(s => ExtrasDisplay[getExtrasFromString(s)]).join(', ')}
                  >
                    {Object.values(Extras).map((extras) => (
                      <MenuItem key={extras} value={extras}>
                        {ExtrasDisplay[extras]}
                      </MenuItem>
                    ))}
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </Box>
        <Box sx={{ my: 2 }}>
          <Grid container spacing={2} marginTop={2}>
            <Grid item xs={12}>
              <FormControl>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                  value={reservation.payment}
                >
                  {Object.values(PaymentMethod).map((pm) => (
                    <FormControlLabel
                      key={pm}
                      value={pm}
                      control={<Radio />}
                      label={PaymentMethodDisplay[pm]}
                    />
                  ))}
                </RadioGroup>
              </FormControl>

            </Grid>
          </Grid>
        </Box>
        <Box sx={{ my: 2 }}>
          <Grid container spacing={2} marginTop={2}>
            <Grid item xs={12}>
              <TextField variant='standard'
                label="Personal Note"
                value={reservation.note}
              />
            </Grid>
          </Grid>
        </Box>
        <Box sx={{ my: 2 }}>
          <Grid container spacing={2} marginTop={2}>
            <Grid item xs={12}>
              <FormControl variant='standard' className={classes.fillWidthHorizontal}>
                <InputLabel>Tags</InputLabel>
                <Select
                    multiple
                    value={reservation.tags}
                    renderValue={(selected) => (
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                        {selected.map((value) => (
                          <Chip key={value} label={TagDisplay[getTagFromString(value)]} />
                        ))}
                      </Box>
                    )}
                  >
                    {Object.values(Tag).map((tag) => (
                      <MenuItem key={tag} value={tag}>
                        {TagDisplay[tag]}
                      </MenuItem>
                    ))}
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </Box>
        <Box sx={{ my: 2 }}>
          <Grid container spacing={2} marginTop={2}>
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
