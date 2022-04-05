import Navbar  from "./admin/Navbar/navbar";
import Home  from './admin/Nav_item/home'
import About  from './admin/Nav_item/About'
import Contact  from './admin/Nav_item/Contact'
import {Routes, Route } from 'react-router-dom'
import Login from "./login/login"
import SignInSide from "./Form/pages/Signin"
import BasicTabstable from "./Form/candidate/BasicTabstable"
// import Signin
function App() {

  console.log("app")
  
  return (
    <>
     <div>
     
      <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/admin" element={<Navbar />} />
      <Route path="/About" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/table" element={<BasicTabstable />} />
      <Route path="/signin" element={<SignInSide />} />
      
      
    </Routes>
    </div> 
      
    </>
  );
}

export default App;
