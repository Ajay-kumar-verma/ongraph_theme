// import Main from './Main';
import {BrowserRouter, Route, Routes } from 'react-router-dom';
import LeftComponent from './LeftComponent';
import Column from './Components/Layout/Column' 
import { Col, Row } from 'antd';
import Main from './Main'

// import MainData from './MianData';
// import { Col, Row } from 'antd';

function App() {
  return (
		<>
    	<BrowserRouter>
				<Row>
		 			<Col span={6}>
						<LeftComponent />
		 			</Col>
      	  <Col span={18} >
		    		<Main />
					</Col>	 
				</Row>
		</BrowserRouter>



   </>
  );
}

export default App;
