import { Row,Col } from "antd";
import React from "react";
import { Typography } from 'antd';
import {Space } from 'antd';
import "./Avatar.css";
const { Text, Link } = Typography;
const { Title } = Typography;

const Avatar=()=>{
    
return (<>
     <Row>
     <Col span={20} >
    
     <Title className="head"  level={3}  >Avatar</Title>
      <Text className="para" >A Component </Text>
      

      <Space direction="vertical"  size={15} >
      <Title className="head"   level={5} >Default Avatar</Title>
       <Text className="para" >Wrap your content with .avatar class and wrap your text in .avatar-content to create a avatar.You have 
       to use inline attributes to set height width of image in default avatar</Text>
       </Space>
     
      

       <Space direction="vertical"  size={15} >
       <Title  className="head"  level={3} >Avatar Sizes</Title>
       <Text className="para"  >use class .avatar-'"sdgwith .avatar to modify size of your avatar.</Text>
        </Space >
      


        <Space direction="vertical"  size={15} >
         <Title   className="head" level={3} >Alert Input</Title>
       <Text className="para"  >The type of the modal. SweetAlert comes with 5 built-in 
        types which will show a corresponding icon animation: "warning", "error", "success" and "info". You can also set it as "input" to get a prompt modal. It can either be put in the object under the key "icon" or
         passed as the third parameter of the function</Text>
       </Space>  
   
       <Space direction="vertical"  size={15} >
       <Title   className="head"  level={3} >Avatar Status</Title>
       <Text  className="para" >use class .avatar-status and .bg-'{'color'}' after .avatar-content</Text>
       </Space>  

       
       

  </Col>


     </Row>



</>)

}

export default Avatar;