import Navbar from "../../admin/Navbar/navbar";
import {AppContext} from '../../../context'
import React , {useContext,useState} from "react"
import '../view/view.css'
import { Button } from "@mui/material";
import { useNavigate } from 'react-router-dom';
const View = (props)=>{
    const history = useNavigate()
   const { viewData} = useContext(AppContext)

   console.log(viewData)
   const onhandleback = () =>{
    history("/home")
   }
   
    return(
        <>
         <Navbar>
           <div className="main-box">
               <h1 className="header">Employee Details</h1>
               <p>ID  :{viewData.id}</p>
               <p>FirstName : {viewData.firstName}</p>
               <p>LastName :{viewData.lastName}</p>
               <p>Job :{viewData.job}</p>
               <p>PhoneNumber :{viewData.phone}</p>
               <p>LinkedIn :{viewData.linkedIn}</p>
               <p>Email ID :{viewData.email}</p>
               <p>Gender :{viewData.gender}</p>
               <p>Date Of Brith :{viewData.dob}</p>
               <p>Status:{viewData.status}</p>
               <p className="inner-header">Address Details</p>
               <p>Door No:{viewData.address.doorNo}</p>
               <p>Pincode :{viewData.address.pincode}</p>
               <p>Place :{viewData.address.place}</p>
               <p>Street :{viewData.address.street}</p> 
               <p className="inner-header">Company</p>
               {viewData.company.map((value,idx)=>{
                   return <>
                    <p>Company :{value.name}</p>
                    <p>From :{value.from}</p>
                    <p>To :{value.to}</p>
                    <p>Roll :{value.roll}</p>
                   </>
               
               }
               )}
               <p className="inner-header">Skills</p>
               {viewData.skill.map((value,idx)=>{
                   return<>
                   <p>Skills :{value}</p>
                   </>
               })}
               <p className="inner-header">Qualification</p>
               {viewData.qualification.map((value,idx)=>{
                   return <>
                     <p>CollegeName:{value.collegeName}</p>
                     <p>Degree :{value.degree}</p>
                   </>
               })}
           
            </div> 
            <Button variant="contained" sx={{position:'absolute',left:'80%'}} onClick={onhandleback}>Back</Button> 
            
        </Navbar>   
        </>
    )
}
export default View;