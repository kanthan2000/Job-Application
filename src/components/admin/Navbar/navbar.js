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
import { Home } from "@mui/icons-material";
import InfoIcon from '@mui/icons-material/Info';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import MapsHomeWorkIcon from '@mui/icons-material/MapsHomeWork';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import Profile from "../../profile/Profile";
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
import TableChartIcon from '@mui/icons-material/TableChart';
import AddCardIcon from '@mui/icons-material/AddCard';
import ReportIcon from '@mui/icons-material/Report';
import LogoutIcon from '@mui/icons-material/Logout';
import WorkIcon from '@mui/icons-material/Work';
import AddBoxIcon from '@mui/icons-material/AddBox';
import PanelTable from "../../Form/AddPanel/PanelTable";
import { useContext } from "react";
import { AppContext } from "../../../context";
const  Navbar = (props) =>{
        const[profile , setprofile] = React.useState(false)
        const { loginpositionData} = useContext(AppContext)
        // console.log(loginpositionData)
    
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

    const onclickprofile = (event) =>{
        console.log("clicked")
        setprofile(true)
    }
    const isAdmim = () =>{
        return(
                <>
                        <Link to="/home">
                        <ListItemButton>
                            <DashboardCustomizeIcon /> <ListItemText primary="Dashboard" />
                        </ListItemButton>
                    </Link>
                    <Link to="/table">
                        <ListItemButton>
                            < TableChartIcon /> <ListItemText primary="Profile" />
                        </ListItemButton>
                    </Link>
                    {/* <Link to="/navtab">
                        <ListItemButton>
                        < AddCardIcon /> <ListItemText primary="Form" />
                        </ListItemButton>
                    </Link> */}
                    <Link to="/jobDescription">
                        <ListItemButton>
                            <WorkIcon/> <ListItemText primary="Job Description" />
                        </ListItemButton>
                    </Link>
                    <Link to="/paneltable">
                        <ListItemButton>
                            <AddBoxIcon /> <ListItemText primary="Add Panel" />
                        </ListItemButton>
                    </Link>
                    <Link to="/report">
                        <ListItemButton>
                            <ReportIcon /> <ListItemText primary="Reports" />
                        </ListItemButton>
                    </Link>  
                    
                    <Link to="/">
                        <ListItemButton>
                            <LogoutIcon /> <ListItemText primary="logout" />
                        </ListItemButton>
                    </Link>
                </>
        )
    }
    const isClient = ()=>{
        return(
                <>
                <Link to="/home">
                        <ListItemButton>
                            <DashboardCustomizeIcon /> <ListItemText primary="Dashboard" />
                        </ListItemButton>
                    </Link>
                    <Link to="/">
                        <ListItemButton>
                            <LogoutIcon /> <ListItemText primary="logout" />
                        </ListItemButton>
                    </Link>
                </>
        )
    }



    return(
        <>
        <Box sx={navStyle}>
            <AppBar position="static">
                <Toolbar>
                <IconButton
                    size="large"
                    edge="start"
                    sx={{ mr: 2, margin:'9px'}} >
                    <img src={logo} style={imgStyle}/>
                </IconButton>
                <>
                    <p style={{ marginLeft: "1.5rem", cursor:'pointer'}}>
                        <Home/> <Link to="/home">Home</Link>
                    </p>
                    <p style={{ marginLeft: "1.5rem", cursor:'pointer'}}>
                        <InfoIcon/> <Link to="/about">About</Link>
                    </p>
                    <p style={{marginLeft: "1.5rem", cursor:'pointer'}}>
                        <ManageAccountsIcon /> Service
                    </p>
                    <p style={{ marginLeft: "1.5rem", cursor:'pointer'}}>
                        <MapsHomeWorkIcon /> Careers
                    </p>
                    <p style={{ marginLeft: "1.5rem", cursor:'pointer'}}>
                        <PermContactCalendarIcon /> <Link to="/contact">Contact </Link>
                    </p>
                </>
                {/* <Button onClick={onclickprofile}  color="inherit" sx={{marginLeft: "50rem"}}>
                    <img src={Avatar} width="50" />
                </Button> */}
                </Toolbar>
            </AppBar>
        </Box> 
        
        
        <>
            <Grid container spacing={1} >
            {/* {isAdmim} */}
                <Grid item xs={2} sx={{backgroundColor:"#0f70d5f7", boxShadow:"-1px 20px 11px 0px", height:"100vh"}}>
                {loginpositionData == "client" ? isClient() : isAdmim()}
                </Grid>
                <Grid item xs={10} >
                    {profile && <Profile />}
                    {props.children}
                </Grid>
            </Grid>
        </>
    </>
    )
}
export default Navbar;