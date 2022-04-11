import Navbar  from "./admin/Navbar/navbar";
import About  from './admin/Nav_item/About'
import Contact  from './admin/Nav_item/Contact'
import {Routes, Route } from 'react-router-dom'
import Login from "./login/login"
import SignInSide from "./Form/pages/Signin"
import BasicTabstable from "./Form/candidate/BasicTabstable"
import Dashboard from "./admin/Dashboard/Dashboard";
import Navtab from './Form/tabs/Navtab';

function App() {
	
	return (
		<>
			<Navbar >
				<Routes>
					<Route path='/home'  element={<Dashboard />} />
					<Route path="/About" element={<About />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/table" element={<BasicTabstable />} />
					<Route path='/navtab' element={<Navtab />}/>
					<Route path="/login" element={<Login />} />
					<Route path="/signin" element={<SignInSide />} />
				</Routes>
			</Navbar>
		</>
        )
	}


export default App;
