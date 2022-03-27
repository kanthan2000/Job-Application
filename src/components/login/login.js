import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
const Item = styled(Paper)(({ theme }) => ({
    
  }));
const Login = ()=>{
    return(
        <>
        <div>
        <Grid container spacing={2}>
        <Grid item xs={6} md={7} 
        sx={{
            backgroundImage: 'url(https://source.unsplash.com/random)',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height:"100vh"
          }}
        />
        <Grid item xs={6} md={4}>
         <Box 
         sx={{
            my: 8,
            mx: 2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor: 'white',
            boxShadow: '0px 4px 20px 0px',
            height:'80%',
            width:'100%'
         }}
         >
             <Avatar
              sx={{
                   m: 1,
                    bgcolor: 'secondary.main' 
                    }}>
               <LockOutlinedIcon />
             </Avatar>
         <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            
            <TextField id="outlined-basic" label="Email" variant="outlined" sx={{margin:'12px' ,padding:'8px',width:'100%',boxSizing:'5px'}} />
            <TextField id="outlined-basic" label="Password" variant="outlined" sx={{margin:'12px',padding:'8px',width:'100%',boxSizing:'5px'}} />
            <Button variant="contained" sx={{width: '100%', padding:'8px',boxSizing:'5px'}}>Login</Button>
            <Grid item xs sx={{ mt: 5 }}>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
         </Box>
        </Grid>
      </Grid>
        </div>
        </>
    )
}
export default Login;