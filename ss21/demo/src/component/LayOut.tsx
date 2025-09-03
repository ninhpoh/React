import React, { useState } from 'react';
import type { MenuProps } from 'antd';
import { Input, Space } from 'antd';
import "../App.css"
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UsergroupAddOutlined,
  DollarOutlined,
  PieChartOutlined,
  UserOutlined,
  FileOutlined,
} from '@ant-design/icons';
import { Button, Layout, Menu, theme } from 'antd';
import { Footer } from 'antd/es/layout/layout';
const { Header, Sider, Content } = Layout;
type MenuItem = Required<MenuProps>['items'][number];

const { Search } = Input;
function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem('Tong Quan', '1', <PieChartOutlined />),
  getItem('Quan Ly Tien Luong', '2', <DollarOutlined />),
  getItem('Quan Ly Nhan Su', 'sub1', <UserOutlined />, [
    getItem('Tom', '3'),
    getItem('Bill', '4'),
    getItem('Alex', '5'),
  ]),
  getItem('Quan Ly Dao Tao', 'sub2', <UsergroupAddOutlined />, [
    getItem('Tom', '6'),
    getItem('Bill', '7'),
    getItem('Alex', '8'),
  ]),
  getItem('Quan Ly Tai Lieu', 'sub3', <FileOutlined />, [
    getItem('Tom', '9'),
    getItem('Bill', '11'),
    getItem('Alex', '12'),
  ]),
  
];
const LayOut = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={items}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
            <div className='flex items-center'>
                <Button
                type="text"
                icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                onClick={() => setCollapsed(!collapsed)}
                style={{
                fontSize: '16px',
                width: 64,
                height: 64,
            }}
            />
            <Search placeholder="input search text"  enterButton style={{width:'300px'}}/>
            </div>
            
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          Content
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©{new Date().getFullYear()} Created by Ninh
        </Footer>
      </Layout>
    </Layout>
  );
};
export default LayOut;