import SignUp from "../tabs/Personal"
import Navbar from "../../admin/Navbar/navbar";
// import '../view/view.css'
const View = (props)=>{
    return(
        <>
        <div style={{width:" 100%",
        height: "90vh",
        position: "relative",
        }}>
        <Navbar>
        <div style={{width:" 100%",
        height: "90vh",
        position: "relative",
        overflowY:"scroll"
        }} >
        <SignUp>

       </SignUp>
        </div>
        </Navbar>
        </div>
        
        </>
    )
}
export default View;