import React from 'react'
import "./Nav.css"
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div className='nav' style={{borderTop:"5px solid black",height:"400",width:"100%",marginTop:"30px" }}>
        <div className='first'>
        <img src='images/th (1).jpg' height={60} width={120}/>
        </div>
        <div className='second'>
        <ul>
            <li><Link to={"/"}>Home</Link></li>
            <li><Link to={"/Location"}>Products Page</Link></li>
        </ul>
        </div>
        <div>
        <button id='login'>Login</button>
        </div>
    </div>
  )
}

export default Nav;
