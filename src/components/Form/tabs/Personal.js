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
import axios from 'axios';
import Position from './position/Position';
import Resume from './resume/Resume';
import Skill from '../tabs/skill/Skill';
const theme = createTheme();

export default function SignUp() {

	const [components, setComponents] = React.useState([1])
	const [skill, setSkill] = React.useState([1])

	const handleSubmit = (event) => {
	let dummy = {
		"firstName": "Thor",
		"lastName": "Odin",
		"email": "thor@mail.com",
		"phone": "6786689",
		"company": [
			{
				"roll": "strongest",
				"name": "Marvel",
				"from": "2022-04-06",
				"to": "2022-04-06"
			},
			{
				"roll": "ds",
				"name": "DC",
				"from": "2022-04-06",
				"to": "2022-04-05"
			}
		],
		"qualification": [
			{
				"collegeName": "Asgaurd",
				"degree": "BSC"
			}
		],
		"job": "Killing",
		"skill": [
			"tretre",
			"gfhtr"
		],
		"address": {
			"doorNo": "3/12",
			"steet": "dsds",
			"pincode": "78978",
			"place": "uugjkj"
		}
	}
	event.preventDefault();
	const form = new FormData(event.currentTarget);

	let formData = getFormData(form)

	axios.post("http://192.168.1.102:8080/candidate", formData)
		.then(({data}) => {
			console.log(data)
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
			email: form.get("email"),
			phone: form.get("phoneNumber"),
			company: companyData,
			qualification: qualificationData,
			job: form.get("job"),
			skill: form.getAll("skill") 
		}
	}

	const renderProfessionalForm = () => {
		setComponents([...components, 1])
	}

	const renderSkillForm = () => {
		setSkill([...skill, 1])
	}



	return (
	<ThemeProvider theme={theme}>
		<Container component="main" maxWidth="xs">
			<CssBaseline />
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
					<Grid item xs={12}>
						<TextField
							required
							fullWidth
							id="email"
							label="Email Address"
							name="email"
							autoComplete="email"
						/>
					</Grid>
					
					<Grid item xs={12}>
						<TextField
							required
							fullWidth
							name="phoneNumber"
							label="Phone Number"
							type="text"
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
								name="Doorno"
								label="Door No"
								type="text"
								id="doorno"
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
					</Grid>
				</Box>
				<Box sx={{
					marginTop: 5,
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					}} >
					{components.map(value => <Professional />)}
					<Button
						onClick={renderProfessionalForm}
						fullWidth
						variant="contained"
						sx={{ mt: 3, mb: 2 }}
						>Click to Add</Button>
						<Box sx={{
						marginTop: 5,
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						mt: 3 ,
						}} >
							<Typography sx={{color: "black"}} component="h1" variant="h5">
							Education Details
							</Typography>
					<Grid container spacing={2}>
						<Grid item xs={12} >
							<TextField
								required
								fullWidth
								name="collegeName"
								label="College Name"
								type="text"
								id="collegeName"
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								required
								fullWidth
								name="degree"
								label="Degree"
								type="text"
								id="degree"
							/>
						</Grid>
					</Grid>
				</Box>
			</Box>
					{skill.map(value => <Skill />)}
					<Button
						onClick={renderSkillForm}
						fullWidth
						variant="contained"
						sx={{ mt: 3, mb: 4 }}
						>Click to Add</Button>
			<Box sx={{
				marginTop: 5,
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				mt: 3 ,
				}} >
				<Typography sx={{color: "black"}} component="h1" variant="h5">
					Position
				</Typography>
				<Position />
			</Box>
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
			<Button
				type="submit"
				fullWidth
				variant="contained"
				sx={{ mt: 3, mb: 2 }} > Save </Button>
				</Box>
			</Box>
		</Container>
	</ThemeProvider>
	);
}