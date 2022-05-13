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
const JobDescription = () => {
    return(
        <>
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
                        
                            <Position />
                            <Experience />
                            <SkillsList />
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