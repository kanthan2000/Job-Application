import { AppBar, Button, Container, IconButton, Toolbar, Typography, } from "@mui/material";
import logo from '../../image/logo.png';
import Avatar from '../../image/avatar.png'
import { Box } from "@mui/system";
import './Navbar.css'
import * as React from 'react';
import { useState } from "react";
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import { DashboardTwoTone, HomeRounded } from "@material-ui/icons";
import { TableChartTwoTone } from "@material-ui/icons";
import { LocalDiningOutlined } from "@material-ui/icons";
import { LockOpenTwoTone } from "@material-ui/icons";
import { FolderOpenTwoTone } from "@material-ui/icons";
import { Info } from "@material-ui/icons";
import { SettingsApplicationsSharp } from "@material-ui/icons";
import { HomeWorkSharp } from "@material-ui/icons";
import { ContactMailSharp } from "@material-ui/icons";
import Profile from "../../profile/Profile";
const  Navbar = (props) =>{
        const[profile , setprofile] = React.useState(false)
    
    let name = props.name
    let imgStyle =  {
        width: "100px",
        margin: "10px",
    }

    let navStyle = {
        top: "0",
        width: "100%",
        left: "0",
        flexGrow: "1",
        
    }

    const onclickprofile = (event) =>{
        console.log("clicked")
        setprofile(true)
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
                    sx={{ mr: 2,
                        margin:'9px'}}
                >
                <img src={logo} style={imgStyle}/>
                </IconButton>
                <div style={{display:"-webkit-box"}}>
                <Typography variant="h6" component="div" sx={{ marginLeft: "1.5rem",cursor:'pointer'}}>
                <HomeRounded/><Link to="/home">Home</Link>
                </Typography>
                <Typography variant="h6" component="div" sx={{ marginLeft: "1.5rem",cursor:'pointer'}}>
                    <Info /> About
                </Typography>
                <Typography variant="h6" component="div" sx={{marginLeft: "1.5rem",cursor:'pointer'}}>
                <SettingsApplicationsSharp />Service
                </Typography>
                <Typography variant="h6" component="div" sx={{ marginLeft: "1.5rem",cursor:'pointer'}}>
                <HomeWorkSharp />Careers
                </Typography>
                <Typography variant="h6" component="div" sx={{ marginLeft: "1.5rem",cursor:'pointer'}}>
                <ContactMailSharp />Contact 
                </Typography>
                </div>
                <Button onClick={onclickprofile}  color="inherit" sx={{marginLeft: "50rem"}}>
                    <img src={Avatar} width="50" />
                </Button>
                </Toolbar>
            </AppBar>
        </Box> 
       
        
        <div>
            <Grid container spacing={1} >
                <Grid item xs={2} sx={{backgroundColor:"#0f70d5f7",boxShadow:"-1px 20px 11px 0px",height:"100vh"}}>
                    <Link to="/home">
                        <ListItemButton>
                        <DashboardTwoTone /><ListItemText primary="Dashboard" />
                        </ListItemButton>
                    </Link>
                    <Link to="/table">
                        <ListItemButton>
                                <TableChartTwoTone /><ListItemText primary="Table" />
                        </ListItemButton>
                    </Link>
                    <Link to="/navtab">
                        <ListItemButton>
                        <FolderOpenTwoTone/><ListItemText primary="Form" />
                        </ListItemButton>
                    </Link>
                    <Link to="/navtab">
                    <ListItemButton>
                        <LocalDiningOutlined /><ListItemText primary="Reports" />
                    </ListItemButton>
                    </Link>  
                    
                    <Link to="/login">
                    <ListItemButton>
                        <LockOpenTwoTone /> <ListItemText primary="logout" />
                    </ListItemButton>
                    </Link>
                    
                </Grid>
                <Grid item xs={10} >
                    {profile && <Profile />}
                    {props.children}
                </Grid>
            </Grid>
        </div>
    </>
    )
}
export default Navbar;