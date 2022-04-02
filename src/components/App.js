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
      <Route path="/" element={<Navbar />} />
      <Route path="/home" element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/table" element={<BasicTabstable />} />
      <Route path="/signin" element={<SignInSide />} />
      <Route path="/login" element={<Login />} />
      
    </Routes>
    </div> 
      
    </>
  );
}

export default App;
