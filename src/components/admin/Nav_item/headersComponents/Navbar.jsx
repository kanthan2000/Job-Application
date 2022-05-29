import * as React from 'react';
import { Button, Container, IconButton } from "@mui/material";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useStyles } from './HeaderStyles'
import InfoIcon from '@mui/icons-material/Info';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import MapsHomeWorkIcon from '@mui/icons-material/MapsHomeWork';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';

let navStyle = {
  top: "0",
  width: "100%",
  left: "0",
  flexGrow: "1",
  
}



export default function Navbarcom() {
  const classes = useStyles();

  return (
      <>
      <Box sx={navStyle}>
      <AppBar position="static">
        <Toolbar>
        <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 25,
                        margin:'20px',right:"50%"}}
                >
                </IconButton>
                <div style={{display:"flex"} }>
                  <Typography variant="h5" component="h6" className={classes.Title}>
                    {'Icanio tech'}
                  </Typography>
                <Typography variant="h6" component="div" sx={{ marginLeft: "2rem",cursor:'pointer'}}>
                <InfoIcon/>About
                </Typography>
                <Typography variant="h6" component="div" sx={{marginLeft: "2rem",cursor:'pointer'}}>
                <ManageAccountsIcon />Service
                </Typography>
                <Typography variant="h6" component="div" sx={{ marginLeft: "2rem",cursor:'pointer'}}>
                <MapsHomeWorkIcon />Careers
                </Typography>
                <Typography variant="h6" component="div" sx={{ marginLeft: "2rem",cursor:'pointer'}}>
                <PermContactCalendarIcon />Contact 
                </Typography>
                </div>
                
                </Toolbar>
            </AppBar>
        </Box> 
        </>
  )
}

