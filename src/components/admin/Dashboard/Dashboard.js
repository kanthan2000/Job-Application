import Card from '../Card/card.js'
import './Dashboard.css'
import axios from 'axios'
import { useEffect, useState } from 'react'
import Navbar from '../Navbar/navbar.js'
import Spinner from '../../Spinner/Spinner.js'



const Dashboard =(props) =>{
   const [load, setLoad] = useState(false)
   const [cards, setCards] = useState([])

   useEffect(() => {
      setLoad(true)
      axios.get("http://35.154.117.105:8080/dashBoard").then(({data}) => {
         setCards(data)
         setLoad(false)
      }).catch(err => {
         console.log(err)
         setLoad(false)
      })
   }, [])

      return(
         <> 
         {load && <Spinner />}
         <Navbar>
         {cards.map((card, idx) => (<Card key={idx}>      
            <div className='inner-card1'>
               <h1>{card.title}</h1>
               <h1>{card.count}</h1>
            </div>
         </Card>))}
         </Navbar>
         
         </>
   )
}
export default Dashboard;