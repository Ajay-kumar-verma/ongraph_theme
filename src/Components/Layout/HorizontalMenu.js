import React  from "react";
import './style.css'
import {Row,Col} from 'antd';
import { Typography } from "antd";
const {Title,Text}=Typography;

const DefaultLayout=()=>{
return(<>
<Title className="head" > Layout Horizontal</Title>
<Text className="para" >The Horizontal layout</Text>
<Title className="head" > Horizontal Layout - Coming Soon</Title>
<Col span={20}>
    <Text className="para"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, commodi? Ullam quaerat similique iusto temporibus, vero aliquam praesentium, odit deserunt eaque nihil saepe hic deleniti? Placeat delectus quibusdam ratione ullam!</Text>
</Col>
</>)
}

export default DefaultLayout;