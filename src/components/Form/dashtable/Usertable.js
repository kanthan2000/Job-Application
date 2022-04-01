import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';

const columns = [
  { id: 'name', label: 'Name', minWidth: 170 },
  { id: 'email', label: 'Email', minWidth: 100 },
  {
    id: 'phno',
    label: 'Phone Number',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'address',
    label: 'Address',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
];

function createData(name, email, phno, address) {
  return { name, email, phno, address };
}

const rows = [
  createData('Hari prasath', 'rio@gmail.com', 9944847602,'chennai'),
  createData('Hari prasath', 'rio@gmail.com', 9944847602,'chennai'),
  createData('Hari prasath', 'rio@gmail.com', 9944847602,'chennai' ),
  createData('Hari prasath', 'rio@gmail.com', 9944847602,'chennai' ),
  createData('Hari prasath', 'rio@gmail.com', 9944847602,'chennai' ),
  createData('Hari prasath', 'rio@gmail.com', 9944847602,'chennai' ),
  createData('Hari prasath', 'rio@gmail.com', 9944847602,'chennai'),
  createData('Hari prasath', 'rio@gmail.com', 9944847602,'chennai'),
  createData('Hari prasath', 'rio@gmail.com', 9944847602,'chennai'),
  createData('Hari prasath', 'rio@gmail.com', 9944847602,'chennai'),
  createData('Hari prasath', 'rio@gmail.com', 9944847602,'chennai'),
  createData('Hari prasath', 'rio@gmail.com', 9944847602,'chennai'),
  createData('Hari prasath', 'rio@gmail.com', 9944847602,'chennai' ),
  createData('Hari prasath', 'rio@gmail.com', 9944847602,'chennai' ),
  createData('Hari prasath', 'rio@gmail.com', 9944847602,'chennai'),
];

export default function StickyHeadTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
<>
    <Box sx={{ width: '75%', flexGrow: 3}}>
    <AppBar position="static">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
            Employee List
        </IconButton>
        <Button sx={{ position:'relative' ,mr: 'margin-right'}} variant="contained" color="success"  > Add+ </Button>
      </Toolbar>
    </AppBar>
  </Box>
<Paper sx={{borderColor: 'primary.main' , width: '75%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
</Paper>
</>
  );
}
