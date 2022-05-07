import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material'

export default function Experience() {
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
      options={years}
      sx={{ width: 450 }}
      renderInput={(params) => <TextField {...params} name="years" label="Years" />}
    />
    </Grid>
  </Box>
  );
}
const years = [
    { label: '1 years' },
    { label: '2 years' },
    { label: '3 years' },
    { label: '4 years' },
    { label: '5 years' }
];