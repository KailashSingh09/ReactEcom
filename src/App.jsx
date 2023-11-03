import React from "react";
import Nav from "./Nav.jsx";
import {BrowserRouter,Route} from 'react-router-dom'
import {Routes} from 'react-router-dom'
import Itempage from "./Itempage.jsx"
import Midsec from "./Midsec.jsx";

function App() {
  return (
  <BrowserRouter>
      <Nav/>
  <Routes>
  <Route path="/" element={<Midsec/>}/>
    <Route path="/Products" element={<Itempage/>}/>
  </Routes>
</BrowserRouter>  
  );
}

export default App
