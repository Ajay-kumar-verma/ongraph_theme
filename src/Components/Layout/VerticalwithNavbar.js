import React from 'react'
import './style.css';
import {Row,Col} from 'antd';
import {Typography } from 'antd';
const {Title,Text} =Typography;


function VerticalwithNavbar() {
  return (
    <>
    <Title className='head' level={3}>  Vertical Layout with Navbar</Title>
    <Text className='para' level={4}>  Navbar will appear in top of the page. </Text>

    <Title className='head' level={3}>  Example Content</Title>
    <Col span={20}>
    <Text className='para' level={4}>  Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur quas omnis laudantium tempore exercitationem, expedita aspernatur sed officia asperiores unde tempora maxime odio reprehenderit distinctio incidunt! Vel aspernatur dicta consequatur! </Text>
    </Col>
    
    </>
  )
}
export default VerticalwithNavbar