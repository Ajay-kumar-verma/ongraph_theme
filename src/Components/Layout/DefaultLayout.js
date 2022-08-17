import './style.css'
import React from "react";
import { Typography,Col,Row } from 'antd';
const { Text, Title } = Typography;
const DefaultLayout=()=>{

return (<>
 <Title className='head' level={3} > Layout Default </Title>
 <Text className='para' > The default layout</Text>
 <Title className='head' level={4} > Default Layout </Title>
 <Col span={20} >
     <Text className='para' > Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, commodi? Ullam quaerat similique iusto temporibus, vero aliquam praesentium, odit deserunt eaque nihil saepe hic deleniti? Placeat delectus quibusdam ratione ullam! </Text>
 </Col>
</>)

}

export default DefaultLayout;