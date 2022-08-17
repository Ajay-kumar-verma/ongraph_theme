import React from "react";
import { Row, Col, Rate } from "antd";
import { Typography } from 'antd';
import { Divider } from 'antd';
// import { Button, Modal, Space } from 'antd';
import './Avatar.css';
const { Text, Link,Title } = Typography;

const Dividers=()=>{

return(<>
   <Title className="head" level={3} >Divider</Title>
   <Text className="para" >A Component</Text>
   
   <Title className="head content" level={4} >Default</Title>
   <Text className="para"    >You can use default divider with "h" </Text>
   <hr />
   <Col span={20} >
     <Text className="para" > Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident nostrum numquam reprehenderit facilis. Dolor blanditiis commodi voluptate esse voluptatum aut natus, distinctio at, officiis ipsam molestiae doloribus ratione corrupti dolorum.</Text>
   </Col>
   <Title className="head" level={4}  >Divider with Text </Title>
   <Text  className="para"> Use .divider-text and wrapped by .divider to create a divider text </Text>
 
   <Divider  orientation="Center"   style={{ border: '0px solid rgb(197, 188, 188)' }}  plain>
      Hello There!
   </Divider>
    <Col span={20} >
     <Text className="para" >   Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident nostrum numquam reprehenderit facilis. Dolor blanditiis commodi voluptate esse voluptatum aut natus, distinctio at, officiis ipsam molestiae doloribus ratione corrupti dolorum.</Text>
   </Col>

   <Title className="head" level={4}  >Divider Position </Title>
   <Text  className="para"> Use .divider- &#123;  left|left-center|right-center|right &#125; and with .divider to change the text positio </Text>

   <Divider  orientation="left"  style={{ border: '0px solid rgb(197, 188, 188)' }} plain>
      Left
   </Divider>
   
   <Divider  orientation="leftCenter"  style={{ border: '0px solid rgb(197, 188, 188)' }} plain>
      left center
   </Divider>

   <Divider  orientation="center" style={{ border: '0px solid rgb(197, 188, 188)' }}  plain>
     Center
   </Divider>
   <Divider  orientation="rightCenter"  style={{ border: '0px solid rgb(197, 188, 188)' }} plain>
      Right center
   </Divider>
   <Divider   style={{ border: '0px solid rgb(197, 188, 188)' }} orientation="right"  plain>
      Right
   </Divider>
  


</>)

}

export default Dividers;