import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Professional from './professional/Professional'
// import Professional from './professional/';
import axios from 'axios';
import Position from './position/Position';
import Resume from './resume/Resume';
import SkillsList from './skill/SkillsList';
import Qualification from './qualification/Qualification';
import { useLocation, useNavigate } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import { Formik, Form } from 'formik';

const theme = createTheme();

export default function SignUp() {

	let [error, setError] = React.useState(false)
	let [msg, setMsg] = React.useState("")

	let emailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
	let numberPattern = /[0-9]/


	function validate(value, pattern, msg){  
		if (!value) {
			setError(true)
			setMsg('Required')
		} else if (pattern.test(value)) {
			setError(true)
			setMsg(msg)
		}else{
			setError(false)
			setMsg('Valid field')
		}
	}
	

	const [professionalComponents, setProfessionalComponents] = React.useState([1])
	const [qualificationComponents, setQualificationComponents] = React.useState([1])
	const [qualification, setQualification] = React.useState([1])
	const [skill, setSkill] = React.useState([1])
	const location = useLocation()
	const history = useNavigate()
	

	const handleSubmit = (event) => {
	event.preventDefault();
	const form = new FormData(event.currentTarget);

	let formData = getFormData(form)
	
	console.log(formData)

	axios.post("http://192.168.0.179:8080/Candidate", formData)
		.then(({data},msg) => {
			console.log(data)
			history("/table")
		}).catch(err => {
			console.log(err)
		})
	};

	const getFormData = (form) => {
		let companyData = []
		let qualificationData = []

		let roles = form.getAll("role")
		let names = form.getAll("currentCompany")
		let from = form.getAll("fromDate")
		let to = form.getAll("endDate")

		let collegeNames = form.getAll("collegeName")
		let degrees = form.getAll("degree")

		roles.map((_, idx) => {
			let data = {
				role: roles[idx],
				name: names[idx],
				from: from[idx],

                to: to[idx]
			}
			companyData.push(data)
		})
		
		collegeNames.map((_, idx) => {
			let data = {
				collegeName: collegeNames[idx],
				degree: degrees[idx] 
			}
			qualificationData.push(data)
		})

		return {
			firstName: form.get("firstName"),
			lastName: form.get("lastName"),
			dob: form.get("dob"),
			email: form.get("email"),
			phone: form.get("phoneNumber"),
			address: {
					doorNo: form.get("doorNo"),
					street: form.get("street"),
					place: form.get("place"),
					pincode: form.get("pincode")
                    },
			company: companyData,
			qualification: qualificationData,
			job: form.get("job"),
			skill: form.getAll("skill") 
		}
	}

	const renderProfessionalForm = () => {
		setProfessionalComponents([...professionalComponents, 1])
	}
	const renderQualificationForm = () => {
		setQualificationComponents([...qualificationComponents, 1])
	}

	const removeProfessionalComponent = () => {
		
	}


	return (
	<ThemeProvider theme={theme}>
		<Container component="main" maxWidth="xs">
			<CssBaseline />
			<Formik
				initialValues={{
					username: '',
					email: '',
				}}
				onSubmit={values => {
					// same shape as initial values
					console.log(values);
				}}
				>
				{({ errors, touched, validateField, validateForm }) => (
					<Form>
					<Box sx={{
						marginTop: 8,
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						}}>
						<Typography sx={{color: "black"}} component="h1" variant="h5">
							Personal Information
						</Typography>
						<Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        autoComplete="given-name"
                                        name="firstName"
                                        required
                                        fullWidth
                                        id="firstName"
                                        label="First Name"
                                        Focused
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="lastName"
                                        label="Last Name"
                                        name="lastName"
                                        autoComplete="family-name"
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                <Stack component="form" noValidate spacing={3}>
                                    <TextField
                                        id="dob"
                                        label="Date Of Birth"
                                        type="date"
                                        format="yyyy-MM-dd"
                                        sx={{ width: 450 }}
                                        InputLabelProps={{
                                        shrink: true,
                                        }}
                                    />

                                </Stack>
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        onChange={(e) => validate(e.target.value, emailPattern, 'Invalid email address')}
                                        fullWidth
                                        
                                        type="email"
                                        id="email"
                                        label="Email Address"
                                        name="email"
                                        autoComplete="email"
                                    />
                                    {!error && <div>{msg}</div>}
                                </Grid>
							
                                <Grid item xs={12}>
                                    <TextField
                                    onChange={(e) => validate(e.target.value, numberPattern, 'Invalid Number')}
                                    required
                                    fullWidth
                                    name="phoneNumber"
                                    label="Phone Number"
                                    type="number"
                                    id="phonenumber"
                                    autoComplete="phone"
                                    />
                                </Grid>
                                <Grid item xs={21}>
                                    <TextField
                                        required
                                        fullWidth
                                        name="LinkedIn"
                                        label="LinkedIn"
                                        type="text"
                                        id="Linked"
                                        autoComplete="Linked"
                                    />
                                </Grid>
						    </Grid>
                                <Box sx={{
                                marginTop: 5,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                    mt: 3 ,
                                }} >
                                    <Typography sx={{color: "black"}} component="h1" variant="h5">
                                        Address Information
                                    </Typography>
                                        <Grid container spacing={2}>
                                            <Grid item xs={12} sm={6}>
                                                <TextField
                                                    required
                                                    fullWidth
                                                    name="DoorNo"
                                                    label="Door No"
                                                    type="number"
                                                    id="doorNo"
                                                    autoComplete="doorno"
                                                />
                                            </Grid>
                                            <Grid item xs={12} sm={6}>
                                                <TextField
                                                    required
                                                    fullWidth
                                                    name="street"
                                                    label="Street"
                                                    type="text"
                                                    id="street"
                                                    autoComplete="street"
                                                />
                                            </Grid>
                                            <Grid item xs={12} >
                                                <TextField
                                                    fullWidth
                                                    name="place"
                                                    label="Place"
                                                    type="text"
                                                    id="place"
                                                    autoComplete="place"
                                                />
                                            </Grid>
                                            <Grid item xs={12} >
                                                <TextField
                                                    fullWidth
                                                    name="pincode"
                                                    label="Pincode"
                                                    type="number"
                                                    id="pincode"
                                                    autoComplete="pincode"
                                                />
                                            </Grid>
						            	</Grid>
						        </Box>
                                <Box sx={{
                                    marginTop: 5,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    }} >
                                        {professionalComponents.map((value, idx) => <Professional id={idx}/>)}
                                <Button
                                    onClick={renderProfessionalForm}
                                    fullWidth
                                    variant="contained"
                                    sx={{ mt: 3, mb: 2,userSelect:"none" }}
                                    >Click to Add</Button>
                                    <Box sx={{
                                    marginTop: 5,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    mt: 3 ,
                                    }} >
                                    

                                            {qualificationComponents.map(value => <Qualification />)}
                                        <Button
                                        onClick={renderQualificationForm}
                                        fullWidth
                                        variant="contained"
                                        sx={{ mt: 3, mb: 2 }}
                                        >Click to Add</Button>
						             </Box>
					            </Box>
					                <SkillsList />
                                    <Position />
                                        <Box sx={{
                                            marginTop: 5,
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'center',
                                            mt: 3 ,
                                            }} >
                                            <Typography sx={{color: "black"}} component="h1" variant="h5">
                                                Resume 
                                            </Typography>
                                            <Resume />
                                        </Box>
                                        {/* <Box sx={{
                                            marginTop: 5,
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'center',
                                            mt: 3 ,
                                            }} >
                                                <TextField
                                                id="outlined-multiline-static"
                                                label="Description"
                                                multiline
                                                rows={2}
                                                />
                                        </Box> */}
                                            <Button
                                                type="submit"
                                                fullWidth
                                                variant="contained"
                                                sx={{ mt: 3, mb: 2 }} > Save </Button>
						</Box>
					</Box>
					</Form>
		)}
			</Formik>
		</Container>
	</ThemeProvider>
	);
}