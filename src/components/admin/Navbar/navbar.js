import { AppBar, Button, Container, IconButton, Toolbar, Typography, } from "@mui/material";
import logo from '../../image/logo.png';
import profile from '../../image/avatar.png'
import { Box } from "@mui/system";
import './Navbar.css'
import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import Dashboard from '../Dashboard/Dashboard';


const  Navbar = (props) =>{

    let name = props.name
    let imgStyle =  {
        width: "100px",
        margin: "10px",
    }

    let navStyle = {
        top: "0",
        width: "100%",
        left: "0",
        flexGrow: "1"
    }

    return(
        <>
        <Box sx={navStyle}>
            <AppBar position="static">
                <Toolbar>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                >
                <img src={logo} style={imgStyle}/>
                </IconButton>
                <Typography variant="h6" component="div" sx={{ marginLeft: "1.5rem",cursor:'pointer'}}>
                    <Link to="/home">Home</Link>
                </Typography>
                <Typography variant="h6" component="div" sx={{ marginLeft: "1.5rem",cursor:'pointer'}}>
                    About
                </Typography>
                <Typography variant="h6" component="div" sx={{marginLeft: "1.5rem",cursor:'pointer'}}>
                Service
                </Typography>
                <Typography variant="h6" component="div" sx={{ marginLeft: "1.5rem",cursor:'pointer'}}>
                Careers
                </Typography>
                <Typography variant="h6" component="div" sx={{ marginLeft: "1.5rem",cursor:'pointer'}}>
                Contact 
                </Typography>
                <Button color="inherit" sx={{marginLeft: "50rem"}}>
                    <img src={profile} width="50" />
                </Button>
                </Toolbar>
            </AppBar>
        </Box> 
        <div >
            <Grid container spacing={1} >
                <Grid item xs={2} sx={{backgroundColor:"white",boxShadow:"-1px 20px 11px 0px",height:"100vh"}}>
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
                    <Link to="/navtab">
                        <ListItemButton>
                            <ListItemText primary="form" />
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
                    {props.children}
                </Grid>
            </Grid>
        </div>
    </>
    )
}
export default Navbar;