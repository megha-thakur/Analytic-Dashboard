import React, { Component } from "react";
import { Layout, Menu, Card, Col, Row, Space, PageHeader } from "antd";
import TutorsCount from "./Tutorscount";
import UserRegister from "./Userregister";
import Sidebar from "../Project/Sidebar";

import RevenueChart from './Revenue'


const ROOT = process.env.REACT_APP_URL;

const { Header, Content, Sider } = Layout;
const { SubMenu } = Menu;

export default class RevenueScreen extends Component {
 state = {
    collapsed: false,
    key:Date.now(),
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "My First dataset",
      backgroundColor: "rgba(255,99,132,0.2)",
      borderColor: "rgba(255,99,132,1)",
      borderWidth: 1,
      hoverBackgroundColor: "rgba(255,99,132,0.4)",
      hoverBorderColor: "rgba(255,99,132,1)",
      data: [65, 59, 80, 81, 56, 55, 40],
    },
  ],
};

getTotalRevenue(){
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
      debugger
      this.setState({
      });
    });
}

componentDidMount() {
  // const mql = window.matchMedia('screen and (max-width: 600px)');
  // if (mql.matches) {
  //   changeNav('TopMenuLayout');
  //   this.setState({ isMobile: true });
  // }
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
        <Sider
          trigger={null}
          theme="light"
          collapsible
          collapsed={this.state.collapsed}
        >
        <Sidebar selectedKey="4" />
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
              <div className="site-card-wrapper">
                <Row gutter={[16 , 16]}>
                  <Col span={6}>
                    <Card title="Card title" bordered={false}>
                      Total no of Tutors
                    </Card>
                  </Col>
                  <Col span={6}>
                    <Card title="Card title" bordered={false}>
                      Total no of Active Tutors
                    </Card>
                  </Col>
                  <Col span={6}>
                    <Card title="Card title" bordered={false}>
                      Total no of Students
                    </Card>
                  </Col>
                  <Col span={6}>
                    <Card title="Card title" bordered={false}>
                      Total no of Tutors
                    </Card>
                  </Col>
                </Row>
              </div>
              <Row gutter={16}>
                <Col span={14}>
                  <Card
                    style={{
                      boxShadow: "5px 8px 24px 5px rgba(208, 216, 243, 0.6)",
                    }}
                  >
                    <RevenueChart />
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
