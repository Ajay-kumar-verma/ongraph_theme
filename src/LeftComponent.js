import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { useNavigate } from "react-router-dom";
import { Avatar, Image, Row, Col } from 'antd';

import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined, key,
  TabletTwoTone,
} from '@ant-design/icons';
import { Breadcrumb, Layout, Menu } from 'antd';
// import {Link} from 'react-router-dom';

const { Header, Content, Footer, Sider } = Layout;

function getItem(label, icon, children, type) {
  return {
    label,
    key: label.split(" ").join(""),
    icon,
    children,
    type,
  };
}

const items = [
  getItem('Mazer', <Avatar />),
  getItem('Menu'),
  getItem('Dashboard', <PieChartOutlined />),
  getItem('Components', <DesktopOutlined />,
    [
      getItem('Alert'),
      getItem('Badge'),
      getItem('Breadcrumb'),
      getItem('Button'),
      getItem('Card'),
      getItem('Carousel'),
      getItem('Dropdown'),
      getItem('List Group'),
    ],
  ),

  getItem('Extra Components', <UserOutlined />,
    [
      getItem('Avatar'),
      getItem('Sweet Alert',),
      getItem('Toastify',),
      getItem('Rating',),
      getItem('Divider'),
    ]),

  getItem('Layouts', <TeamOutlined />,
    [
      getItem('Default Layout'),
      getItem('1 Column'),
      getItem('Vertical with Navbar'),
      getItem('Horizontal Menu',)
    ]),

  getItem('Forms & Tables', null, null, 'group'),
  getItem('Form Elements', <TeamOutlined />, [
    getItem('Input'),
    getItem('Input Group'),
    getItem('Select'),
    getItem('Radio'),
    getItem('Checkbox'),
    getItem('Textarea'),
  ]),

  getItem('Form Layout', <TeamOutlined />),

  getItem('Form Editor', <TeamOutlined />,
    [
      getItem('quill'),
      getItem('CKEditor'),
      getItem('Summernote'),
      getItem('TinyMCE'),
    ]),

  getItem('Table', <TabletTwoTone />),
  getItem('Datatable'),
  getItem("Extra UI"),
  getItem('Widgets', <TabletTwoTone />, [
    getItem('Chatbox'),
    getItem('Pricing',),
    getItem('To-do List'),
  ])

];


const LeftComponent = (props) => {
  let navigate = useNavigate();

  return (
    <Layout
      style={{
        minHeight: '100vh',
      }}
    >
      <Menu theme="day" defaultSelectedKeys={['1']} mode="inline"
        items={items}
        style={{
          backgroundColor: "white",
          marginLeft: "20px",
          width: "250px",
          fontSize: "20px",
        }}
        onClick={(e) => {
            navigate(e.key);
         

         console.log(e.key)
        
        }}
      />

    </Layout>
  );
};

export default LeftComponent;



