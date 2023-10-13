import { Box, Button, Checkbox, Chip, FormControl, FormControlLabel, FormHelperText, Grid, InputLabel, MenuItem, Paper, Radio, RadioGroup, Select, Switch, TextField } from '@mui/material'
import type Reservation from '../../../types/Reservation'
import dayjs, { type Dayjs } from 'dayjs'
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { RoomSize, RoomSizeDisplay } from '../../shared/constants/RoomSize'
import { Extras, ExtrasDisplay, getExtrasFromString } from '../../shared/constants/Extras'
import { Tag, TagDisplay, getTagFromString } from '../../shared/constants/Tag'
import { PaymentMethod, PaymentMethodDisplay } from '../../shared/constants/PaymentMethod'
import { useState } from 'react'

interface ReservationDetailProps {
  reservation: Reservation
  handleClose: () => void
  onUpdateReservation: (updatedReservation: Reservation) => void
  onDeleteReservation: (id: number) => void
}

export const ReservationDetail: React.FC<ReservationDetailProps> = ({
  reservation,
  handleClose,
  onUpdateReservation,
  onDeleteReservation
}: ReservationDetailProps) => {
  const [updatedReservation, setUpdatedReservation] = useState(reservation)

  const maxAllowedFirstNameSize = 25
  const maxAllowedLastNameSize = 50

  const handleTopLevelFieldChange = (fieldName: string, value: string | boolean | string[]): void => {
    // Update the local state for the changed field in updatedReservation
    setUpdatedReservation({
      ...updatedReservation,
      [fieldName]: value
    })
  }

  const handleStayFieldChange = (fieldName: string, value: Dayjs | null): void => {
    // Update the local state for the changed field in updatedReservation
    setUpdatedReservation({
      ...updatedReservation,
      stay: {
        ...updatedReservation.stay,
        [fieldName]: value?.toISOString()
      }
    })
  }

  const handleRoomFieldChange = (fieldName: string, value: string | number): void => {
    // Update the local state for the changed field in updatedReservation
    setUpdatedReservation({
      ...updatedReservation,
      room: {
        ...updatedReservation.room,
        [fieldName]: value
      }
    })
  }

  const handleAddressStreetFieldChange = (fieldName: string, value: string): void => {
    // Update the local state for the changed field in updatedReservation
    setUpdatedReservation({
      ...updatedReservation,
      addressStreet: {
        ...updatedReservation.addressStreet,
        [fieldName]: value
      }
    })
  }

  const handleAddressLocationFieldChange = (fieldName: string, value: string): void => {
    // Update the local state for the changed field in updatedReservation
    setUpdatedReservation({
      ...updatedReservation,
      addressLocation: {
        ...updatedReservation.addressLocation,
        [fieldName]: value
      }
    })
  }

  const handleSave = (): void => {
    // Update the reservation in the parent component
    onUpdateReservation(updatedReservation)
    handleClose() // Close the dialog
  }

  const handleDelete = (): void => {
    onDeleteReservation(updatedReservation.id)
    handleClose() // Close the dialog
  }

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Paper elevation={3} style={{ padding: '20px' }}>
        <Box sx={{ my: 2 }}>
          <Grid container spacing={5}>
            <Grid item xs={6}>
              <DatePicker
                slotProps={{ textField: { variant: 'standard' }, actionBar: { actions: ['today'] }, field: { clearable: true } }}
                label="Date of Arrival"
                value={dayjs(updatedReservation.stay.arrivalDate)}
                onChange={(event) => { handleStayFieldChange('arrivalDate', event) }}
              />
            </Grid>
            <Grid item xs={6}>
              <DatePicker
                slotProps={{ textField: { variant: 'standard' }, actionBar: { actions: ['today'] }, field: { clearable: true } }}
                label="Date of Departure"
                value={dayjs(updatedReservation.stay.departureDate)}
                onChange={(event) => { handleStayFieldChange('departureDate', event) }}
              />
            </Grid>
          </Grid>
        </Box>
        <Box sx={{ my: 2 }}>
          <Grid container spacing={2} marginTop={2}>
            <Grid item xs={6}>
              <FormControl variant='standard' style={{ width: '100%' }}>
                <InputLabel>Room Size</InputLabel>
                <Select
                  aria-describedby="room-size-helper-text"
                  defaultValue={updatedReservation.room.roomSize}
                  onChange={(event) => { handleRoomFieldChange('roomSize', event.target.value) }}
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
              <TextField variant='standard' style={{ width: '100%' }}
                label="Room Quantity"
                defaultValue={updatedReservation.room.roomQuantity}
                type='number'
                InputProps={{ inputProps: { min: 1, max: 5 } }}
                onChange={(event) => { handleRoomFieldChange('roomQuantity', parseInt(event.target.value)) }}
              />
              <FormHelperText>Maximum: 5</FormHelperText>
            </Grid>
          </Grid>
        </Box>
        <Box sx={{ my: 2 }}>
          <Grid container spacing={2} marginTop={2}>
            <Grid item xs={12}>
              <TextField variant='standard'
                label="First Name"
                defaultValue={updatedReservation.firstName}
                inputProps={{ maxLength: maxAllowedFirstNameSize }}
                onChange={(event) => { handleTopLevelFieldChange('firstName', event.target.value) }}
                FormHelperTextProps={{ style: { textAlign: 'right' } }}
                helperText={`${updatedReservation.firstName.length} / ${maxAllowedFirstNameSize}`}
              />
            </Grid>
          </Grid>
        </Box>
        <Box sx={{ my: 2 }}>
          <Grid container spacing={2} marginTop={2}>
            <Grid item xs={12}>
              <TextField variant='standard'
                label="Last Name"
                defaultValue={updatedReservation.lastName}
                inputProps={{ maxLength: maxAllowedLastNameSize }}
                onChange={(event) => { handleTopLevelFieldChange('lastName', event.target.value) }}
                FormHelperTextProps={{ style: { textAlign: 'right' } }}
                helperText={`${updatedReservation.lastName.length} / ${maxAllowedLastNameSize}`}
              />
            </Grid>
          </Grid>
        </Box>
        <Box sx={{ my: 2 }}>
          <Grid container spacing={2} marginTop={2}>
            <Grid item xs={12}>
              <TextField variant='standard'
                label="Email"
                defaultValue={updatedReservation.email}
                onChange={(event) => { handleTopLevelFieldChange('email', event.target.value) }}
              />
            </Grid>
          </Grid>
        </Box>
        <Box sx={{ my: 2 }}>
          <Grid container spacing={2} marginTop={2}>
            <Grid item xs={12}>
              <TextField variant='standard'
                label="Phone Number"
                defaultValue={updatedReservation.phone}
                onChange={(event) => { handleTopLevelFieldChange('phone', event.target.value) }}
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
                defaultValue={updatedReservation.addressStreet.streetName}
                onChange={(event) => { handleAddressStreetFieldChange('streetName', event.target.value) }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField variant='standard'
                label="Street Number"
                defaultValue={updatedReservation.addressStreet.streetNumber}
                onChange={(event) => { handleAddressStreetFieldChange('streetNumber', event.target.value) }}
              />
            </Grid>
          </Grid>
        </Box>
        <Box sx={{ my: 2 }}>
          <Grid container spacing={2} marginTop={2}>
            <Grid item xs={4}>
              <TextField variant='standard'
                label="ZIP"
                defaultValue={updatedReservation.addressLocation.zipCode}
                onChange={(event) => { handleAddressLocationFieldChange('zipCode', event.target.value) }}
              />
            </Grid>
            <Grid item xs={4}>
              <TextField variant='standard'
                label="State"
                defaultValue={updatedReservation.addressLocation.state}
                onChange={(event) => { handleAddressLocationFieldChange('state', event.target.value) }}
              />
            </Grid>
            <Grid item xs={4}>
              <TextField variant='standard'
                label="City"
                defaultValue={updatedReservation.addressLocation.city}
                onChange={(event) => { handleAddressLocationFieldChange('city', event.target.value) }}
              />
            </Grid>
          </Grid>
        </Box>
        <Box sx={{ my: 2 }}>
          <Grid container spacing={2} marginTop={2}>
            <Grid item xs={12}>
              <FormControl variant='standard' style={{ width: '100%' }}>
                <InputLabel>Extras</InputLabel>
                <Select
                    multiple
                    renderValue={(selected) => selected.map(s => ExtrasDisplay[getExtrasFromString(s)]).join(', ')}
                    defaultValue={updatedReservation.extras}
                    onChange={(event) => { handleTopLevelFieldChange('extras', event.target.value) }}
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
                  name="row-radio-buttons-group"
                  value={updatedReservation.payment}
                  onChange={(event) => { handleTopLevelFieldChange('payment', event.target.value) }}
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
                defaultValue={updatedReservation.note}
                onChange={(event) => { handleTopLevelFieldChange('note', event.target.value) }}
              />
            </Grid>
          </Grid>
        </Box>
        <Box sx={{ my: 2 }}>
          <Grid container spacing={2} marginTop={2}>
            <Grid item xs={12}>
              <FormControl variant='standard' style={{ width: '100%' }}>
                <InputLabel>Tags</InputLabel>
                <Select
                    multiple
                    renderValue={(selected) => (
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                        {selected.map((value) => (
                          <Chip key={value} label={TagDisplay[getTagFromString(value)]} />
                        ))}
                      </Box>
                    )}
                    defaultValue={updatedReservation.tags}
                    onChange={(event) => { handleTopLevelFieldChange('tags', event.target.value) }}
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
              <FormControlLabel control={
                <Switch
                  onChange={(event) => { handleTopLevelFieldChange('reminder', event.target.checked) }}
                  checked={updatedReservation.reminder}
                />
              } label="Send me a reminder"
                defaultChecked={updatedReservation.reminder}
              />
            </Grid>
          </Grid>
        </Box>
        <Box sx={{ my: 2 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <FormControlLabel control={
                <Switch
                  onChange={(event) => { handleTopLevelFieldChange('newsletter', event.target.checked) }}
                  checked={updatedReservation.newsletter}
                />
              }
                label="Subscribe to newsletter"
                defaultChecked={updatedReservation.newsletter}
              />
            </Grid>
          </Grid>
        </Box>
        <Box sx={{ my: 2 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <FormControlLabel control={
                <Checkbox
                  onChange={(event) => { handleTopLevelFieldChange('confirm', event.target.checked) }}
                  checked={updatedReservation.confirm}
                />
              }
                label="I confirm the information given above"
                defaultChecked={updatedReservation.confirm}/>
            </Grid>
          </Grid>
        </Box>
        <Box sx={{ my: 2 }}>
          <Grid container spacing={2}>
            <Grid item xs={2}>
              <Button variant="contained" onClick={handleSave}>
                  Save
              </Button>
            </Grid>
            <Grid item xs={2}>
              <Button variant="contained" onClick={handleClose}>
                  Close
              </Button>
            </Grid>
              {(updatedReservation.id !== null &&
                updatedReservation.id !== undefined &&
                updatedReservation.id !== 0) &&
                (
                <Grid item xs={2}>
                  <Button variant="contained" onClick={handleDelete}>
                    Delete
                  </Button>
                </Grid>
                )}
          </Grid>
        </Box>
      </Paper>
      </LocalizationProvider>
  )
}
