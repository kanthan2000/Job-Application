
import './card.css'
const Card = (props)=>{
    return(
        <>
        <div className='card'>
            {props.chlidren}
        </div>
        
        </>
    )
}
export default Card;