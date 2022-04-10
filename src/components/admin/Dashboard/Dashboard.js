import Card from '../Card/card.js'
import './Dashboard.css'
import axios from 'axios'
import { useEffect, useState } from 'react'


const Dashboard =(props) =>{

   const [cards, setCards] = useState([])

   useEffect(() => {
      axios.get("http://192.168.1.103:8080/dashBoard").then(({data}) => {
         setCards(data)
      }).catch(err => {
         console.log(err)
      })
   }, [])

      return(
         <> 
         {cards.map((card, idx) => (<Card key={idx}>      
            <div className='inner-card1'>
               <h1>{card.title}</h1>7
               <h1>{card.count}</h1>
            </div>
         </Card>))}
         
         </>
   )
}
export default Dashboard;