import Navbar from "../../admin/Navbar/navbar"
import { Container } from "@mui/material"
import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Roll from './Roll'

const Panel = () => {
	const [FirstName , setFirstName] = React.useState()
	const [LastName , setLastName] = React.useState()
	const [UserName , setUserName] = React.useState()
	const [Password , setPassword] = React.useState()
	const [Email , setEmail] = React.useState()
	const [PhoneNumber , setPhoneNumber] = React.useState()

	const onhandlefirstName = (e) =>{
		console.log(e.target.value)
	}
	const onhandleLastName = (e) =>{
		console.log(e.target.value)
	}
	const onhandleUsername =  (e) =>{
		console.log(e.target.value)
	}
	const onhandlePassword =  (e) =>{
		console.log(e.target.value)
	}
	const onhandleEmail =  (e) =>{
		console.log(e.target.value)
	}
	const onhandlePhoneNumber =  (e) =>{
		console.log(e.target.value)
	}
	
	// const onChangePanel = (event) => {
	// 	let data = {
	// 		"firstName" :  FirstName,
	// 		"lastName" :   LastName,
	// 		"userName" :   UserName,
	// 		"password" :   Password,
	// 		"phone" :      PhoneNumber  

	// 	}
	// 	console.log(data)
	// }


    return(
        <>
        <Navbar>
        <Container component="main" maxWidth='xs' > 
        
        <Box sx={{
						marginTop: 8,
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
                        
						}}>
						<Typography sx={{color: "black"}} component="h1" variant="h5">
                       Panel Information
						</Typography> 
						<Box component="form" noValidate  sx={{ mt: 3 }}>
						<Grid container spacing={2}>
                         
						<Grid item xs={6} >
								<TextField
									autoComplete="given-name"
									name="firstName"
									required
									fullWidth
									id="firstName"
									label="FirstName"
									Focused
									onChange={onhandlefirstName}
								/>
							</Grid>
							<Grid item xs={6}>
								<TextField
									required
									fullWidth
									id="lastName"
									label="LastName"
									name="lastName"
									autoComplete="family-name"
									onChange={onhandleLastName}
								/>
							</Grid>
                            <Grid item xs={12} >
								<TextField
									autoComplete="given-name"
									name="username"
									required
									fullWidth
									id="username"
									label="Username"
									Focused
									onChange={onhandleUsername}
								/>
							</Grid>
                            <Grid item xs={12} >
								<TextField
									autoComplete="given-name"
									name="password"
									required
									fullWidth
									id="password"
									label="Password"
									Focused
									onChange={onhandlePassword}
								/>
							</Grid>
                            <Grid item xs={12} >
								<TextField
									autoComplete="given-name"
									name="email"
									required
									fullWidth
									id="email"
									label="Email"
									Focused
									onChange={onhandleEmail}
								/>
							</Grid>
                            <Grid item xs={12} >
								<TextField
									autoComplete="given-name"
									name="phonenumber"
									required
									fullWidth
									id="phonenumber"
									label="Phone Number"
									Focused
									onChange={onhandlePhoneNumber}
								/>
							</Grid>
                           <Roll />
                        </Grid>
                        <Button
						type="submit"
						fullWidth
						// onClick={onChangePanel}
						variant="contained"
						sx={{ mt: 3, mb: 2 }} > Save </Button>    
                      </Box>
                     </Box>  
        </Container>
        </Navbar>
        </>
    )
}
export default Panel



		// const handleSubmit = (event) => {
	// 	event.preventDefault();
	// 	const form = new FormData(event.currentTarget);
	// 	let formData = getFormData(form)
	// 	console.log(formData)
	// }
	// const getFormData = (form) => {
	// 	let firstName = form.get("firstName")
	//     let  lastName =form.get("lastName")
	//     let username =form.get("username")
	//     let password = from.get("password")
	//     let email = from.get("email")
	// 	let phonenumber= from.get("phonenumber")
		
	// }