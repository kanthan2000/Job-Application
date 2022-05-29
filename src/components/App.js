import Navbar  from "./admin/Navbar/navbar";
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
import Report from "./Form/Report/Report";
import HeaderComponent from './admin/Nav_item/headersComponents/HeadersComponent'
import AboutUs from './admin/Nav_item/BodyComponents/About'
import Contact  from './admin/Nav_item/BodyComponents/Contact'
function App() {
	const [viewData,setViewData] = React.useState([])
	const [positionData,setPositionData] = React.useState()
	const [ExperienceData,setExperienceData] = React.useState()
	const [loginpositionData,setloginPositionData] = React.useState("")
	const [statusData , setStatusData] = React.useState([])
	const [Username ,setUsername] = React.useState()
	let value = {viewData,setViewData,
		positionData,setPositionData,
		ExperienceData,setExperienceData,
		loginpositionData,setloginPositionData,
		statusData , setStatusData,
		Username ,setUsername
		}
	return (
		<>
				<AppContext.Provider value={value}>
				<Routes>
					<Route path="/" element={<Login />} />
					<Route path='/dashboard'  element={<Dashboard />} />
					<Route path='/home'  element={<HeaderComponent/>} />
					<Route path="/about" element={<AboutUs />} />
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
					<Route path="report" element={<Report/>} />
				</Routes>
				</AppContext.Provider>
		</>
        )
	}


export default App;
