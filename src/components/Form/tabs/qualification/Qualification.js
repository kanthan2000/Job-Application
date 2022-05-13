import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

export default function Qualification(props) {
	console.log(props.id)
  return (
    <Box sx={{
		marginTop: 5,
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		}} >
       
		{props.id !== 0 ? <button onClick={() => props.onClick(props.id)}>X</button> : null}
			<Grid container spacing={2}>
				<Grid item xs={12}>
				<Autocomplete
				disablePortal
				id="combo-box-demo"
				options={colleges}
				sx={{ width: 450 }}
				renderInput={(params) => <TextField {...params} name="collegeName" label="Colleges" />}
				/>
				</Grid>
				<Grid item xs={12}>
				<Autocomplete
				disablePortal
				id="combo-box-demo"
				options={degree}
				sx={{ width: 450 }}
				renderInput={(params) => <TextField {...params} name="degree" label="Degree" />}
				/>
				</Grid>
			</Grid>
		</Box>
	);
}
const colleges = [
    { label: 'Aditanar College of Arts and Science' },
    { label: 'Kamaraj College' },
    { label: 'V.O. Chidambaram College' },
    { label: 'St. Xaviers College' }
];
const degree = [
    { label: 'B.Sc. Mathematics' },
    { label: 'B.Sc. Chemistry' },
    { label: 'B.Sc.- Physics' },
    { label: 'B.Sc.- Information Technology' }
];
