import React, { Component } from "react";
import { Layout, Menu, Card, Col, Row, Space, PageHeader } from "antd";
import TutorsCount from "./Tutorscount";
import UserRegister from "./Userregister";
import Sidebar from "../Project/Sidebar";

const { Header, Content, Sider } = Layout;
const { SubMenu } = Menu;

const ROOT = process.env.REACT_APP_URL;


export default class TutorScreen extends Component {
  state = {
    collapsed: false,
  };
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
  componentDidMount(){
    const token = localStorage.getItem('token')
    if (token) {
      fetch(`${ROOT}dashboardAnalytics/tutorCount`, {
      method: 'GET',
      headers: {
        "Access-Control-Allow-Credentials": "true",
        authorization: `Bearer ${localStorage.token}`,
      }
      })
      .then(responce => responce.json())
      .then(res => {
          // debugger
      })
    } else {
        this.props.history.push('/login')
    }
}
  render() {
    return (
      <Layout>
        <Sider
          trigger={null}
          theme="light"
          collapsible
          collapsed={this.state.collapsed}
        >
          <Sidebar selectedKey="2" />
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
            
              <Row gutter={[16,  16 ]}>
                <Col span={12}>
                  <Card
                    style={{
                      boxShadow: "5px 8px 24px 5px rgba(208, 216, 243, 0.6)",
                    }}
                  >
                    <UserRegister />
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
            </div>
          </Content>
        </Content>
      </Layout>
    );
  }
}



