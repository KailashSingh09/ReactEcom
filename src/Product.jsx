import React from 'react'

const Product = (Props) => {
  return (
    <div style={{height:'500px',width:'200px',textAlign:'center',paddingTop:80}}>
    <img style={{width:"300px",height:"320px"}} src={Props.src}/>
     <h3>{Props.title}</h3>
     <p>{Props.Class}</p>
    </div>
  )
}

export default Product