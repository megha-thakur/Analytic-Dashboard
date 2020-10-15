import React, { Component } from "react";
import { withRouter } from "react-router";
import Contents from "../Project/Adminview";
import app from "../../firebase";
import { Card, Row, Col, Space, Layout, PageHeader, Icon, Drawer, Button } from "antd";
import { MenuFoldOutlined, MenuOutlined } from "@ant-design/icons";
import Organisationcount from "../charts/Organisationcount";
import UserRegister from "../charts/Userregister";
import Sidebar from "../Project/Sidebar";
import PiChart from "../charts/Piechart";
import InstitutionCourses from "../charts/InstituteCourses";
import Signout from './Signout'
import LeftMenu from '../Project/leftmenu'
import RightMenu from '../Project/rightmenu'
const ROOT = process.env.REACT_APP_URL;

const { Header, Sider, Content } = Layout;

class Home extends Component {
  state = {
    collapsed: false,
    apiData: [],
    totalStudent: 0,
    totalFaculty: 0,
    totalAdminCount: 0,
    totalUser: [],
    cityWiseChoaching: [],
    cityWiseChoachingCount: [],
    isMobile: false,
    courseWiseChoaching: [],
    courseWiseChoachingCount: [],
    totalOrg: 0,
    visible: false
  };
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
  getTotalStudent() {
    fetch(`${ROOT}dashboardAnalytics/studentCount`, {
      method: "GET",
      headers: {
        "Access-Control-Allow-Credentials": "true",
        authorization: `Bearer ${localStorage.token}`,
      },
    })
      .then((responce) => responce.json())
      .then((res) => {
        this.setState({
          totalStudent: res.studentCount,
        });
      });
  }
  getTotalUser() {
    fetch(`${ROOT}dashboardAnalytics/userCount`, {
      method: "GET",
      headers: {
        "Access-Control-Allow-Credentials": "true",
        authorization: `Bearer ${localStorage.token}`,
      },
    })
      .then((responce) => responce.json())
      .then((res) => {
        this.setState({
          totalUser: res,
        });
      });
  }
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
  getTotalAdmin() {
    fetch(`${ROOT}dashboardAnalytics/adminCount`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": "true",
        authorization: `Bearer ${localStorage.token}`,
      },
    })
      .then((responce) => responce.json())
      .then((res) => {
        this.setState({
          totalAdminCount: res.adminCount,
        });
      });
  }
  getOrganisation() {
    fetch(`${ROOT}dashboardAnalytics/orgCount`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": "true",
        authorization: `Bearer ${localStorage.token}`,
      },
    })
      .then((responce) => responce.json())
      .then((res) => {

        this.setState({
          apiData: res,
          totalOrg: res.total
        });
      });
  }
  getTotalFaculty() {
    fetch(`${ROOT}dashboardAnalytics/tutorCount`, {
      method: "GET",
      headers: {
        "Access-Control-Allow-Credentials": "true",
        authorization: `Bearer ${localStorage.token}`,
      },
    })
      .then((responce) => responce.json())
      .then((res) => {
        this.setState({
          totalFaculty: res.total,
        });
      });
  }
  getCityWiseCoaching() {
    fetch(`${ROOT}dashboardAnalytics/cityWise`, {
      method: "GET",
      headers: {
        "Access-Control-Allow-Credentials": "true",
        authorization: `Bearer ${localStorage.token}`,
      },
    })
      .then((responce) => responce.json())
      .then((resp) => {
        this.setState({
          cityWiseChoaching: resp.data?.map(values => values._id),
          cityWiseChoachingCount: resp.data?.map(value => value.count)
        });
      });
  }
  getInstituteCourses() {
    fetch(`${ROOT}dashboardAnalytics/courseWise`, {
      method: "GET",
      headers: {
        "Access-Control-Allow-Credentials": "true",
        authorization: `Bearer ${localStorage.token}`,
      },
    })
      .then((responce) => responce.json())
      .then((resp) => {
        this.setState({
          courseWiseChoaching: resp.courseWiseOrgs?.map(values => values._id),
          courseWiseChoachingCount: resp.courseWiseOrgs?.map(value => value.count)
        });
      });

  }
  componentDidMount() {

    const token = localStorage.getItem("token");
    if (token) {
      this.getTotalStudent();
      this.getOrganisation()
      this.getTotalFaculty();
      this.getTotalAdmin();
      this.getCityWiseCoaching();
      this.getTotalUser();
      this.getInstituteCourses();
    } else {
      this.props.history.push("/login");
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
            <Sidebar selectedKey="1" />
          </Sider>
        </Drawer>
        <Sider
          trigger={null}
          collapsedWidth={0}
          breakpoint="lg"
          theme="light"
        >
          <Sidebar selectedKey="1" />
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
                <Row gutter={[16, 16]}>
                  <Col md={6} sm={24}>
                    <Card style={{ borderRadius: "5px" }} title={<h4>Total no of Admins</h4>}
                      bordered={false}>
                      <h2>{this.state.totalAdminCount}</h2>
                    </Card>
                  </Col>
                  <Col md={6} sm={24}>
                    <Card style={{ borderRadius: "5px" }} title={<h4>Total no of Students</h4>} bordered={false}>
                      <h2>{this.state.totalStudent}</h2>
                    </Card>
                  </Col>
                  <Col md={6} sm={24}>
                    <Card style={{ borderRadius: "5px" }} title={<h4>Total no of Tutors</h4>} bordered={false}>
                      <h2> {this.state.totalFaculty}</h2>
                    </Card>
                  </Col>
                  <Col md={6} sm={24}>
                    <Card style={{ borderRadius: "5px" }} title={<h4>Total no of Organisation</h4>} bordered={false}>
                      <h2> {this.state.totalOrg}</h2>
                    </Card>
                  </Col>
                </Row>
              </div>
              <Space direction="vertical">
                <Row gutter={[16, 16]}>
                  <Col md={12} sm={24}>
                    <Card
                      style={{
                        boxShadow: "5px 8px 24px 5px rgba(208, 216, 243, 0.6)",
                      }}
                    >
                      <Organisationcount data={this.state.apiData} />
                    </Card>
                  </Col>
                  <Col md={12} sm={24}>
                    <Card
                      style={{
                        boxShadow: "5px 8px 24px 5px rgba(208, 216, 243, 0.6)",
                      }}
                    >
                      <UserRegister data={this.state.totalUser} />
                    </Card>
                  </Col>
                  <Col md={12} sm={24} style={{ marginTop: "20px" }}>
                    <Card
                      style={{
                        boxShadow: "5px 8px 24px 5px rgba(208, 216, 243, 0.6)",
                      }}
                    >
                      <PiChart data={this.state.cityWiseChoachingCount} labels={this.state.cityWiseChoaching} />
                    </Card>
                  </Col>
                  <Col md={12} sm={24} style={{ marginTop: "20px" }}>
                    <Card
                      style={{
                        boxShadow: "5px 8px 24px 5px rgba(208, 216, 243, 0.6)",
                      }}
                    >
                      <InstitutionCourses data={this.state.courseWiseChoachingCount} labels={this.state.courseWiseChoaching} />
                    </Card>
                  </Col>
                </Row>
              </Space>
            </div>
          </Content>
        </Content>
      </Layout>
    );
  }
}

export default withRouter(Home);