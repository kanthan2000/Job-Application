import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { Grid } from '@mui/material';
import StickyHeadTable from '../Form/dashtable/Usertable';

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
            
            <ListItemText primary="Table" />
        </ListItemButton>
        <ListItemButton>
            
            <ListItemText primary="Forms" />
        </ListItemButton>
        <ListItemButton>
            
            <ListItemText primary="Reports" />
        </ListItemButton>
        <ListItemButton>
            
            <ListItemText primary="logout" />
        </ListItemButton>
            </Grid>
            <Grid item xs={10} >
                <StickyHeadTable />
            </Grid>
           </Grid>
           
            
      
        </div>
            </>
        )
    }
export default LeftNav;