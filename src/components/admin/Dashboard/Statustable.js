import { useContext } from "react";
import { AppContext } from "../../../context";
import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Navbar from "../Navbar/navbar";
import { Box } from "@mui/system";
import { AppBar, Button, IconButton, Toolbar, Typography } from "@mui/material";
import { useNavigate } from 'react-router-dom';

const columns = [
  {field:'firstName', headerName:'FirstName',width: '200' },
  {field:'lastName' , headerName:'LastName',width: '200'},
  {field:'email', headerName:'Email' , width: '200' },
  {field:'status',headerName:'Status'},
  {field: 'job',headerName:'Job'},
  {field: 'phone' , headerName:"Phone",width: '200'},
//   {
//     field: "Download",
//     headerName: "Download",
//     sortable: false,
//     width: 160,
//     renderCell: (param) => {
//     return (
//         <Button
//             sx={{
//                 width:'100px',
//                 backgroundColor:'green'
//             }}
//             // onClick={()=>{
//             //     let userId = param.row.id
//             //     onhandleView(userId)
//             //     console.log(userId)
                
//             // }}
//             variant="contained"
//             // startIcon={<PreviewIcon />}
//         >

//             Download
//         </Button>
//         );
//     }
//     }
];


export default function DataGridDemo() {
 const {statusData} = useContext(AppContext)
 const history = useNavigate()
//  console.log(statusData)
// const handleExcel = () =>{
//   window.location.reload("")
// }
  return (
    <>
    <Navbar>
    <Box sx={{ width: '80%', flexGrow: 3,marginTop:"3%"}}>
<AppBar position="static">
	<Toolbar>
	<IconButton
		size="large"
		edge="start"
		color="inherit"
		aria-label="menu"
		sx={{ mr: 2 ,width:'200px'}}

	>
	{statusData.map((value,idx)=>{
        // console.log(value.status)
        let title = new String(value.status)
      let name = title.toLocaleUpperCase()
      
    })}
     Status
	</IconButton>
	{/* <Button onClick={() => {window.location.href="http://localhost:8080/excel/candidate"}}
   sx={{ position:'relative' ,mr: 'margin-right'}} 
   variant="contained"
    color="success"  >
      Excel
  </Button> */}
	</Toolbar>
</AppBar>
</Box>
    <div style={{ height: 400, width: '80%' }}>
      <DataGrid
        rows={statusData}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
      />
    </div>
    </Navbar>
    </>
  );
}
