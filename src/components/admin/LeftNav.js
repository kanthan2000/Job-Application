/*import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { Grid } from '@mui/material';
import StickyHeadTable from '../Form/dashtable/Usertable';
import { Link } from 'react-router-dom';
import BasicTabs from '../Form/candidate/candidate'

const LeftNav = ()=>{

    
    return(
        <>
        <div >
            <Grid container spacing={1} sx={{height:"100vh",margin:"0"}}>
                <Grid item xs={2} sx={{backgroundColor:"white",boxShadow:"-1px 20px 11px 0px"}}>
                <Link to="/home">
                    <ListItemButton>
                            <ListItemText primary="Dashboard" />
                    </ListItemButton>
                </Link>
                <Link to="/table">
                    <ListItemButton>
                            <ListItemText primary="Table" />
                    </ListItemButton>
                </Link>
                <Link to="/forms">
                    <ListItemButton>
                        <ListItemText primary="Forms" />
                    </ListItemButton>
                </Link>  
        <ListItemButton>
            <ListItemText primary="Reports" />
        </ListItemButton>
        <ListItemButton>
            
            <ListItemText primary="logout" />
        </ListItemButton>
            </Grid>
            <Grid item xs={10} >
                <BasicTabs />
            </Grid>
           </Grid>
           
            
      
        </div>
            </>
        )
    }
export default LeftNav;*/