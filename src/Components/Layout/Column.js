import './style.css'
import React from 'react'
import {Typography} from 'antd';
import {Row,Col} from 'antd';
const {Title,Text} = Typography;

function Column(){
  return (
    <>
      <Title className='head' level={3} >Single Layout</Title>
      <Col span={20}>
        <Text className='para' > Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus nemo quasi labore expedita? Veritatis at maxime id voluptates excepturi molestiae possimus blanditiis dicta consequuntur maiores suscipit, eveniet neque obcaecati doloribus.</Text>
      </Col>
    </>
  )
}

export default Column;