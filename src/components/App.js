import Navbar  from "./admin/Navbar/navbar";
import Home  from './admin/Nav_item/home'
import About  from './admin/Nav_item/About'
import Contact  from './admin/Nav_item/Contact'
import {Routes, Route } from 'react-router-dom'
import Login from "./login/login"
import SignInSide from "./Form/pages/Signin"
import Signup from './Form/tabs/Personal'
import BasicTabstable from "./Form/candidate/BasicTabstable"
import Dashboard from "./admin/Dashboard";
import Navtab from './Form/tabs/Navtab';

function App() {

	return (
		<>
		<div>
			<Navbar >
				<Routes>
					<Route path="/login" element={<Login />} />
					<Route path='/home'  element={<Dashboard />} />
					<Route path="/About" element={<About />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/table" element={<BasicTabstable />} />
					<Route path="/signin" element={<SignInSide />} />
					<Route path='/navtab' element={<Navtab />}/>
				</Routes>
			</Navbar>
		</div>       
		</>
);
}

export default App;
