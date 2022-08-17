import React from "react";
import { Row, Col, Space } from "antd";
import { Typography } from 'antd';
import { Button, Radio } from 'antd';
// import { Button, Modal, Space } from 'antd';
import './Avatar.css';
const { Text, Link,Title } = Typography;

const Toastify=()=>{

 return(<>
  <Row>
 <Col >
    <Title level={3} className="head" >Toastify</Title>
   <Text className="para" >Better notification messages</Text>
    </Col>
 
 
  </Row>
   <Col>
     <Title level={4}  className="head" >Types</Title>
   </Col>

  <Row>
    <Col>
        <Button  className="btn" > Basic Toast </Button> 
    </Col>

    <Col>
        <Button className="btn" > Custom Background </Button> 
    </Col>
    <Col>
        <Button className="btn" > Close Button </Button> 
    </Col>

  </Row>
  
  <Title level={4} className="head" >Position</Title>
 
   

  <Row>
    <Col>   <Button  className="btn" > Top Left </Button> 
    </Col>

    <Col>
        <Button className="btn" > Top Center </Button> 
    </Col>
    <Col>
        <Button className="btn" > Top Right </Button> 
    </Col>

  </Row>
  
  <Row>
    <Col>
        <Button  className="btn" > Bottom Left </Button> 
    </Col>

    <Col>
        <Button className="btn" > Bottom Center </Button> 
    </Col>
    <Col>
        <Button className="btn" > Bottom Right  </Button> 
    </Col>

  </Row>
  

 
 </>) 

}

export default Toastify;