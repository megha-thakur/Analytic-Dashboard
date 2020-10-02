import React, { Component } from "react";
import { withRouter } from "react-router";
import Contents from "../Project/Adminview";
import app from "../../firebase";
import { Card, Row, Col, Space, Layout, PageHeader, Icon, Drawer, Button } from "antd";
import { MenuFoldOutlined } from "@ant-design/icons";
import Organisationcount from "../charts/Organisationcount";
import UserRegister from "../charts/Userregister";
import Sidebar from "../Project/Sidebar";
import PiChart from "../charts/Piechart";
import InstitutionCourses from "../charts/InstituteCourses";
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
    courseWiseChoaching:[],
    courseWiseChoachingCount:[],
    totalOrg:0,
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
          totalFaculty: res.tutorCount,
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
          cityWiseChoaching: resp.data.map( values => values._id),
          cityWiseChoachingCount: resp.data.map(value => value.count)
        });
      });
  }

  getInstituteCourses(){
    fetch(`${ROOT}dashboardAnalytics/courseWise`, {
      method: "GET",
      headers: {
        "Access-Control-Allow-Credentials": "true",
        authorization: `Bearer ${localStorage.token}`,
      },
    })
      .then((responce) => responce.json())
      .then((resp) => {
        // debugger
        this.setState({
          courseWiseChoaching: resp.courseWiseOrgs?.map( values => values._id),
          courseWiseChoachingCount: resp.courseWiseOrgs?.map(value => value.count)
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
//       <nav className="menuBar">
//       <div className="logo">
//         <a href="">logo</a>
//       </div>
//       <div className="menuCon">
//         <div className="leftMenu">
//           <LeftMenu />
//         </div>
//         <div className="rightMenu">
//             <RightMenu />
//         </div>
//         <Button className="barsMenu" type="primary" onClick={this.showDrawer}>
//           <span className="barsBtn"></span>
//         </Button>
//         <Drawer
//           title="Basic Drawer"
//           placement="right"
//           closable={false}
//           onClose={this.onClose}
//           visible={this.state.visible}
//         >
//           <LeftMenu />
//           <RightMenu />
//         </Drawer>
// </div>
//     </nav>







         <Layout>

 <Sider
 trigger={null}
 collapsible
 collapsed={this.state.collapsed}
 collapsedWidth={0}
 breakpoint="md"
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
            <MenuFoldOutlined
              className="trigger"
              type={this.state.collapsed ? "menu-unfold" : "menu-fold"}
              onClick={this.toggle}
            />
            <PageHeader className="site-page-header" title="Winuall" />
          </Header>

          <Content className="site-layout-background">
            <div className="container-1">
              <div className="site-card-wrapper">
                <Row gutter={[16, 16]}>
                  <Col md={6} sm={24}>
                    <Card style={{ borderRadius: "5px"}}title= {<h4>Total no of Admins</h4>}
                    bordered={false}>
                      <h2>{this.state.totalAdminCount}</h2>
                    </Card>
                  </Col>
                  <Col md={6} sm={24}>
                    <Card style={{ borderRadius: "5px"}}title={<h4>Total no of Students</h4>} bordered={false}>
                      <h2>{this.state.totalStudent}</h2>
                    </Card>
                  </Col>
                  <Col md={6} sm={24}>
                    <Card style={{ borderRadius: "5px"}}title={<h4>Total no of Tutors</h4>} bordered={false}>
                      <h2> {this.state.totalFaculty}</h2>
                    </Card>
                  </Col>
                  <Col md={6} sm={24}>
                  <Card style={{ borderRadius: "5px"}}title={<h4>Total no of Organisation</h4>} bordered={false}>
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
                      <UserRegister data={this.state.totalUser}/>
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

// <button onClick={() => app.auth().signOut()}>Sign out</button>
// <Col md={12} sm={24}>
// <Card
//   style={{
//     boxShadow: "5px 8px 24px 5px rgba(208, 216, 243, 0.6)",
//   }}
// >
//   <RevenueChart />
// </Card>
// </Col>



 // <Sider
        //   trigger={null}
        //   collapsible
        //   collapsed={this.state.collapsed}
        //   collapsedWidth={0}
        //   breakpoint="md"
        //   theme="light"
        // >
        //   <Sidebar selectedKey="1" />
        // </Sider>







         // <Layout>
       
      //   <Content>
      //     <Header
      //       theme="light"
      //       style={{ padding: 0, backgroundColor: "#1890ff" }}
      //     >
      //       {" "}
      //       <MenuFoldOutlined
      //         className="trigger"
      //         type={this.state.collapsed ? "menu-unfold" : "menu-fold"}
      //         onClick={this.toggle}
      //       />
      //       <PageHeader className="site-page-header" title="Winuall" />
      //     </Header>
      //     <Content className="site-layout-background">
      //       <div className="container-1">
      //         <div className="site-card-wrapper">
      //           <Row gutter={[16, 16]}>
      //             <Col md={6} sm={24}>
      //               <Card style={{ borderRadius: "5px"}}title= {<h4>Total no of Admins</h4>}
      //               bordered={false}>
      //                 <h2>{this.state.totalAdminCount}</h2>
      //               </Card>
      //             </Col>
      //             <Col md={6} sm={24}>
      //               <Card style={{ borderRadius: "5px"}}title={<h4>Total no of Students</h4>} bordered={false}>
      //                 <h2>{this.state.totalStudent}</h2>
      //               </Card>
      //             </Col>
      //             <Col md={6} sm={24}>
      //               <Card style={{ borderRadius: "5px"}}title={<h4>Total no of Tutors</h4>} bordered={false}>
      //                 <h2> {this.state.totalFaculty}</h2>
      //               </Card>
      //             </Col>
      //             <Col md={6} sm={24}>
      //             <Card style={{ borderRadius: "5px"}}title={<h4>Total no of Organisation</h4>} bordered={false}>
      //               <h2> {this.state.totalOrg}</h2>
      //             </Card>
      //           </Col>
      //           </Row>
      //         </div>
      //         <Space direction="vertical">
      //           <Row gutter={[16, 16]}>
      //             <Col md={12} sm={24}>
      //               <Card
      //                 style={{
      //                   boxShadow: "5px 8px 24px 5px rgba(208, 216, 243, 0.6)",
      //                 }}
      //               >
      //                 <Organisationcount data={this.state.apiData} />
      //               </Card>
      //             </Col>
      //             <Col md={12} sm={24}>
      //               <Card
      //                 style={{
      //                   boxShadow: "5px 8px 24px 5px rgba(208, 216, 243, 0.6)",
      //                 }}
      //               >
      //                 <UserRegister data={this.state.totalUser}/>
      //               </Card>
      //             </Col>
      //             <Col md={12} sm={24} style={{ marginTop: "20px" }}>
      //               <Card
      //                 style={{
      //                   boxShadow: "5px 8px 24px 5px rgba(208, 216, 243, 0.6)",
      //                 }}
      //               >
      //                 <PiChart data={this.state.cityWiseChoachingCount} labels={this.state.cityWiseChoaching} />
      //               </Card>
      //             </Col>
      //             <Col md={12} sm={24} style={{ marginTop: "20px" }}>
      //               <Card
      //                 style={{
      //                   boxShadow: "5px 8px 24px 5px rgba(208, 216, 243, 0.6)",
      //                 }}
      //               >
      //                 <InstitutionCourses data={this.state.courseWiseChoachingCount} labels={this.state.courseWiseChoaching} />
      //               </Card>
      //             </Col>
      //           </Row>
      //         </Space>
      //       </div>
      //     </Content>
      //   </Content>
      // </Layout>