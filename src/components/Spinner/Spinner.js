import React from 'react'
import './Spinner.css'

const Spinner = () => {
    return ( <>
        <div className='backdrop'>
            <div className="lds-spinner">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    </> );
}
 
export default Spinner;