import { Grid, TextField, Typography } from '@mui/material'
import React from 'react';
import ReactDOM from "react-dom";
import { Autocomplete } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import { Box } from '@mui/material';
import Stack from '@mui/material/Stack';
import { format } from "date-fns";
import { Component } from 'react'

export default class Professional1 extends Component {
    state = {
        sDate: "",
        endD: ""
      };
  render() {
    const { sDate } = this.state;
    return (
        <>
        <Box sx={{
                    marginTop: 5,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    mt: 3 ,
                    }} >
            <Typography sx={{color: "black"}} component="h1" variant="h5">
                Professional Details
            </Typography>
            <Grid container spacing={2}>
            <Grid item xs={12}>
                <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={company}
                sx={{ width: 450 }}
                renderInput={(params) => <TextField {...params} name="company" label="Company" />}
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
                        <Stack component="form" noValidate spacing={3}>
                         <label htmlFor="sDate">Start Date</label>
                            <input
                            type="date"
                            onChange={e => this.setState({ sDate: e.target.value })}
                            />
                        </Stack>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                        <Stack component="form" noValidate spacing={3}>
                            <React.Fragment>
                                <label htmlFor="sDate">End Date:</label>
                                <input
                                type="date"
                                min={format(sDate, "YYYY-MM-DD")}
                                onChange={e => this.setState({ endD: e.target.value })}
                                />
                            </React.Fragment>
    
                        </Stack>
                        </Grid>
                </Grid>
            </Box> 
            </>
    )
  }
}

const company = [
    { label :'Iconio Private Ltd'},
    { label :'Tigeen'},
    { label :'A Private Ltd'},
    { label :'Start Industries'},
    { label :'Tech Fetch'}
    

];
