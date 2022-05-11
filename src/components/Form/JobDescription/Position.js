import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material'

export default function ComboBox() {
  let [position, setPosition] = useState([])

  useEffect(() => {
    let url = "http://192.168.5.40:8080/dropDown/position"
    axios.get(url).then(({data}) => {
      console.log(data)
      setPosition(data.data)
    }).catch(err => {
      console.log(err)
    })
  }, [])

  return (
    <Box sx={{
      marginTop: 5,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      }} >
        <Typography sx={{color: "black"}} component="h1" variant="h5">
					Position
				</Typography>
    <Grid item xs={12}>
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={position}
      sx={{ width: 450 }}
      renderInput={(params) => <TextField {...params} name="job" label="JOB" />}
    />
    </Grid>
  </Box>
  );
}

