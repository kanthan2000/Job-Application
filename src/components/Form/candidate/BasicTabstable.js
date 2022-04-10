import { AppBar, Button, Container, IconButton, Toolbar, Typography, } from "@mui/material";
import logo from '../../image/logo.png';
import profile from '../../image/avatar.png'
import { Box } from "@mui/system";
import { Link } from 'react-router-dom';
import '../../admin/Navbar/Navbar.css'
import Usertable from '../dashtable/Usertable'


import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { Grid } from '@mui/material';

const BasicTabs = ()=>{
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

    return (
        <>
            <Usertable />
        </>
    )
}
export default BasicTabs;    