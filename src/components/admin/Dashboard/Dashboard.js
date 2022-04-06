import Card from '../Card/card.js'
import './Dashboard.css'

const Dashboard =(props) =>{
      let url = "../../../data/data.json"
      fetch(url)
      .then((data) => {
         console.log(data)
      })
      .catch((err)=>{
         return err;
      })
      return(
         <> 
         <Card>      
            <div className='inner-card1'>
               <h1>Progress</h1>
               
            </div>
         </Card>
         <Card>      
            <div className='inner-card2'>
               <h1>Hired</h1>
            </div>
         </Card>
         <Card>      
            <div className='inner-card3'>
               <h1>Rejected</h1>
            </div>
         </Card>
         <Card>      
            <div className='inner-card4'>
               <h1>Waiting List</h1>
            </div>
         </Card>
         <Card>      
         <div className='inner-card5'>
            <h1>Total candidate</h1>
         </div>
         </Card> 
         
            
         </>
     )
 }
 export default Dashboard;