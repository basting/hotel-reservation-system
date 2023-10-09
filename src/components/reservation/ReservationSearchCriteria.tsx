import { useState } from 'react'
import { Button, Grid, TextField } from '@mui/material'
import { makeStyles } from '@mui/styles'

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
  onSearch: (criteria: Record<string, any>) => void
}

export const ReservationSearchCriteria: React.FC<SearchCriteriaProps> = ({
  onSearch
}: SearchCriteriaProps) => {
  const [criteria, setCriteria] = useState<Record<string, any>>({})

  const handleSearch = (): void => {
    onSearch(criteria)
  }

  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Grid container spacing={3} alignItems='center'>
        <Grid item xs={3}>
        <TextField className={classes.fillWidthHorizontal}
          label="Date of Arrival"
          type="date"
          onChange={(e) => { setCriteria({ ...criteria, checkInDate: e.target.value }) }
          }
          InputLabelProps={{
            shrink: true
          }}
        />
        </Grid>
        <Grid item xs={3}>
          <TextField className={classes.fillWidthHorizontal}
            label="Date of Departure"
            type="date"
            onChange={(e) => { setCriteria({ ...criteria, checkOutDate: e.target.value }) }
            }
            InputLabelProps={{
              shrink: true
            }}
          />
        </Grid>
        <Grid item xs={3}>
          <TextField className={classes.fillWidthHorizontal}
            label="Room Size"
            onChange={(e) => { setCriteria({ ...criteria, roomType: e.target.value }) }}
          />
        </Grid>
        <Grid item xs={3}>
          <Button variant="contained" color="primary" onClick={handleSearch} className={classes.fillWidthHorizontal}>
            Search
          </Button>
        </Grid>
      </Grid>
    </div>
  )
}
