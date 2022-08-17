import React, { useState } from 'react';
// import {Route, Routes } from 'react-router-dom';
import Component from './Components/Components/Main'
import Layout from './Components/Layout/Main'
import ExtraComponent from './Components/ExtraComponent/Main'

const Main = () => {
	
	return (<>

	   	<Component />
      <ExtraComponent />
      <Layout />
	
		</>)


}

export default Main;