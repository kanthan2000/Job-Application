	import React, { useState, useEffect, useContext } from 'react';
	import TextField from '@mui/material/TextField';
	import Autocomplete from '@mui/material/Autocomplete';
	import Grid from '@mui/material/Grid';
	import Box from '@mui/material/Box';
	import { Typography } from '@mui/material'
	import axios from 'axios'
	import { AppContext } from '../../../context';
    



	export default function Experience(props) {
	const [Data ,setData] = React.useState([])
	const {Username ,setUsername} = React.useContext(AppContext)
	useEffect(() => {
	// let host = process.env.REACT_HOST
	// let url = `${host}/dropDown/experience`
	let url = "http://localhost:8080/dropDown/employee"
	axios.get(url).then(({data}) => {
		setData(data)
	}).catch(err => {
		console.log(err)
	})
	}, [])
	const handleChangeName = (e)=>{
		setUsername(e.target.value)
	}

	const handleExperience = (e) =>{
	// setExperienceData(e.target.value)
	}

	return (
	<Box sx={{
		marginTop: 5,
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		}} >
		<Typography sx={{color: "black"}} component="h1" variant="h5">
				Name
		</Typography>
	<Grid item xs={12}>
		<select onChange={(e)=>handleChangeName(e)} defaultValue="Select" style={{width:"450px",height:"50px"}}>
		{Data.map(user => <option value={user.id}>{user.name}</option>)}
		</select>
	</Grid>
	</Box>
	);
	}






	// import * as React from 'react';
	// import Box from '@mui/material/Box';
	// import InputLabel from '@mui/material/InputLabel';
	// import MenuItem from '@mui/material/MenuItem';
	// import FormControl from '@mui/material/FormControl';
	// import Select from '@mui/material/Select';
	// import axios from 'axios';
	// import { useEffect } from 'react';

	// export default function BasicSelect() {
	//   const [age, setAge] = React.useState([]);
	//   const [UserData , setUserData] = React.useState([])



	//   const handleChange = (e) => {
	//     console.log(e.target.value, Date.now());
	//   };

	//   return (
	//     <Box sx={{ minWidth: 120 }}>
	//       <FormControl fullWidth>
	//         <InputLabel id="demo-simple-select-label">Age</InputLabel>
	//         <Select
	//           labelId="demo-simple-select-label"
	//           id="demo-simple-select"
	//           value={UserData}
	//           label="Age"
	//           onChange={(e)=>handleChange(e)}
	//         >
	//           { UserData.map((value,idx)=>{
	//              <MenuItem>{value.name}</MenuItem>
	//         })}
			
			
	//         </Select>
	//       </FormControl>
	//     </Box>
	//   );
	// }








	// // import React, { useState, useEffect, useContext } from 'react';
	// // import TextField from '@mui/material/TextField';
	// // import Autocomplete from '@mui/material/Autocomplete';
	// // import Grid from '@mui/material/Grid';
	// // import Box from '@mui/material/Box';
	// // import { Typography } from '@mui/material'
	// // import axios from 'axios'
	// // // import { AppContext } from '../../../context';

	// // export default function Experience() {

	// //   let [experience, setExperience] = useState("heelo")
	// //   // const{ExperienceData,setExperienceData} = useContext(AppContext)


	// //   const handleExperience = (e) =>{
	// //     console.log(e.target.value)
	// //   }

	// //   return (
	// //     <Box sx={{
	// //       marginTop: 5,
	// //       display: 'flex',
	// //       flexDirection: 'column',
	// //       alignItems: 'center',
	// //       }} >
	// //         <Typography sx={{color: "black"}} component="h1" variant="h5">
	// //                 Name
	// // 				</Typography>
	// //     <Grid item xs={12}>
	// //     <Autocomplete
	// //       disablePortal
	// //       id="combo-box-demo"
	// //       options={experience}
	// //       onSelect={(e)=>handleExperience(e)}
	// //       sx={{ width: 450 }}
	// //       renderInput={(params) => <TextField {...params} name="experience" label="Years" />}
	// //     />
	// //     </Grid>
	// //   </Box>
	// //   );
	// // }


	// // 
	// useEffect(() => {
	//   // let host = process.env.REACT_HOST
	//   // let url = `${host}/dropDown/experience`
	//   let url = "http://localhost:8080/dropDown/employee"
	//   axios.get(url).then(({data}) => {
	//     setUserData(data)
	//     // setExperience(data)


	//   }).catch(err => {
	//     console.log(err)
	//   })
	// }, [])