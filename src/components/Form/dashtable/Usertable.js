import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { FormControl, InputLabel, MenuItem, Pagination, Select } from '@mui/material';
import axios from 'axios';
// import '../dashtable/Usertable.css'

	const columns = [
	{ 
		id: 'name', 
		label: 'Name', 
		minWidth: 100,
		align: 'center',
	},
	{ 
		id: 'email', 
		label: 'Email', 
		minWidth: 100,
		align: 'center',
	},
	{
	id: 'phno',
	label: 'Phone Number',
	minWidth: 100,
	align: 'center',
	},
	{
	id: 'job',
	label: 'Job',
	minWidth: 100,
	align: 'center',
	},
	];

	const data = [
	{
		id: "1",
		name: "Arun",
		email: "arun@mail.com",
		phone: "8394290",
		job: "React Dev"
	},
	{
		id: "2",
		name: "Thor",
		email: "thor@mail.com",
		phone: "8394290",
		job: "Backend Dev"
	},
	{
		id: "3",
		name: "kratus",
		email: "kratus@mail.com",
		phone: "8394290",
		job: "Kotlin Dev"
	},
	{
		id: "4",
		name: "Michel",
		email: "michel@mail.com",
		phone: "8394290",
		job: "Cyber Security"
	}
]

	export default function StickyHeadTable() {
		const [candidates, setCandidates] = React.useState([])
		const [count, setCount] = React.useState(0)
		const [rowsPerPage, setRowsPerPage] = React.useState(7);
		const [page, setPage] = React.useState(1);
		const [pages, setPages] = React.useState(0)
		

		React.useEffect(() => {
			axios.get("http://192.168.1.103:8080/candidateCount").then(({data}) => {
				let count = data.count
				let pages = Math.ceil(count / rowsPerPage)
				setPages(pages)
				setCount(data.count)
			}).catch(err => {
				console.log(err)
			})
		}, [])

	const handleChangePage = (currentPage) => {
		setPage(currentPage);
		let paramPage = currentPage - 1
		let url = `http://192.168.1.103:8080/candidate?size=${rowsPerPage}&page=${paramPage}`
		axios.get(url).then(({data}) => {
			console.log("data", data)
			setCandidates(data)
		}).catch(err => {
			console.log(err)
		})
	};

	return (
	<>
	<Box sx={{ width: '90%', flexGrow: 3,margin:'1rem'}}>
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
	<Paper sx={{borderColor: 'primary.main' , width: '90%', overflow: 'hidden' }}>
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
				{
					data.map((candidate, idx) => {
						return <TableRow hover role="checkbox" tabIndex={-1} key={idx}>
							{
							Object.entries(candidate).map(([key, value], idx) => {
								if(key !== "id"){
									return (
									<TableCell key={idx} align="center">
										{value}
									</TableCell>)
								}
							})}
							<FormControl fullWidth>
								<InputLabel id="demo-simple-select-label">More</InputLabel>
								<Select
									labelId="demo-simple-select-label"
									id="demo-simple-select"
									label="Age" >
									<MenuItem>Details</MenuItem>
									<MenuItem>Update</MenuItem>
									<MenuItem>Remove</MenuItem>
								</Select>
							</FormControl>
						</TableRow>
					})
				}

			{/* {rows
				.slice(page * rowsPerPage, (page + 1) * rowsPerPage)
				.map((row) => {
				return (
					<TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
					{candidates.map((candidate, column) => {
						const value = row[column.id];
						return (
						<TableCell key={column.id} align={column.align}>
							{value}
						</TableCell>
						);
					})}
					</TableRow>
				);
				})} */}
			</TableBody>
		</Table>
		</TableContainer>
		<Pagination onClick={(e) => handleChangePage(e.target.innerText)} count={pages} variant="outlined" shape="rounded" />
	</Paper>
	</>
	);
	}
