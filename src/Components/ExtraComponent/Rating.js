import React from "react";
import { Row, Col, Rate } from "antd";
import { Typography } from 'antd';
import { Button, Radio } from 'antd';
// import { Button, Modal, Space } from 'antd';
import './Avatar.css';
const { Text, Link,Title } = Typography;

const Rating =()=>{

    return(<>
        <Col >
            <Title level={3} className="head" >Rating</Title>
            <Text className="para" >Rating with rater-js. Pure javascript rating library</Text>
        </Col>

    
        <Title level={4} className="head" >Basic Rating</Title>
        <Rate className="star"  allowHalf defaultValue={2.5}  count={5}/>


        <Title level={4} className="head" > 5 Star Rating with Step</Title>
        <Rate className="star"  allowHalf  />

        <Title level={4} className="head"   >Unlimited Number of Stars </Title>
        <Rate className="star"   allowHalf defaultValue={10} count={10} /><br/>
        <Rate className="star"  allowHalf defaultValue={10} count={16} />


</>)

}

export default Rating;