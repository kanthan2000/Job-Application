import React, { useState, useEffect, useContext } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material'
import axios from 'axios'
import { AppContext } from '../../../context';

export default function Experience() {

  let [experience, setExperience] = useState([])
  const{ExperienceData,setExperienceData} = useContext(AppContext)

  useEffect(() => {
    // let host = process.env.REACT_HOST
    // let url = `${host}/dropDown/experience`
    let url = "http://localhost:8080/dropDown/experience"
    axios.get(url).then(({data}) => {
      // console.log(data)
      setExperience(data.data)
      // console.log(data.data)
    }).catch(err => {
      console.log(err)
    })
  }, [])
  const handleExperience = (e) =>{
    setExperienceData(e.target.value)
  }

  return (
    <Box sx={{
      marginTop: 5,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      }} >
        <Typography sx={{color: "black"}} component="h1" variant="h5">
                Experience
				</Typography>
    <Grid item xs={12}>
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={experience}
      onSelect={(e)=>handleExperience(e)}
      sx={{ width: 450 }}
      renderInput={(params) => <TextField {...params} name="experience" label="Years" />}
    />
    </Grid>
  </Box>
  );
}
