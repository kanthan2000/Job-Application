import React from 'react'
import './card.css'

const Card = (props)=>{
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