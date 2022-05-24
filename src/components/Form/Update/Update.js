import React,{useContext,useState} from "react"
import Personal from "../tabs/Personal"
import Navbar from "../../admin/Navbar/navbar"
import {AppContext} from '../../../context'
const Update = () =>{
    const { viewData,setViewData} = useContext(AppContext)
    // console.log(viewData)
    return(
        <>
        <Navbar>
            <div style={{
                top:'3%',
                width:'100%',
                height:'90vh',
                overflowY:'scroll'
            }}>
            <Personal viewData={viewData}/>
            </div>
        </Navbar>
        </>
    )
}
export default Update