import React from 'react'
import "./Prodcom.css"
const PRODUCTpage = (element) => {
  return (
    <div className='Component'>
    <img style={{width:"300px",height:"300px"}} src={element.src}/>
     <h3>{element.Title}</h3><br/>
     <p>${element.Price}</p>
    </div> 
  )
}

export default PRODUCTpage