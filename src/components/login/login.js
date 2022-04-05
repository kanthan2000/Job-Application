import React, {useState} from 'react'
import Grid from '@mui/material/Grid';
import Spinner from '../Spinner/Spinner'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import axios from 'axios'

const Login = (props) => {

	const [load, setLoad] = useState(false)

	const onChangeUsername =(event) =>{
		setLoad(true)
		let url = "192.168.1.5"
		setTimeout(() => {
			setLoad(false)
		}, 700)
		axios.get(url).then(({data}) => {
			setLoad(false)
			console.log(data)
		})
		.catch((err) => {
			console.log(err)
		})
	}
    return(
        <>
        <Grid container spacing={2}>
			<Grid item xs={6} md={7} sx={{
				backgroundImage: 'url(https://source.unsplash.com/random)',
				backgroundRepeat: 'no-repeat',
				backgroundSize: 'cover',
				backgroundPosition: 'center',
				height:"100vh"
            }}
			/>
			<Grid item xs={6} md={4}>
				<Box sx={{
				my: 8,
                mx: 2,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                backgroundColor: 'white',
                boxShadow: '0px 4px 20px 0px',
                height:'80%',
                width:'100%'
            }}>
				{load && <Spinner />}
			<Avatar sx={{
					m: 1,
					bgcolor: 'secondary.main' 
					}}> 
					<LockOutlinedIcon />
			</Avatar>
			<Typography component="h1" variant="h5">
			0  Sign in
			</Typography>
			
			<TextField id="outlined-basic"  label="Username" variant="outlined" sx={{margin:'12px' ,padding:'8px',width:'100%',boxSizing:'5px'}} />
			<TextField id="outlined-basic" label="Password" variant="outlined" sx={{margin:'12px',padding:'8px',width:'100%',boxSizing:'5px'}} />
			<Button onClick={onChangeUsername} variant="contained" sx={{width: '100%', padding:'8px',boxSizing:'5px'}}>Login</Button>
			<Grid item xs sx={{ mt: 5 }}>
				<Link href="#" variant="body2">
				Forgot password?
				</Link>
			</Grid>
			</Box>
			</Grid>
	</Grid>
	</>
    )
}
export default Login;