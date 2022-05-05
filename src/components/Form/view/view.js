import Navbar from "../../admin/Navbar/navbar";
import Box from '@mui/material/Box';
import {AppContext} from '../../../context'
import React , {useContext,useState} from "react"
import '../view/view.css'
const View = (props)=>{
   const { viewData,setViewData} = useContext(AppContext)
   const [Address , setAddres] = useState([])
   setAddres(viewData.address)
   console.log(viewData.data)

   
    return(
        <>
           
           
        </>
    )
}
export default View;
