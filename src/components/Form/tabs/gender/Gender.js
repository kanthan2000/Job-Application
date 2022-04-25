import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import { Grid } from '@mui/material';
import  Box  from '@mui/system';

const genders = [
  {
    value: 'M',
    label: 'Male',
  },
  {
    value: 'F',
    label: 'Female',
  },
  {
    value: 'O',
    label: 'Other',
  },
];



export default function OutlinedTextFields() {
  const [gender, setGender] = React.useState("");

  const handleChange = event => {
    setGender(event.target.value);
  };

  return (
    <Box sx={{
      marginTop: 5,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      }} >
    <Grid item xs={12} sm={6}>
      <TextField
        id="outlined-select-gender"
        select
        label={gender=== "" ? "Gender": ""}
        value={gender}
        onChange={handleChange}
        InputLabelProps={{shrink: false}}
        SelectProps={{
        }}
        margin="normal"
        variant="outlined"
      >
        {genders.map(option => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
    </Grid>
  </Box>
  );
}