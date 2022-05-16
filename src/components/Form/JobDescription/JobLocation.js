import { useTheme } from '@mui/material/styles';
import React, { useState, useEffect } from 'react';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import { Box } from '@mui/system';
import axios from 'axios';
import { FormControl, InputLabel, MenuItem, OutlinedInput, Select, Typography } from '@mui/material';

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;


export default function CheckboxesTags(props) {

	const ITEM_HEIGHT = 48;
	const ITEM_PADDING_TOP = 8;
	const MenuProps = {
	PaperProps: {
		style: {
		maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
		width: 250,
		},
	},
	};

  useEffect(() => {
    // let host = process.env.REACT_HOST
    // let url = `${host}/dropDown/skill`
    let url = "http://localhost:8080/dropDown/location"
    axios.get(url).then(({data}) => {
      console.log(data)
      setnames(data.data)
    }).catch(err => {
      console.log(err)
    })
  }, [])

	// const names = [
    // 'C',
    // 'C++',
    // 'Java',
    // 'React Js'
	// ];

	function getStyles(name, skill, theme) {
	return {
		fontWeight:
		skill.indexOf(name) === -1
			? theme.typography.fontWeightRegular
			: theme.typography.fontWeightMedium,
	};
	}

	const theme = useTheme();
	const [JobLocation, setJobLocation] = React.useState([]);
	const [names, setnames] = React.useState([]);

	const handleChange = (e) => {
		const {
		target: { value },
		} = e;
		setJobLocation(
		// On autofill we get a stringified value.
		typeof value === 'string' ? value.split(',') : value,
		);

		props.setJobLoction(
			// On autofill we get a stringified value.
			typeof value === 'string' ? value.split(',') : value,
			);
	}


	return (
	<Box sx={{
		marginTop: 5,
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		}} >
		<Typography sx={{color: "black"}} component="h1" variant="h5">
		JobLocation 
		</Typography>
		<FormControl sx={{ m: 1, width: 450 }}>
        <InputLabel id="demo-multiple-name-label">JobLocation</InputLabel>
			<Select
			labelId="demo-multiple-name-label"
			id="demo-multiple-name"
			multiple
			value={JobLocation}
			onChange={(e)=>handleChange(e)}
			
			input={<OutlinedInput label="Name" />}
			MenuProps={MenuProps}
			>
			{names.map((name) => (
				<MenuItem
				key={name}
				value={name}
				// onDragLeave={()=>console.log(name)}
				// onClick={()=>console.log(name)}
				style={getStyles(name, JobLocation, theme)}
				>
				{name}
				</MenuItem>
			))}
			</Select>
		</FormControl>
	</Box>
);
}



// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Checkbox from '@mui/material/Checkbox';
// import TextField from '@mui/material/TextField';
// import Autocomplete from '@mui/material/Autocomplete';
// import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
// import CheckBoxIcon from '@mui/icons-material/CheckBox';
// import { Box } from '@mui/system';
// import { Typography } from '@mui/material';

// const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
// const checkedIcon = <CheckBoxIcon fontSize="small" />;

// export default function CheckboxesTags() {
//   let [locations, setLocations] = useState([])

  
//   return (
//     <Box sx={{
//       marginTop: 5,
//       display: 'flex',
//       flexDirection: 'column',
//       alignItems: 'center',
//       }} >
//         <Typography sx={{color: "black"}} component="h1" variant="h5">
// 							Location
// 							</Typography>
//     <Autocomplete
//       multiple
//       id="checkboxes-tags-demo"
//       options={locations}
//       disableCloseOnSelect
//       getOptionLabel={(option) => option}
//       renderOption={(props, option, { selected }) => (
//         <li {...props}>
//           <Checkbox
//             icon={icon}
//             checkedIcon={checkedIcon}
//             style={{ marginRight: 8 }}
//             checked={selected}
//           />
//           {option}
//         </li>
//       )}
//       style={{ width: 450 }}
//       renderInput={(params) => (
//         <TextField {...params} label="Location" placeholder="Location" />
//       )}
//     />
//     </Box>
//   );
// }

// useEffect(() => {
//   // let host = process.env.REACT_HOST
//   // let url = `${host}/dropDown/location`
//   let url = "http://35.154.117.105:8080/dropDown/location"
//   axios.get(url).then(({data}) => {
//     console.log(data)
//     setLocations(data.data)
//   }).catch(err => {
//     console.log(err)
//   })
// }, [])