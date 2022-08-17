import React from 'react'
import {Route, Routes } from 'react-router-dom';
import Column from './Column';
import DefaultLayout from './DefaultLayout';
import HorizontalMenu from './HorizontalMenu';
import VerticalwithNavbar from './VerticalwithNavbar';

const Main=()=>{
 return(<>
 <Routes>
 <Route path='1Column'  element={<Column />} />
 <Route path='DefaultLayout'  element={<DefaultLayout />} />
 <Route path='HorizontalMenu'  element={<HorizontalMenu />} />
 <Route path='VerticalwithNavbar'  element={<VerticalwithNavbar />} />
 


 </Routes>


 
 </>)

}

export default Main;