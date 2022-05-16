import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Navbar from "../../admin/Navbar/navbar"
import Position from "../tabs/position/Position";
import Experience from './Experience';
import SkillsList from '../tabs/skill/SkillsList';
import Eligiblity from './Eligiblity'
import JobLocation from './JobLocation'
import { AppContext } from '../../../context';
import Spinner  from '../../Spinner/Spinner'
import axios from 'axios';
import Responsiblities from './Responsiblities';


let responseIdx = 0


const JobDescription = () => {
	const { positionData} = React.useContext(AppContext)
	const {ExperienceData} = React.useContext(AppContext)
	const [dropDown ,setdropDown] = React.useState([])
	const [Load , setLoad] = React.useState(false)
	let skillData = []

	const [responseComponents, setResponseComponents] = React.useState([responseIdx])
    
    const renderResponseForm= () => {
        console.log("clicked", responseIdx)
        responseIdx = responseIdx + 1
        console.log( responseComponents,  responseIdx)
		setResponseComponents([... responseComponents, ++ responseIdx])
	}
	
    const onRemoveResponseHandler = (id) => {
        console.log("clicked", id)

        let responses = responseComponents
        responses[id] = undefined
        console.log(responses)
        setResponseComponents([...responses])
    }

    const setSkill = (skill) => {
        skillData = skill
        console.log(skillData)
		console.log(ExperienceData)
		console.log(positionData)
		
    }
	// const position = (position) => {
	// 	console.log(position)
	// }
	React.useEffect(()=>{
	
		axios.get("http://35.154.117.105:8080/dropDown/skill").then(({data}) => {
			// console.log("data", data)
			console.log(data)
			setLoad(false)
		}).catch(err => {
			console.log(err)
		})
	},[])
    return(
        <>
		{Load && <Spinner />}
        <Navbar>
		<div style={{width:"100",height:"90vh",overflowY:"scroll"}}>
		<Container component="main" maxWidth='xs' >
        <CssBaseline />
					<Box sx={{
						marginTop: 8,
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
                        
						}}>
						
						<Box component="form" noValidate  sx={{ mt: 3 }}>
                        
						<Grid container spacing={2}>
                        
                            <Position/>
                            <Experience />
                            <SkillsList setSkill={setSkill} />
                            <Eligiblity />
                            <JobLocation  />
                            <Typography sx={{color: "black"}} component="h1" variant="h5">
							Salary
						</Typography>
						<Grid item xs={4} >
								<TextField
									autoComplete="given-name"
									name="firstName"
									required
									fullWidth
									id="firstName"
									label="From"
									focused
								/>
							</Grid>
							<Grid item xs={4}>
								<TextField
									required
									fullWidth
									id="lastName"
									label="To"
									name="lastName"
									autoComplete="family-name"
								/>
							</Grid>	
							</Grid >
							<Box sx={{
						marginTop: 8,
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
                        
						}}>
							<Typography sx={{color: "black"}} component="h1" variant="h5">
							Responsiblities
							</Typography>
                            {responseComponents.map((value, idx) =>  value !== undefined ?  <Responsiblities onClick={ onRemoveResponseHandler } id={idx} key={idx} /> : null)}
							</Box>
							<Grid container spacing={2}>
      							  <Grid item xs={12}>
										<Button
											onClick={renderResponseForm}
											fullWidth
											variant="contained"
											sx={{ mt: 3, mb: 2,userSelect:"none" }}
											>Click to Add</Button>
        						   </Grid>
							</Grid>
                        <Button
						type="submit"
						fullWidth
						variant="contained"
						sx={{ mt: 3, mb: 2 }} > Save </Button>    
						</Box>
						</Box>  
				
        </Container>
			</div>
        </Navbar>
        </>
    )
}
export default JobDescription