import Card from '../Card/card.js'
import './Dashboard.css'
import { useEffect, useState } from 'react'
import Navbar from '../Navbar/navbar.js'
import Spinner from '../../Spinner/Spinner.js'
import { Button } from '@mui/material'
import React from 'react'
import axios from 'axios';

const Dashboard =(props) =>{
   const [load, setLoad] = useState(false)
   const [cards, setCards] = useState([])
   const [status , setStatus] = React.useState()

   useEffect(() => {
      setLoad(true)
      axios.get("http://localhost:8080/dashBoard").then(({data}) => {
         console.log(data)
         setCards(data)
         setLoad(false)
      }).catch(err => {
         console.log(err)
         setLoad(false)
      })
   }, [])
   const handleClick = (card) => {
      // console.log(card.title)
      let title = new String(card.title)
      let name = title.toLowerCase()
     axios.get(`http://localhost:8080/dashBoard/${name}`).then((data)=>{
        console.log(data)
     }).catch((err)=>{
        console.log(err)
     })
   }
      
      return(
         <> 
         {load && <Spinner />}
         <Navbar>
         {cards.map((card, idx) =>  (<Card  key={idx}>      
            <div className='inner-card1'>
               <h1>{card.title}</h1>
               <h1>{card.count}</h1>
              <Button  onClick={(e)=>handleClick(card)}>View</Button>
            </div>
         </Card>))}
        
         </Navbar>
         
         </>
   )
}
export default Dashboard;