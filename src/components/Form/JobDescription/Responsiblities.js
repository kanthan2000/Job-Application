import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';



export default function Responsiblities(props) {
  const [responseData ,setResponseData] = React.useState([])
	// console.log(props.id)
  const handleResponsiblities = (event) =>{
    console.log(responseData)
    setResponseData(event.target.value)
  }
  // let ResponsiblitiesArry = []
  // responseData.map((_,idx)=>{
  //   let data = {
  //     Respon : responseData[idx]
  //   }
  //   ResponsiblitiesArry.push(data)
  // })
  // console.log(ResponsiblitiesArry)
  return (
    <Box sx={{
        marginTop: 5,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
            mt: 3 ,
        }} >
        
			<Grid item xs={12}>
                 <TextField
                     onChange={handleResponsiblities}
                     sx={{ width: 450 }}
                    type="text"
                    id="responsiblities"
                    label="Responsiblities"
                    name="responsiblities"
                />
			</Grid>
			{props.id !== 0 ? <Button  onClick={() => props.onClick(props.id)} 
           variant="contained"
           sx={{ width : 300, mt: 3, mb: 2,userSelect:"none" }}>
             Click To Romove</Button> : null}
		</Box>
 
	);
}

