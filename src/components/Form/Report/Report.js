import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import React from "react";
import Navbar from "../../admin/Navbar/navbar";
const Report = () =>{
    return(
      <>
      <Navbar>
      <TableContainer>
        <Table sx={{ minWidth: 200 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>S.No</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Download</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableCell>1</TableCell>
            <TableCell>Hired</TableCell>
            <TableCell>
            <Button onClick={() => {window.location.href="http://localhost:8080/excel/candidate"}} variant="contained" color="success" >Excel</Button>
            </TableCell>
          </TableBody>
          <TableBody>
            <TableCell>2</TableCell>
            <TableCell>Employee</TableCell>
            <TableCell>
            <Button onClick={() => {window.location.href="http://localhost:8080/excel/employee"}} variant="contained" color="success">Excel</Button>
            </TableCell>
          </TableBody>
          <TableBody>
            <TableCell>3</TableCell>
            <TableCell>Panel</TableCell>
            <TableCell>
            <Button onClick={() => {window.location.href="http://localhost:8080/excel/panel"}} variant="contained" color="success">Excel</Button>
            </TableCell>
          </TableBody>
          <TableBody>
            <TableCell>4</TableCell>
            <TableCell>Client</TableCell>
            <TableCell>
            <Button onClick={() => {window.location.href="http://localhost:8080/excel/client"}} variant="contained" color="success">Excel</Button>
            </TableCell>
          </TableBody>
        </Table>
      </TableContainer>
      </Navbar>
      
      </>

    )
}
export default Report