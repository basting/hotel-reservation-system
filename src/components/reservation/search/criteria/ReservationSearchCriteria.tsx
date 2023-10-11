import { useState } from 'react'
import { Button, FormControl, Grid, InputLabel, MenuItem, Select } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { RoomSize, RoomSizeDisplay } from '../../../shared/constants/RoomSize'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers'

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: '10px'
  },
  fillWidthHorizontal: {
    width: '100%'
  }
})

interface SearchCriteriaProps {
  onSearch: (criteria: Record<string, string>) => void
}

export const ReservationSearchCriteria: React.FC<SearchCriteriaProps> = ({
  onSearch
}: SearchCriteriaProps) => {
  const [criteria, setCriteria] = useState<Record<string, string>>({
    roomType: ''
  })

  const handleSearch = (): void => {
    onSearch(criteria)
  }

  const classes = useStyles()

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className={classes.root}>
        <Grid container spacing={3} alignItems='center'>
          <Grid item xs={3}>
          <DatePicker
            slotProps={{ textField: { variant: 'standard' } }}
            label="Date of Arrival"
          />
          </Grid>
          <Grid item xs={3}>
          <DatePicker
            slotProps={{ textField: { variant: 'standard' } }}
            label="Date of Departure"
          />
          </Grid>
          <Grid item xs={3}>
            <FormControl className={classes.fillWidthHorizontal} variant='standard'>
              <InputLabel id='room-size-input-label'>Room Size</InputLabel>
              <Select
                  aria-labelledby='room-size-input-label'
                  value={criteria.roomType}
                  onChange={(e) => { setCriteria({ ...criteria, roomType: e.target.value as RoomSize }) }}
                >
                  {Object.values(RoomSize).map((roomSize) => (
                    <MenuItem key={roomSize} value={roomSize}>
                      {RoomSizeDisplay[roomSize]}
                    </MenuItem>
                  ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={3}>
            <Button variant="contained" color="primary" onClick={handleSearch} className={classes.fillWidthHorizontal}>
              Search
            </Button>
          </Grid>
        </Grid>
      </div>
    </LocalizationProvider>
  )
}
