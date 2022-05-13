import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import { Box } from '@mui/system';
import { Typography } from '@mui/material';

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;


export default function CheckboxesTags() {
  let [qualifications, setQualifications] = useState([])

  useEffect(() => {
    let url = "http://192.168.5.40:8080/dropDown/qualification"
    axios.get(url).then(({data}) => {
      console.log(data)
      setQualifications(data.data)
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
							Eligiblity
							</Typography>
    <Autocomplete
      multiple
      id="checkboxes-tags-demo"
      options={qualifications}
      disableCloseOnSelect
      getOptionLabel={(option) => option}
      renderOption={(props, option, { selected }) => (
        <li {...props}>
          <Checkbox
            icon={icon}
            checkedIcon={checkedIcon}
            style={{ marginRight: 8 }}
            checked={selected}
          />
          {option}
        </li>
      )}
      style={{ width: 450 }}
      renderInput={(params) => (
        <TextField {...params} label="Qualification" placeholder="Qualification" />
      )}
    />
    </Box>
  );
}


