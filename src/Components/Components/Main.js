import React, { useState } from 'react';
import {Route, Routes } from 'react-router-dom';
// import Dashboard from './Components/Dashboard'
import Alert from "./Alert";
import Badge from "./Badge";
import Breadcrumb from './Breadcrumb'
import Button from './Button'
import Card from './Card';
import Carousel from './Carousel'
import DropDown from './/DropDown';
import ListGroup from './ListGroup';

const Main = () => {
	
	return (<>
		<Routes>
		  <Route path="/Alert" element={<Alert />} />
    	  <Route path="/Badge" element={<Badge />} />
          <Route path="/Breadcrumb" element={<Breadcrumb />} />
    	  <Route path="/Button" element={<Button />} />
          <Route path="/Card" element={<Card />} />
    	  <Route path="/Carousel" element={<Carousel />} />
          <Route path="/DropDown" element={<DropDown />} />
    	  <Route path="/Listgroup" element={<ListGroup />} />
        
      		</Routes>
	
		</>)


}

export default Main;