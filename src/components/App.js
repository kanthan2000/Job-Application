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

function App() {
	const [viewData,setViewData] = React.useState([])
	return (
		<>
			 <AppContext.Provider value={{viewData,setViewData}}>
				<Routes>
					<Route path='/home'  element={<Dashboard />} />
					<Route path="/About" element={<About />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/table" element={<BasicTabstable />} />
					<Route path='/navtab' element={<Navtab />}/>
					<Route path="/login" element={<Login />} />
					<Route path="/signin" element={<SignInSide />} />
					<Route path="/view" element={<View />} />
					<Route path="/update" element={<Update/>} />
					<Route path="/jobDescription" element={<JobDescription/>} />
					<Route path="/addpanel" element={<Panel />} />
				</Routes>
				</AppContext.Provider>
		</>
        )
	}


export default App;

   
    