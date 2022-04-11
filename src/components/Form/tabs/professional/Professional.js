import { Grid, TextField, Typography } from '@mui/material'
import React from 'react';
import InputLabel from '@mui/material/InputLabel';



const Professional = (props) => {
return (
    <>
        <Typography sx={{color: "black"}} component="h1" variant="h5">
            Professional Details
        </Typography>
        <Grid container spacing={2}>
            <Grid item xs={12} >
                <TextField
                    required
                    fullWidth
                    name="currentCompany"
                    label="Current Company"
                    type="text"
                    id="currentcompany"
                />
            </Grid>
            <Grid item xs={12} >
                <TextField
                    required
                    fullWidth
                    name="role"
                    label="Role"
                    type="text"
                    id="role"
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <InputLabel   >
                    From Date
                </InputLabel>
            </Grid>
            <Grid item xs={12} sm={6}>
                <InputLabel   >
                    End Date
                </InputLabel>
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    required
                    fullWidth
                    name="fromDate"
                    type="date"
                    id="fromdate"
                />
            </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        fullWidth
                        name="endDate"
                        type="date"
                        id="enddate"
                    />
                </Grid>
            </Grid>    
        </>
    )
}

export default Professional
