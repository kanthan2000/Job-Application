import { Button, Grid, TextField, Typography } from '@mui/material'
import React, { useState } from 'react';
import { Autocomplete } from '@mui/material';
import { Box } from '@mui/material';
import Stack from '@mui/material/Stack';
import { format } from "date-fns";
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';

const Professional = (props) => {

    const [startDate, setStartDate] = useState()
    const [endDate, setEndDate] = useState()

    const company = [
        { label :'Iconio Private Ltd'},
        { label :'Tigeen'},
        { label :'A Private Ltd'},
        { label :'Start Industries'},
        { label :'Tech Fetch'}
    ];

    

    return (
        <>
        <Box sx={{
                    marginTop: 5,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    mt: 3 ,
                    }} >
                
                
                
                            {props.id !== 0 ? <button onClick={() => props.onClick(props.id)}>X</button> : null}
            <Grid container spacing={2}>
            <Grid item xs={12}>
                <Autocomplete options={company}
                    disablePortal
                    id="combo-box-demo"
                    sx={{ width: 450 }}
                    renderInput={(params) => <TextField {...params} name="currentCompany" label="Company" />}
                />
            </Grid>
            <Grid item xs={12} >
                <TextField
                    sx={{width: 450}}
                    required
                    fullWidth
                    name="role"
                    label="Role"
                    type="text"
                    id="role"
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <Stack noValidate spacing={3}>
                    <TextField
                        id="fromDate"
                        label="From Date"
                        type="date"
                        onChange={(e) => setStartDate(e.target.value)}
                        format="yyyy-MM-dd"
                        sx={{ width: 220 }}
                        InputLabelProps={{
                        shrink: true,
                        }}
                        name="fromDate"
                    />
                </Stack>
            </Grid>
            <Grid item xs={12} sm={6}>
                <Stack  noValidate spacing={3}>
                    <TextField
                        id="endDate"
                        label="End Date"
                        type="date"
                        onChange={(e) => setEndDate(e.target.value)}
                        format="yyyy-MM-dd"
                        sx={{ width: 220 }}
                        InputLabelProps={{
                        shrink: true,
                        }}
                        name= "endDate"
                    />
                </Stack>
            </Grid>
        </Grid>
    </Box> 
</>)
}

export default Professional