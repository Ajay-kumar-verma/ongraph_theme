import React from "react";
import {Route, Routes } from 'react-router-dom';
import Avatar from "./Avatar";
import Divider from "./Dividers";
import Rating from "./Rating";
import SweetAlert from "./SweetAlert";
import Toastify from "./Toasify";


const Main=()=>{
 return(<>
    <Routes>
      <Route path="Avatar"  element={<Avatar />} /> 
      <Route path="SweetAlert"  element={<SweetAlert />} /> 
      <Route path="Divider"  element={<Divider />} /> 
      <Route path="Rating"  element={<Rating />} /> 
      <Route path="Toastify"  element={<Toastify />} /> 
    
    </Routes>  
  </>)

}

export default Main;