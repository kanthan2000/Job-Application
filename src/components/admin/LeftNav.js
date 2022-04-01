import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { Grid } from '@mui/material';
import Dashboard from './Dashboard';
const LeftNav = ()=>{

    
    return(
        <>
        <div >
            <Grid container spacing={1} sx={{height:"100vh",margin:"0"}}>
               <Grid item xs={2} sx={{backgroundColor:"white",boxShadow:"-1px 20px 11px 0px"}}>
               <ListItemButton>
            
            <ListItemText primary="Dashboard" />
            </ListItemButton>
        <ListItemButton>
            
            <ListItemText primary="Orders" />
        </ListItemButton>
        <ListItemButton>
            
            <ListItemText primary="Customers" />
        </ListItemButton>
        <ListItemButton>
            
            <ListItemText primary="Reports" />
        </ListItemButton>
        <ListItemButton>
            
            <ListItemText primary="Integrations" />
        </ListItemButton>
            </Grid>
            <Grid item xs={10} >
           <Dashboard />
           </Grid>
           </Grid>
           
            
      
        </div>
            </>
        )
    }
export default LeftNav;