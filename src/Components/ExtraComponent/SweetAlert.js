import React from "react";
import { Row, Col } from "antd";
import { Typography } from 'antd';
import { Button, Modal, Space } from 'antd';
import './Avatar.css';

const { Text, Link } = Typography;
const { Title } = Typography;
  const SweetAlert = () => {
    return (<>
      <Row>
        <Col span={20} >
          <Title level={3} className="head" >Sweet Alert</Title>
          <Text className="para" >A beautiful replacement for javascript alerts</Text>
          <Title className="head" level={3} >Basic Sweet Alert</Title>
          <Text className="para"  >SweetAlert automatically centers itself on the page and looks great no matter
            if you're using a desktop computer, mobile or tablet. It's even highly customizable, as you can see below!</Text>
      <Row>
          <Space>
            <Button className="btn" 
              onClick={() => { Er() }}
            > Basic Example
            </Button>
            <Button  className="btn"  >A title with a text under  </Button>
            <Button  className="btn"  > With Footer </Button>
          </Space>
        </Row>
        <Title className="head" level={3} >Types</Title>
        <Text className="para" >The type of the modal. SweetAlert comes with 5 built-in types which will show a
          corresponding icon animation: "warning", "error", "success" and "info". You can also set it as "input" to get a prompt modal.
          It can either be put in the object under the key "icon"
          or passed as the third parameter of the function.</Text>
        <Title className="head" level={3} >Alert Input</Title>
        <Text className="para" >The type of the modal. SweetAlert comes with 5 built-in
          types which will show a corresponding icon animation: "warning", "error", "success" and "info". You can also set it as "input" to get a prompt modal. It can either be put in the object under the key "icon" or
          passed as the third parameter of the function</Text>

      </Col>


    </Row>




  </>)

}


export default SweetAlert;

const Er = () => {

  Modal.info({
    content: 'Any fool can use a computer',
  });

}