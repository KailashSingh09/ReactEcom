import React from 'react'
import Items from "./products.json"
import PRODUCTpage from './PRODUCTpage'
import "./ProdDisplay.css"

const Productdisplay=()=>{
  // const Items=fetch('https://fakestoreapi.com/products')
  // .then(res=>res.json())
  // .then(json=>console.log(json))
    return(
        <div className='page'>
        {Items.map((item) => (
          <PRODUCTpage
            src={item.thumbnail}
            Title={item.title}
            Price={item.price}
          />
        ))}
      </div>
    )
}


export default Productdisplay;