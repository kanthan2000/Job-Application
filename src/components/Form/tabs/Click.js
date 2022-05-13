import { useState } from "react";
import { Autocomplete, TextField } from '@mui/material';

function AddRemoveInputField(){
    const [inputFields, setInputFields] = useState([{
        fullName:'',
    } ]);
 
    const addInputField = ()=>{
        setInputFields([...inputFields, {
            company:'',
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
                          const {colleges, degree, salary}= data;
                          return(
                            <div className="row my-3" key={index}>
                    <div className="col">
                    <div className="form-group">
                    <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options={colleges}
                    sx={{ width: 450 }}
                    renderInput={(params) => <TextField {...params} name="collegeName" label="Colleges" />}
                    />
                  <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options={degree}
                    sx={{ width: 450 }}
                    renderInput={(params) => <TextField {...params} name="degree" label="Degree" />}
                    />
                    </div>
                    </div>
                   
                    <div className="col">
                
                
                 {(inputFields.length!==1)? <button className="btn btn-outline-danger" onClick={removeInputFields}>x</button>:''}
                  
                 
                    </div>
                  </div>
                          )
                      })
                  }
     
                <div className="row">
                    <div className="col-sm-12">
                    <button className="btn btn-outline-success " onClick={addInputField}>Add New</button>
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