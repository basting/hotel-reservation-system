import { AppBar, Toolbar, Typography } from '@mui/material'

export const Navbar: React.FC = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Hotel Reservation System
        </Typography>
      </Toolbar>
    </AppBar>
  )
}
