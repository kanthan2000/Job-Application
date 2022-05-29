import React from 'react';
//import ImgMediaCard from './Cards';
import Navbarcom from './Navbar';
import { Box, Typography } from '@material-ui/core'
import { useStyles } from './HeaderStyles'
//import { Decorator } from "../common/commonComponent";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
//import Typed from "react-typed";
import Button from '@mui/material/Button';
//import Demo from "./demo";
import { useNavigate } from 'react-router-dom';


export default function HeaderComponent() {
    const classes = useStyles();
    const history = useNavigate()
    const handlenextpage = () => {
       history("/About")

    }

    return(

        <Box className={classes.HeaderWrapper} >
            <Navbarcom />
            <Box className={classes.Headcontainer}>
            <Typography variant="h3" component="h4" className={classes.Headertitle}>
                we plan,Build & Implement
               <br />
            Bussiness Efficient
            <br />
            IT Solutions...
            </Typography>
            <Typography variant="h3" component="h4" className={classes.HeaderDesc}>
            I'm a <span style={{ paddingRight: "5px" }}></span>
          {/*<Typed
            strings={[" Webdeveloper,", " UI/UX Designer,", " Digital Expert,"]}
            typeSpeed={30}
            backSpeed={50}
            loop
    />*/}
           
             
            </Typography>
    
            <Button 
                onClick={handlenextpage}
				variant="contained"
				sx={{width: '10%',
				padding:'8px',
                position:"absolute",
                color:"success",
                top:'80%',
                left:'10%',
				boxSizing:'5px'}}>
					About
					</Button>
           
        </Box>
        </Box>
     )
 }
