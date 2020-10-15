import React, { Component } from 'react'
import { Layout, Menu, Card, Col, Row, Space, PageHeader, Drawer, Button, } from 'antd';
import TutorsCount from './Tutorscount';
import UserRegister from './Userregister'
import Sidebar from "../Project/Sidebar";
import { MenuFoldOutlined, MenuOutlined } from "@ant-design/icons";
import Signout from '../Auth/Signout'
import TotalQuiz from './TotalQuiz';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const ROOT = process.env.REACT_APP_URL;


export default class TotalQuizScreen extends Component {
  state = {
    collapsed: false,
    apiData: [],

  };
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };
  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  componentDidMount() {
    const token = localStorage.getItem('token')
    if (token) {
      fetch(`${ROOT}dashboardAnalytics/quizcount`, {
        method: 'GET',
        headers: {
          "Access-Control-Allow-Credentials": "true",
          authorization: `Bearer ${localStorage.token}`,
        }
      })
        .then(responce => responce.json())
        .then(res => {
          this.setState({
            apiData: res
          })
        })
    } else {
      this.props.history.push('/login')
    }
  }
  render() {
    return (
      <Layout>
        <Drawer
          title="Winuall Analytics"
          placement="left"
          onClick={() => this.setState({ collapsed: false })}
          onClose={() => this.setState({ collapsed: false })}
          visible={this.state.collapsed}
        >
          <Sider
            trigger={null}
            collapsedWidth={0}
            breakpoint="lg"
            theme="light"
          >
            <Sidebar selectedKey="8" />
          </Sider>
        </Drawer>
        <Sider
          trigger={null}
          collapsedWidth={0}
          breakpoint="lg"
          theme="light"
        >
          <Sidebar selectedKey="8" />
        </Sider>
        <Content>
          <Header
            theme="light"
            style={{ padding: 0, backgroundColor: "#1890ff" }}
          >
            {" "}
            <Button
              className="menu"
              type="primary"
              icon={<MenuOutlined />}
              onClick={() => this.setState({ collapsed: true })}
            />
            <Signout {...this.props} />
            <PageHeader className="site-page-header" title="Winuall" />
          </Header>
          <Content className="site-layout-background">
            <div className="container-1">
              <Row gutter={[16, 16]}>
                <Col style={{marginLeft:180}} span={18}>
                  <Card
                    style={{
                      boxShadow: "5px 8px 24px 5px rgba(208, 216, 243, 0.6)",
                    }}
                  >
                    <TotalQuiz  data={this.state.apiData} />
                  </Card>
                </Col>
              </Row>
            </div>
          </Content>
        </Content>
      </Layout>
    )
  }
} 