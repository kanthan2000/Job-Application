import Navbar  from "./admin/Navbar/navbar";
import About  from './admin/Nav_item/About'
import Contact  from './admin/Nav_item/Contact'
import {Routes, Route }   
from 'react-router-dom'
import Login from "./login/login"
import SignInSide from "./Form/pages/Signin"
import BasicTabstable from "./Form/candidate/BasicTabstable"
import Dashboard from "./admin/Dashboard/Dashboard";
import Navtab from './Form/tabs/Navtab';
import View from "./Form/view/view";
import {AppContext }from '../context'
import React from 'react'
import Update from "./Form/Update/Update";
import JobDescription from "./Form/JobDescription/JobDescription";
import Panel from "./Form/AddPanel/AddPanel";
import PanelTable from './Form/AddPanel/PanelTable';
import Status from '../components/admin/Dashboard/Statustable'
function App() {
	const [viewData,setViewData] = React.useState([])
	const [positionData,setPositionData] = React.useState()
	const [ExperienceData,setExperienceData] = React.useState()
	const [loginpositionData,setloginPositionData] = React.useState("")
	const [statusData , setStatusData] = React.useState([])
	let value = {viewData,setViewData,
		positionData,setPositionData,
		ExperienceData,setExperienceData,
		loginpositionData,setloginPositionData,
		statusData , setStatusData
		}
	return (
		<>
				<AppContext.Provider value={value}>
				<Routes>
					<Route path="/" element={<Login />} />
					<Route path='/home'  element={<Dashboard />} />
					<Route path="/About" element={<About />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/table" element={<BasicTabstable />} />
					<Route path='/navtab' element={<Navtab />}/>
					<Route path="/signin" element={<SignInSide />} />
					<Route path="/view" element={<View />} />
					<Route path="/update" element={<Update/>} />
					<Route path="/jobDescription" element={<JobDescription/>} />
					<Route path="/addpanel" element={<Panel />} />
					<Route path="/paneltable" element={<PanelTable />} />
					<Route path="/status" element={<Status />} />
				</Routes>
				</AppContext.Provider>
		</>
        )
	}


export default App;
