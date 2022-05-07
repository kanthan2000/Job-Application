import React, {useState} from 'react'
import Grid from '@mui/material/Grid';
import Spinner from '../Spinner/Spinner'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import { LockOutlined } from '@mui/icons-material';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { Autocomplete } from '@mui/material';

const role = [
	{ label :'admin'},
	{ label :'hr'},
	{ label :'employee'},
	{ label :'panel'},
];

const Login = (props) => {
    const [Role , setRole] = useState([])
	const [load, setLoad] = useState(false)
	const [username ,setusername] = useState("")
	const [password , setpassword] = useState("")
    const history = useNavigate()
	    const onhandleRoll = (e) =>{
			setRole(e.target.value)
		
			
		}
		const onChangeUser =(event) =>{
			console.log(event.target.value)
			setusername(event.target.value)
			
		}
		const onChangepassword =(event) =>{
			console.log(event.target.value)
			setpassword(event.target.value)
		}
		const onChangeUsername =(event) =>{	
			setLoad(true)
			let data = {
				"userName" : username,
				"password" : password,
				"position" : Role
			}
			console.log(data)
			axios.put("http://localhost:8080/login",data).then(response=>{
				
				const { data, status } = response;
				// console.log(data)
				if(data.msg === "admin"){
					history("/home")
				}
				if(data.msg === "employee"){
					// history("/home")
					alert("employee")
				}
			}).catch(({response}) => {
				alert(response.data.msg)
				setLoad(false)
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
					<LockOutlined />
			</Avatar>
				<Typography component="h1" variant="h5" sx={{color:"black"}}>
				Sign in
				</Typography>
			<TextField 
				id="outlined-basic"
				onChange={onChangeUser}  
				label="Username"
				variant="outlined" 
				sx={{margin:'12px' ,
				padding:'8px',
				width:'100%',
				boxSizing:'5px'}} />
				<TextField 
				id="outlined-basic" 
				onChange={onChangepassword}  
				label="Password" variant="outlined"
				sx={{margin:'12px',
				padding:'8px',
				width:'100%',
				boxSizing:'5px'}} />
                <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={role}
				// value={setRole}
				onSelect={(e)=>onhandleRoll(e)}
                sx={{ width: 425 }}
                renderInput={(params) => <TextField {...params} name="role" label="role" />}
                />
				<Button
				
				onClick={onChangeUsername}   
				variant="contained"
				sx={{width: 425,
				padding:'8px',
				boxSizing:'5px',
				margin:'10px'}}>
					Login
					</Button>
			<Grid item xs sx={{ mt: 5 }}>
			</Grid>
			</Box>
			</Grid>
	</Grid>
	</>
    )
}

export default Login;