import React from "react";
import Nav from "./Nav.jsx";
import {BrowserRouter,Route} from 'react-router-dom'
import {Routes} from 'react-router-dom'
import Menu from "./Menu.jsx";
import Location from "./Location.jsx";
import Midsec from "./Midsec.jsx";

function App() {
  return (
  <BrowserRouter>
      <Nav/>
  <Routes>
  <Route path="/" element={<Midsec/>}/>
    <Route path="/Menu" element={<Menu/>}/>
    <Route path="/location" element={<Location/>}/>
  </Routes>
</BrowserRouter>  
  );
}

export default App
