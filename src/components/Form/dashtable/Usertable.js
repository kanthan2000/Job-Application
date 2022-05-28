import * as React from 'react';
import { useContext } from 'react';
import Navbar from '../../admin/Navbar/navbar.js'
import axios from 'axios';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Pagination from '@mui/material/Pagination'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import PreviewIcon from '@mui/icons-material/Preview';
import { useNavigate } from 'react-router-dom';
import {AppContext} from '../../../context'
import {DataGrid,GridToolbarContainer,GridToolbarFilterButton,} from '@mui/x-data-grid';
import Spinner from '../../Spinner/Spinner.js';
	function CustomToolbar() {
		return (
		<GridToolbarContainer>
			<GridToolbarFilterButton sx={{fontSize:"120%",marginInline:'3%'}}/>
		</GridToolbarContainer>
		);
	}
	export default function ToolbarGrid() {
	const{viewData,setViewData} = useContext(AppContext)
	const [Data ,setData] = React.useState(0)
	const [candidates, setCandidates] = React.useState([])
	const [count, setCount] = React.useState(0)
	const [rowsPerPage, setRowsPerPage] = React.useState(7);
	const [page, setPage] = React.useState(1);
	const [pages, setPages] = React.useState(0)
	const [view , setview] = React.useState()
	const [load, setLoad] = React.useState(false)
	const history = useNavigate()
		
	React.useEffect( ()=> {
			handleChangePage(1)
			axios.get("http://localhost:8080/candidate").then(response=>{
			console.log(response)
			// response.data.map(user => console.log(user.id))
			setData(response.data)
			}).catch((err)=>{
				console.log(err)
			})
		},[])
		React.useEffect(() => {
			axios.get("http://localhost:8080/candidateCount").then(({data}) => {
				let count = data.count
				let pages = Math.ceil(count / rowsPerPage)
				setPages(pages)
				setCount(data.count)
			}).catch(err => {
				console.log(err)
			})
		}, [])

	const loadUsers = (url) => {
		axios.get(url).then(({data}) => {
			// console.log("data", data)
			setCandidates(data)
			setLoad(false)
		}).catch(err => {
			console.log(err)
		})
	}

	const handleChangePage = (currentPage) => {
		setLoad(true)
		setPage(currentPage);
		let paramPage = currentPage - 1
		let url = `http://localhost:8080/candidate?size=${rowsPerPage}&page=${paramPage}`
		loadUsers(url)
	};
	const getUser = async (userId) => {
		return await axios.get(`http://localhost:8080/candidate/${userId}`)
	}

	const onhandleView = (userId)=>{
		setLoad(true)
			getUser(userId).then(user => {
				setViewData(user.data)
				setLoad(false)
				history("/view")		 
			} )
			
	}
	const onhandleDelete = async (userId)=>{
		console.log(userId)
		setLoad(true)
		let user = await axios.delete(`http://localhost:8080/candidate/${userId}`)
		console.log(user, candidates)
		let url = `http://localhost:8080/candidate?size=${rowsPerPage}&page=${0}`
		loadUsers(url)
	}
	const onhandleEdit = (userId)=>{
		setLoad(true)
		getUser(userId).then(user => {
			setViewData(user.data)
			setLoad(false)
			history("/update")		 
		} )
	}

	const onhandleAdd = ()=>{
		history("/navtab")
	}
const columns = [
	{ field: 'firstName', headerName: 'Name' },
	{ field: 'job', headerName: 'Job' },
	{ field: 'phone', headerName: 'Phone Number',width:200 },
	{
		field: "edit",
		headerName: "Edit",
		sortable: false,
		width: 130,
		renderCell: (param) => {
			return (
				<Button 
				sx={{
					width:'100px'
				}}
				onClick={()=>{
					let userId = param.row.id
					onhandleEdit(userId)
					console.log(userId)
					
				}}
				variant="contained"
				color="primary"
				startIcon={<EditIcon />}>
				Edit
				</Button>
			);
			}
		},
	{
    field: "delete",
    headerName: "Delete",
    sortable: false,
    width: 160,
    renderCell: (param) => {
	return (
        <Button
			sx={{
				width:'100px',
				backgroundColor:'red'
			}}
			onClick={()=>{
			let userId = param.row.id	
			console.log(userId)
			onhandleDelete(userId)
			}} 
			variant="contained"
			startIcon={<DeleteIcon />}
        >
			Delete
        </Button>
		);
    }
	},
	{
		field: "View",
		headerName: "View",
		sortable: false,
		width: 160,
		renderCell: (param) => {
		return (
			<Button
				sx={{
					width:'100px',
					backgroundColor:'green'
				}}
				onClick={()=>{
					let userId = param.row.id
					onhandleView(userId)
					console.log(userId)
					
				}}
				variant="contained"
				startIcon={<PreviewIcon />}
			>
				View
			</Button>
			);
		}
		}
	]

return (
	<>
	{load && <Spinner />}
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
		Profile
	</IconButton>
	
	<Button onClick={onhandleAdd} sx={{ position:'relative' ,mr: 'margin-right'}} variant="contained" color="success"  > Add+ </Button>
	
	</Toolbar>
</AppBar>
</Box>
	<div style={{ height: 400, width: '100%' }}>
	<DataGrid
		rows={candidates}
		columns={columns}
		pageSize={count}
		components={{
			Toolbar: CustomToolbar,
		}}
	/>
	<Pagination onClick={(e) => handleChangePage(e.target.innerText)} count={count} variant="outlined" shape="rounded"/>
	</div>
	</Navbar>
	</>
);
}



























