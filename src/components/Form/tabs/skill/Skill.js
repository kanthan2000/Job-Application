import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function ComboBox() {
  return (
    <Box sx={{
      marginTop: 5,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      }} >
        <Typography sx={{color: "black"}} component="h1" variant="h5">
							Skills
							</Typography>
    <Grid item xs={12}>
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={skill}
      sx={{ width: 450 }}
      renderInput={(params) => <TextField {...params} name="skill" label="Skill" />}
    />
    </Grid>
  </Box>
  );
}
const skill = [
    { label: 'C' },
    { label: 'C++' },
    { label: 'JAVA' },
    { label: 'REACT JS' },
    { label: 'REACT NATIVE' }
];

