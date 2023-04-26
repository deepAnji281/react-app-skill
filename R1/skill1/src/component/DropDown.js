import React from 'react'
import '../css/dropdown.css'
import { useState } from 'react'

const DropDown = () => {
    const[flag,setFlag]=useState(false);
    const handle=()=>{
        setFlag(true)
    }
  return (
    <div className='dropdown-wrapper'>
    <h3>Should you use a dropdown?</h3>
    <form>
         <select onClick={handle}>
            <option>Select</option>
            <option>Valvo</option>
            <option>Tigor</option>
            <option>Xuv</option>
            <option>Breeza</option>
         </select>
         
            {
                ((flag===false)?<ul className='list'><li>Yes</li><br/>
            
            <li>Probably not</li></ul>:<></>)
            }
         
    </form>
       
      
    </div>
  )
}

export default DropDown
