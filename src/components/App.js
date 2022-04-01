import Navbar  from "./admin/navbar";
import LeftNav from "./admin/LeftNav";
import Home  from './admin/Nav_item/home'
import About  from './admin/Nav_item/About'
import Contact  from './admin/Nav_item/Contact'
import {Routes, Route } from 'react-router-dom'
import Shared from "./admin/Shared";
import StickyHeadTable from "./Form/dashtable/Usertable";
// import Signin
function App() {

  console.log("app")
  
  return (
    <>
      <Routes>
        <Route path="/" element={<Shared />} />
        <Route path="/home" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/table" element={<StickyHeadTable />} />
      </Routes>
    </>
  );
}

export default App;
