import React, { Component } from "react";
import { Layout, Menu, Card, Col, Row, Space, PageHeader, Drawer, Button, } from 'antd';
import TutorsCount from "./Tutorscount";
import UserRegister from "./Userregister";
import Sidebar from "../Project/Sidebar";
import Signout from '../Auth/Signout'
import { MenuFoldOutlined, MenuOutlined } from "@ant-design/icons";

import RevenueChart from './Revenue'


const ROOT = process.env.REACT_APP_URL;

const { Header, Content, Sider } = Layout;
const { SubMenu } = Menu;

export default class RevenueScreen extends Component {
  state = {
   data: []
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


  getTotalRevenue() {
    fetch(`${ROOT}dashboardAnalytics/totalRevenue/`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": "true",
        authorization: `Bearer ${localStorage.token}`,
      },
    })
      .then((responce) => responce.json())
      .then((resp) => {
        this.setState({ data: resp});
      });
  }

  componentDidMount() {
    const token = localStorage.getItem("token");
    if (token) {
      this.getTotalRevenue()
    } else {
      this.props.history.push("/login");
    }
  }


  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

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
            <Sidebar selectedKey="4" />
          </Sider>
        </Drawer>

        <Sider
          trigger={null}
          collapsedWidth={0}
          breakpoint="lg"
          theme="light"
        >
          <Sidebar selectedKey="4" />
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
              <div className="site-card-wrapper">
           
              </div>
              <Row gutter={16}>
                <Col style={{marginLeft:180}} span={18}>
                  <Card
                    style={{
                      boxShadow: "5px 8px 24px 5px rgba(208, 216, 243, 0.6)",
                    }}
                  >
                    <RevenueChart data={this.state.data} />
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