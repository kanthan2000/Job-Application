import { Button } from '@mui/material'
import React from 'react'
import './card.css'

const Card = (props)=>{
    const handleclick = (event) =>{
        console.log(event.target.value,"clicked")
     }
    return(
        <>
        <div className='Card'>
         <div className='inner-card'>
         {props.children}
         </div>
        </div>
        
        </>
    )
}
export default Card;