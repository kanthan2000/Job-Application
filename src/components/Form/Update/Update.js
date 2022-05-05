import React from "react"
import SignUp from "../tabs/Personal"
import Navbar from "../../admin/Navbar/navbar"

const Update = () =>{
    return(
        <>
        <Navbar>
            <div style={{
                top:'3%',
                width:'100%',
                height:'90vh',
                overflowY:'scroll'
            }}>
            <SignUp />
            </div>
        </Navbar>
        </>
    )
}
export default Update