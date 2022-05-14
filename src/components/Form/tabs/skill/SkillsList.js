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
    let url = "http://35.154.117.105:8080/dropDown/skill"
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
	const [skill, setSkill] = React.useState([]);
	const [names, setnames] = React.useState([]);

	const handleChange = (event) => {
		const {
		target: { value },
		} = event;
		setSkill(
		// On autofill we get a stringified value.
		typeof value === 'string' ? value.split(',') : value,
		);

		props.setSkill(
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
			Skills
		</Typography>
		<FormControl sx={{ m: 1, width: 450 }}>
        <InputLabel id="demo-multiple-name-label">Skill</InputLabel>
			<Select
			labelId="demo-multiple-name-label"
			id="demo-multiple-name"
			multiple
			value={skill}
			onChange={handleChange}
			
			input={<OutlinedInput label="Name" />}
			MenuProps={MenuProps}
			>
			{names.map((name) => (
				<MenuItem
				key={name}
				value={name}
				// onDragLeave={()=>console.log(name)}
				// onClick={()=>console.log(name)}
				style={getStyles(name, skill, theme)}
				>
				{name}
				</MenuItem>
			))}
			</Select>
		</FormControl>
	</Box>
);
}


