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
	const [username ,setusername] = useState("kanthan")
	const [password , setpassword] = useState("knjv")

    const onChangeUser =(event) =>{
		console.log(username)
		
	}
	const onChangepassword =(event) =>{
		
		console.log(password)
	}


	const onChangeUsername =(event) =>{
		
		// let data1 {
		// 	"username" : username,
		// 	"password" : password
		// }
		// console.log(data1)
		setLoad(true)
		let url = "http://192.168.1.100/"
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
				backgroundImage: 'url(https://images.unsplash.com/photo-1648137839668-f5b4c8a11c15?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY0OTkzMzQ1NA&ixlib=rb-1.2.1&q=80&w=1080)',
				backgroundRepeat: 'no-repeat',
				backgroundSize: 'cover',
				backgroundPosition: 'center',
				height:"100vh"
            }}
			/>
			<Grid item xs={6} md={4} >
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
			<Typography component="h1" variant="h5" sx={{color:"black"}}>
		    Sign in
			</Typography>
			
			<TextField id="outlined-basic"   label="Username" variant="outlined" sx={{margin:'12px' ,padding:'8px',width:'100%',boxSizing:'5px'}} />
			<TextField id="outlined-basic"    label="Password" variant="outlined" sx={{margin:'12px',padding:'8px',width:'100%',boxSizing:'5px'}} />
			<Button   variant="contained" sx={{width: '100%', padding:'8px',boxSizing:'5px'}}>Login</Button>
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