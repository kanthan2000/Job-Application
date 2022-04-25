	import * as React from 'react';
	import Navbar from '../../admin/Navbar/navbar.js'
	import axios from 'axios';
	import AppBar from '@mui/material/AppBar';
	import Box from '@mui/material/Box';
	import Toolbar from '@mui/material/Toolbar';
	import Button from '@mui/material/Button';
	import IconButton from '@mui/material/IconButton';
	
		
		import {
			DataGrid,
			GridToolbarContainer,
			GridToolbarFilterButton,
		} from '@mui/x-data-grid';

		function CustomToolbar() {
			return (
			<GridToolbarContainer>
				<GridToolbarFilterButton />
			</GridToolbarContainer>
			);
		}
		
		export default function ToolbarGrid() {
		const[Data ,setData] = React.useState(0)
			React.useEffect( ()=> {
				axios.get("http://localhost:8080/candidate").then(response=>{
			     console.log(response.data)
				 setData(response.data)
				}).catch((err)=>{
					console.log(err)
				})
			},[])
	// const { data } = useDemoData({
	// 	dataSet: 'Commodity',
	// 	rowLength: 100,
	// 	maxColumns: 6,
	// });
	const columns = [
		{ field: 'id', headerName: 'ID',width:200 },
		{ field: 'firstName', headerName: 'Name', width: 300 },
		{ field: 'job', headerName: 'Phone Number', width: 300 },
		{ field: 'email', headerName: 'Email', width: 300 }
		]
		const rows = [
		{ id: 1, title: 'Gourav', age: 12 },
		{ id: 2, title: 'Geek', age: 43 },
		{ id: 3, title: 'Pranav', age: 41 },
		];
	

	return (
		<>
		<Navbar>
		<Box sx={{ width: '100%', flexGrow: 3,marginTop:"3%"}}>
	<AppBar position="static">
		<Toolbar>
		<IconButton
			size="large"
			edge="start"
			color="inherit"
			aria-label="menu"
			sx={{ mr: 2 ,width:'200px'}}
		>
			Employee List
		</IconButton>
		
		<Button sx={{ position:'relative' ,mr: 'margin-right'}} variant="contained" color="success"  > Add+ </Button>
		
		</Toolbar>
	</AppBar>
	</Box>
		<div style={{ height: 500, width: '100%' }}>
		<DataGrid
			rows={Data}
			columns={columns}
			pageSize={10}
			components={{
			Toolbar: CustomToolbar,
			}}
		/>
		</div>
		</Navbar>
		</>
	);
	}



























// import * as React from 'react';
// import Paper from '@mui/material/Paper';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import Button from '@mui/material/Button';
// import IconButton from '@mui/material/IconButton';
// import { FormControl, InputLabel, MenuItem, Pagination, Select } from '@mui/material';

// import Navbar from '../../admin/Navbar/navbar';

// // import '../dashtable/Usertable.css'

// 	const columns = [
// 	{ 
// 		id: 'title', 
// 		label: 'Name', 
// 		minWidth: 100,
// 		align: 'center',
// 	},
// 	{ 
// 		id: 'email', 
// 		label: 'Email', 
// 		minWidth: 100,
// 		align: 'center',
// 	},
// 	{
// 	id: 'phno',
// 	label: 'Phone Number',
// 	minWidth: 100,
// 	align: 'center',
// 	},
// 	{
// 	id: 'job',
// 	label: 'Job',
// 	minWidth: 100,
// 	align: 'center',
// 	},
// 	];

// 	const data = [
// 	{
// 		id: "1",
// 		title: "Arun",
// 		email: "arun@mail.com",
// 		phone: "8394290",
// 		job: "React Dev"
// 	},
// 	{
// 		id: "2",
// 		title: "Thor",
// 		email: "thor@mail.com",
// 		phone: "8394290",
// 		job: "Backend Dev"
// 	},
// 	{
// 		id: "3",
// 		title: "kratus",
// 		email: "kratus@mail.com",
// 		phone: "8394290",
// 		job: "Kotlin Dev"
// 	},
// 	{
// 		id: "4",
// 		title: "Michel",
// 		email: "michel@mail.com",
// 		phone: "8394290",
// 		job: "Cyber Security"
// 	}
// ]

// 	export default function StickyHeadTable() {
// 		const [candidates, setCandidates] = React.useState([])
// 		const [count, setCount] = React.useState(0)
// 		const [rowsPerPage, setRowsPerPage] = React.useState(7);
// 		const [page, setPage] = React.useState(1);
// 		const [pages, setPages] = React.useState(0)
		
		
// 		React.useEffect(() => {
// 			axios.get("http://localhost:8080/candidateCount").then(({data}) => {
// 				let count = data.count
// 				let pages = Math.ceil(count / rowsPerPage)
// 				setPages(pages)
// 				setCount(data.count)
// 			}).catch(err => {
// 				console.log(err)
// 			})
// 		}, [])

// 		React.useEffect(() => {
// 			let url = `http://localhost:8080/candidate?size=7&page=1`
// 			axios.get(url).then(({data}) => {
// 				console.log("data", data)
// 				setCandidates(data)
// 			}).catch(err => {
// 				console.log(err)
// 			})
// 		}, [])

// 		const getUser = async (userId) => {
// 			return await axios.get(`http://localhost:8080/candidate?id=${userId}`)
// 		}

// 		const handleDetailClick = (userId) => {
// 			getUser(userId).then(user => {
// 				console.log(user)
// 			}).catch(err => {
// 				console.log(err)
// 			})
// 		}

// 		const handleUpdate = (userId) => {
// 			getUser(userId).then(user => {
// 			}).catch(err => {
// 				console.log(err)
// 			})
// 		}

// 	const handleChangePage = (currentPage) => {
// 		setPage(currentPage);
// 		let paramPage = currentPage - 1
// 		let url = `http://localhost:8080/candidate?size=${rowsPerPage}&page=${paramPage}`
// 		axios.get(url).then(({data}) => {
// 			console.log("data", data)
// 			setCandidates(data)
// 		}).catch(err => {
// 			console.log(err)
// 		})
// 	};

// 	return (
// 	<>
// 	<Navbar>
	// <Box sx={{ width: '90%', flexGrow: 3,margin:'1rem'}}>
	// <AppBar position="static">
	// 	<Toolbar>
	// 	<IconButton
	// 		size="large"
	// 		edge="start"
	// 		color="inherit"
	// 		aria-label="menu"
	// 		sx={{ mr: 2 ,width:'200px'}}
	// 	>
	// 		Employee List
	// 	</IconButton>
		
	// 	<Button sx={{ position:'relative' ,mr: 'margin-right'}} variant="contained" color="success"  > Add+ </Button>
		
	// 	</Toolbar>
	// </AppBar>
	// </Box>
// 	<Paper sx={{borderColor: 'primary.main' , width: '90%', overflow: 'hidden' }}>
// 		<TableContainer sx={{ maxHeight: 440 }}>
// 		<Table stickyHeader aria-label="sticky table">
// 			<TableHead>
// 			<TableRow>
// 				{columns.map((column) => (
// 				<TableCell
// 					key={column.id}
// 					align={column.align}
// 					style={{ minWidth: column.minWidth }}>
// 					{column.label}
// 				</TableCell>
// 				))}
// 			</TableRow>
// 			</TableHead>
// 			<TableBody>
// 				{
// 					candidates.map((candidate, idx) => {
// 						return <TableRow hover role="checkbox" tabIndex={-1} key={idx}>
// 							{
// 							Object.entries(candidate).map(([key, value], idx) => {
// 								if(key !== "id"){
// 									if(key === "skill"){
// 										let text = value.map(skill => " " + skill)
// 										return (
// 											<TableCell key={idx} align="center">
// 												{text}
// 											</TableCell>)
// 									}
// 									return (
// 									<TableCell key={idx} align="center">
// 										{value}
// 									</TableCell>)
// 								}
// 							})}
// 							<FormControl fullWidth>
// 								<InputLabel id="demo-simple-select-label">More</InputLabel>
// 								<Select
// 									labelId="demo-simple-select-label"
// 									id="demo-simple-select"
// 									label="Age" >
// 									<MenuItem onClick={() => handleDetailClick(candidate.id)}>Details</MenuItem>
// 									<MenuItem onClick={() => handleUpdate(candidate.id)}>Update</MenuItem>
// 									<MenuItem >Remove</MenuItem>
// 								</Select>
// 							</FormControl>
// 						</TableRow>
// 					})
// 				}

// 			{/* {rows
// 				.slice(page * rowsPerPage, (page + 1) * rowsPerPage)
// 				.map((row) => {
// 				return (
// 					<TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
// 					{candidates.map((candidate, column) => {
// 						const value = row[column.id];
// 						return (
// 						<TableCell key={column.id} align={column.align}>
// 							{value}
// 						</TableCell>
// 						);
// 					})}
// 					</TableRow>
// 				);
// 				})} */}
// 			</TableBody>
// 		</Table>
// 		</TableContainer>
// 		<Pagination onClick={(e) => handleChangePage(e.target.innerText)} count={pages} variant="outlined" shape="rounded" />
// 	</Paper>
// 	</Navbar>
// 	</>
// 	);
// 	}
