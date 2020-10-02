import React, { Component } from 'react'
import { Layout,Menu,  Card, Col, Row, Space, PageHeader } from 'antd';
import TutorsCount from './Tutorscount';
import UserRegister from './Userregister'
import Sidebar from "../Project/Sidebar";

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const ROOT = process.env.REACT_APP_URL;


export default class StudentScreen extends Component {
  state = {
    collapsed: false,
    apiData: [],

  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };


  componentDidMount(){
    // const token = localStorage.getItem('token')
    // if (token) {
    //   fetch(`${ROOT}dashboardV2/studentCount`, {
    //   method: 'GET',
    //   headers: {
    //     "Access-Control-Allow-Credentials": "true",
    //     authorization: `Bearer ${localStorage.token}`,
    //   }
    //   })
    //   .then(responce => responce.json())
    //   .then(res => {
    //       debugger
    //     this.setState({
    //         apiData: res
    //     })
    //   })
    // } else {
    //     this.props.history.push('/login')
    // }


}
render(){
    return(
  <Layout>
  <Sider
    trigger={null}
    theme="light"
    collapsible
    collapsed={this.state.collapsed}
  >
  <Sidebar selectedKey="3" />
  </Sider>
  <Content>
    <Header
      theme="light"
      style={{ padding: 0, backgroundColor: "white" }}
    >
      <PageHeader className="site-page-header" title="Winuall" />
    </Header>
    <Content className="site-layout-background">
      <div className="container-1">
        <Space direction="vertical">
        <Row gutter={[16,  16 ]}>
        <Col span={12}>
              <Card
                style={{
                  boxShadow: "5px 8px 24px 5px rgba(208, 216, 243, 0.6)",
                }}
              >
                <UserRegister  data={this.state.apiData}/>
              </Card>
            </Col>
            <Col span={12}>
              <Card
                style={{
                  boxShadow: "5px 8px 24px 5px rgba(208, 216, 243, 0.6)",
                }}
              >
                <TutorsCount />
              </Card>
              
            </Col>
            <Col span={12}>
            <Card
              style={{
                boxShadow: "5px 8px 24px 5px rgba(208, 216, 243, 0.6)",
              }}
            >
              <TutorsCount />
            </Card>
            
          </Col>
          <Col span={12}>
          <Card
            style={{
              boxShadow: "5px 8px 24px 5px rgba(208, 216, 243, 0.6)",
            }}
          >
            <TutorsCount />
          </Card>
          
        </Col>
          </Row>
        </Space>
      </div>
    </Content>
  </Content>
</Layout>
    )
}


}