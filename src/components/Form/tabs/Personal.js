import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { createTheme, } from '@mui/material/styles';
import Professional from './professional/Professional'
import axios from 'axios';
import Position from './position/Position';
import Resume from './resume/Resume';
import SkillsList from './skill/SkillsList';
import Qualification from './qualification/Qualification';
import { useLocation, useNavigate } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import { Formik, Form } from 'formik';

const theme = createTheme();
let professionalIdx = 0
let qualificationIdx = 0


export default function Personal(props) {

	let [error, setError] = React.useState(false)
	let [msg, setMsg] = React.useState("")

	let emailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
	let numberPattern = /@"^[0-9]{10}$"/;

    const [professionalComponents, setProfessionalComponents] = React.useState([professionalIdx])
	const [qualificationComponents, setQualificationComponents] = React.useState([qualificationIdx])
	const location = useLocation()
	const history = useNavigate()


	function validate(value, pattern, msg){  
		if (!value) {
			setError(true)
			setMsg('Required')
		} else if (pattern.test(value)) {
			setError(true)
			setMsg(msg)
		}else{
			setError(false)
			setMsg('Please Enter The Valid Field')
		}
	}
	
    const onclickSave = () => {
    }
	const handleSubmit = (event) => {
	event.preventDefault();
	const form = new FormData(event.currentTarget);
    console.log("form", form)
	let formData = getFormData(form)
	console.log(formData)
	axios.post("http://35.154.117.105:8080/candidate", formData)
		.then(({data}, msg) => {
			console.log(data)
			history("/table")
		}).catch(err => {
			console.log(err)
		})
	}
    let skills = []

    const setSkill = (skill) => {
        skills = skill
    }

	const getFormData = (form) => {
		let companyData = []
		let qualificationData = []
		let roles = form.getAll("roll")
		let names = form.getAll("currentCompany")
		let from = form.getAll("fromDate")
		let to = form.getAll("endDate")
		let collegeNames = form.getAll("collegeName")
		let degrees = form.getAll("degree")
        let job = form.get("job")
        let skills = form.getAll("skill")

		roles.map((_, idx) => {
			let data = {
				roll: roles[idx],
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

        console.log(companyData, qualificationData, roles, names, from, to, collegeNames, degrees, job. skills)
		return {
			firstName: form.get("firstName"),
			lastName: form.get("lastName"),
			dob: form.get("dob"),
			email: form.get("email"),
			phone: form.get("phoneNumber"),
            linkedIn: form.get("linkedIn"),
			address: {
					doorNo: form.get("doorNo"),
					street: form.get("street"),
					place: form.get("place"),
					pincode: form.get("pincode")
                    },
			company: companyData,
			qualification: qualificationData,
			job: form.get("job"),
			skill: form.getAll("hello") 
		}
	}

	const renderProfessionalForm = () => {
        console.log("clicked", professionalIdx)
        professionalIdx =professionalIdx + 1
        console.log(professionalComponents, professionalIdx)
		setProfessionalComponents([...professionalComponents, ++professionalIdx])
	}
	const renderQualificationForm = () => {
        console.log("clicked", qualificationIdx)
        qualificationIdx = qualificationIdx + 1
        console.log(qualificationComponents, qualificationIdx)
		setQualificationComponents([...qualificationComponents, ++qualificationIdx])
	}

    const onRemoveQualificationHandler = (id) => {
        console.log("clicked", id)

        let qualifications = qualificationComponents
        qualifications[id] = undefined
        console.log(qualifications)
        setQualificationComponents([...qualifications])
    }
    const onRemoveProfessionalHandler = (id) => {
        console.log("clicked", id)
        let professional = professionalComponents
        professional[id] = undefined
        console.log(professional)
        setProfessionalComponents([...professional])
    }



	return (
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
                <>
					<Box sx={{
						marginTop: 8,
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						}}>
						<p style={{color: "black", fontSize: "1.5rem"}}>
							Personal Information
						</p>
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
                                    <Stack noValidate spacing={3}>
                                        <TextField
                                            id="dob"
                                            label="Date Of Birth"
                                            type="date"
                                            format="yyyy-MM-dd"
                                            sx={{ width: 450 }}
                                            InputLabelProps={{
                                            shrink: true,
                                            }}
                                            name='dob'
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
                                        id="LinkedIn"
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
                                <p style={{color: "black", fontSize: "1.5rem"}}>
                                    Address Information
                                </p>
                                <Grid container spacing={2}>
                                    <Grid item xs={12} sm={6}>
                                        <TextField required
                                            fullWidth
                                            name="doorNo"
                                            label="Door No"
                                            type="number"
                                            id="doorNo"
                                            autoComplete="doorno" />
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
                                        <p style={{color: "black", fontSize: "1.5rem"}} >
                                            Professional Details
                                         </p>
                                       {professionalComponents.map((value, idx) =>  value !== undefined ? <Professional onClick={onRemoveProfessionalHandler} id={idx} key={idx} /> : null)}
                                    <Grid container spacing={2}>
                                    <Grid item xs={12}>
                                        <Button
                                            onClick={renderProfessionalForm}
                                            fullWidth
                                            variant="contained"
                                            sx={{ mt: 3, mb: 2,userSelect:"none" }}
                                            >Click to Add</Button>
                                    </Grid>
                                        </Grid>
                                        <Box sx={{
                                        marginTop: 5,
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        mt: 3 ,
                                        }}>
                                             
                                        <p style={{color: "black", fontSize: "1.5rem"}} >
                                            Education Details
                                        </p>

                                {qualificationComponents.map((value, idx) =>  value !== undefined ? <Qualification onClick={onRemoveQualificationHandler} id={idx} key={idx} /> : null)}
                                <Grid container spacing={2}>
                                    <Grid item xs={12} >
                                        <Button
                                            onClick={renderQualificationForm}
                                            fullWidth
                                            variant="contained"
                                            sx={{ mt: 3, mb: 2,userSelect:"none" }}
                                            >Click to Add</Button>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Box>
                        <SkillsList setSkill={setSkill} />
                        <Position />
                        <Box sx={{
                            marginTop: 5,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            mt: 3 ,
                            }} >
                            <p style={{color: "black", fontSize: "1.5rem"}} >
                                Resume 
                            </p>
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
                                    sx={{ width: 450 }}
                                    label="Description"
                                    multiline
                                    rows={2}
                                    />
                            </Box> */}
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            onClick={onclickSave}
                            sx={{ mt: 3, mb: 2 }} > Save </Button>
						</Box>
					</Box>
                </>
		)}
			</Formik>
		</Container>
	// </ThemeProvider>
	);
}