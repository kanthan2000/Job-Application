import { AppBar, Button, Container, IconButton, Toolbar, Typography, } from "@mui/material";
import logo from '../image/logo.png';
import profile from '../image/avatar.png'
import { Box } from "@mui/system";
import {Link} from 'react-router-dom'
import {MenuBook} from '@material-ui/icons'





const Navbar = (props) =>{

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
       
        </>

        
    )
}
export default Navbar;