import * as React from 'react';
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
      options={skill}
      disableCloseOnSelect
      getOptionLabel={(option) => option.title}
      renderOption={(props, option, { selected }) => (
        <li {...props}>
          <Checkbox
            icon={icon}
            checkedIcon={checkedIcon}
            style={{ marginRight: 8 }}
            checked={selected}
          />
          {option.title}
        </li>
      )}
      style={{ width: 450 }}
      renderInput={(params) => (
        <TextField {...params} label="Skills" placeholder="Qualification33" />
      )}
    />
    </Box>
  );
}


const skill = [
  { title: 'B.Sc. Mathematics'},
  { title: 'B.Sc. Chemistry'},
  { title: 'B.Sc.- Physics'},
  { title: 'B.Sc.- Information Technology'},
  { title: 'MSc'},
  { title: 'MCA'},
  { title: 'MBA'},
];
