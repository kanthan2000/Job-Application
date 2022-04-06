import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Grid from '@mui/material/Grid';

export default function ComboBox() {
  return (
    <Grid item xs={12}>
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={jobPosition}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Position" />}
    />
    </Grid>
  );
}
const jobPosition = [
    { label: 'API' },
    { label: 'REACT' },
    { label: 'AWS' },
    { label: 'REACT NATIVE' },
];
