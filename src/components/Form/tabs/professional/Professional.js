import { Button, Grid, TextField, Typography } from '@mui/material'
import React, { useState } from 'react';
import { Autocomplete } from '@mui/material';
import { Box } from '@mui/material';
import Stack from '@mui/material/Stack';
import { format } from "date-fns";
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';

const Professional = (props) => {

    const [sDate, setSDate] = useState()
    const [endD, setEndD] = useState()

    const company = [
        { label :'Iconio Private Ltd'},
        { label :'Tigeen'},
        { label :'A Private Ltd'},
        { label :'Start Industries'},
        { label :'Tech Fetch'}
    ];

    const onRemoveHandler = () => {
        console.log("clicked", props.id)
        
    }

    return (
        <>
        <Box sx={{
                    marginTop: 5,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    mt: 3 ,
                    }} >
                <div style={{
                    display: "flex",
                    alignItems: "center"
                }}>
                    <Typography sx={{color: "black"}} component="h1" variant="h5">
                        Professional Details 
                    </Typography>
                    <Button onClick={onRemoveHandler}>
                        <CancelOutlinedIcon sx={{
                            position: "relative",
                            left: "110px"
                        }} />
                    </Button>
                </div>
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
                            <TextField
                                id="dob"
                                label="From Date"
                                type="date"
                                onChange={e => this.setState({ sDate: e.target.value })}
                                format="yyyy-MM-dd"
                                sx={{ width: 220 }}
                                InputLabelProps={{
                                shrink: true,
                                }}
                            />
    
                        </Stack>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                        <Stack component="form" noValidate spacing={3}>
                            <TextField
                                id="end"
                                label="End Date"
                                type="date"
                                onChange={e => this.setState({ endD: e.target.value })}
                                format="yyyy-MM-dd"
                                sx={{ width: 220 }}
                                InputLabelProps={{
                                shrink: true,
                                }}
                            />
                        </Stack>
                        </Grid>
                </Grid>
            </Box> 
        </>
    )
}

export default Professional