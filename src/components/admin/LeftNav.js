import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { Grid } from '@mui/material';

const LeftNav = ()=>{
    return(
        <>
        <div >
            <Grid container spacing={1}>
               <Grid item xs={8}>
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
            <Grid item xs={4}>
        
           </Grid>
           </Grid>
           
            
      
        </div>
            </>
        )
    }
export default LeftNav;