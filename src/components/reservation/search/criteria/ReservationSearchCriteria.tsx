import { useState } from 'react'
import { Button, FormControl, Grid, IconButton, InputAdornment, InputLabel, MenuItem, Select } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { RoomSize, RoomSizeDisplay } from '../../../shared/constants/RoomSize'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers'
import { START_OF_EPOCH } from '../../../shared/constants/TimeConstants'
import dayjs from 'dayjs'
import { CloseRounded } from '@mui/icons-material'

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
  onCreate: () => void
}

export const ReservationSearchCriteria: React.FC<SearchCriteriaProps> = ({
  onSearch,
  onCreate
}: SearchCriteriaProps) => {
  const [criteria, setCriteria] = useState<Record<string, string>>({
    roomType: ''
  })

  const handleSearch = (): void => {
    onSearch(criteria)
  }

  const handleCreate = (): void => {
    onCreate()
  }

  const classes = useStyles()

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className={classes.root}>
        <Grid container spacing={3} alignItems='center'>
          <Grid item xs={2.25}>
          <DatePicker
            slotProps={{ textField: { variant: 'standard' }, actionBar: { actions: ['today'] }, field: { clearable: true } }}
            label="Date of Arrival"
            defaultValue={criteria.arrivalDate}
            onChange={(e) => {
              const arrivalDate = e !== null && e !== undefined && dayjs(e).isValid() ? dayjs(e).toISOString() : START_OF_EPOCH
              setCriteria({ ...criteria, arrivalDate })
            }}
          />
          </Grid>
          <Grid item xs={2.25}>
          <DatePicker
            slotProps={{ textField: { variant: 'standard' }, actionBar: { actions: ['today'] }, field: { clearable: true } }}
            label="Date of Departure"
            defaultValue={criteria.departureDate}
            onChange={(e) => {
              const departureDate = e !== null && e !== undefined && dayjs(e).isValid() ? dayjs(e).toISOString() : START_OF_EPOCH
              setCriteria({ ...criteria, departureDate })
            }}
          />
          </Grid>
          <Grid item xs={2.25}>
            <FormControl className={classes.fillWidthHorizontal} variant='standard'>
              <InputLabel id='room-size-input-label'>Room Size</InputLabel>
              <Select
                  aria-labelledby='room-size-input-label'
                  value={criteria.roomType}
                  onChange={(e) => { setCriteria({ ...criteria, roomType: e.target.value as RoomSize }) }}
                  endAdornment={ // Use the InputAdornment component for the end decorator
                    <InputAdornment position="end">
                      <IconButton onClick={() => {
                        setCriteria({ ...criteria, roomType: '' })
                      }}>
                        <CloseRounded />
                      </IconButton>
                    </InputAdornment>
                  }
                >
                  {Object.values(RoomSize).map((roomSize) => (
                    <MenuItem key={roomSize} value={roomSize}>
                      {RoomSizeDisplay[roomSize]}
                    </MenuItem>
                  ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={2.25}>
            <Button variant="contained" color="primary" onClick={handleSearch} className={classes.fillWidthHorizontal}>
              Search
            </Button>
          </Grid>
          <Grid item xs={2.25}>
            <Button variant="contained" color="primary" onClick={handleCreate} className={classes.fillWidthHorizontal}>
              Create
            </Button>
          </Grid>
        </Grid>
      </div>
    </LocalizationProvider>
  )
}
