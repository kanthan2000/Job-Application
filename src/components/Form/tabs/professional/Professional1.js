import React, { useState } from 'react';
import { Autocomplete, TextField } from '@mui/material';
import { Grid } from '@mui/material';
import { Box } from '@mui/material';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const company = [
    { label :'Iconio Private Ltd'},
    { label :'Tigeen'},
    { label :'A Private Ltd'},
    { label :'Start Industries'},
    { label :'Tech Fetch'}
];

function AddRemoveInputField(){
    const [inputFields, setInputFields] = useState([{
        fullName:'',
    } ]);
 
    const addInputField = ()=>{
        setInputFields([...inputFields, {
            fullName:'',
        } ])
      
    }
    const removeInputFields = (index)=>{
        const rows = [...inputFields];
        rows.splice(index, 1);
        setInputFields(rows);
   }
   const handleChange = (index, evnt)=>{
    
    const { name, value } = evnt.target;
    const list = [...inputFields];
    list[index][name] = value;
    setInputFields(list);
    
 
 
}
    return(
    
        <div className="container">
            <div className="row">
                <div className="col-sm-8">
                  {
                      inputFields.map((data, index)=>{
                          const {company,role,fromDate,endDate}= data;
                          return(
                            <div className="row my-3" key={index}>
                    <div className="col">
                    <div className="form-group">
                                    <Box sx={{
                                    marginTop: 5,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    mt: 3 ,
                                    }} >
                                
                                <p style={{color: "black", fontSize: "1.5rem"}} >
                                            Professional Details
                                            </p>
                                
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
                                        // onChange={(e) => setStartDate(e.target.value)}
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
                                        // onChange={(e) => setEndDate(e.target.value)}
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
                    </div>
                    </div>
                   
                    <div className="col">
                
                
                 {(inputFields.length!==1)? <button className="btn btn-outline-danger" onClick={removeInputFields}>Remove</button>:''}
                  
                 
                    </div>
                  </div>
                          )
                      })
                  }
     
                <div className="row">
                    <div className="col-sm-12">
                    <Grid item xs={12}>
                                        <Button
                                            onClick={addInputField}
                                            fullWidth
                                            variant="contained"
                                            sx={{ mt: 3, mb: 2,userSelect:"none" }}
                                            >Click to Add</Button>
                    </Grid>
                    </div>
                </div>
                  </div>
                </div>
                <div className="col-sm-4">
                </div>
            </div>
        
    )
}
export default AddRemoveInputField