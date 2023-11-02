import React from 'react'
import "./Midsec.css"
import Slider from './Slider.jsx';
import Footer from './Footer';
import Button from '@mui/material/Button';
const Midsec=()=>{
 

  return (
    <>
    <div className='parent'>
    <div className='first'>
        <h1>YOUR FEET <br/>DESERVE<br/>THE BEST</h1>
        <p>
            YOUR FOOT DESERVE THE BEST AND WE'RE HERE TO <br/>
            HELP YOU WITH YOUR SHOES.YOUR FEET DESERVE <br/>
            THE BEST AND WE'RE HERE TO HELP YOU WITH OUR <br/>
            SHOES.
        </p> 
        <div className='fchild'>
        <Button variant="contained" style={{backgroundColor:"red",color:"white"}}>Shop Now</Button>
        <Button variant="outlined" size="medium" style={{color:"black",border:"1px solid black"}}>
          Category
        </Button>

      </div>
      <span style={{fontWeight:"bold"}}>Also Availabe on</span> <br/>
      <div className='imgs'>
      <img src='images/flipkart.jpg' height={40} width={70}/>
      <img src='images/amazon.jpg' height={40} width={70} style={{marginLeft:"-10px"}} />
      </div>
        </div>
        <div className='second'>
        <img src='images/NicePng_nike-png_40060.png' height={550} width={750} style={{marginLeft:"50px"}}/>
        </div>
    </div> <br/>
    <div className='s' style={{display:"inline-block"}}>
    <h1 style={{fontSize:"74px"}}>Shop Best Shoes</h1>
    </div>
    <Slider/> <br/>
  
    <Footer/>
</>
  )
}
  

export default Midsec;