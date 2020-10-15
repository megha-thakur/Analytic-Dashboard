import React, { Component } from "react";
import { withRouter } from "react-router";

import { Menu } from "antd";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";

const { SubMenu } = Menu;

class Sidebar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collapsed: true,
    };

    this.toggle = () => {
      this.setState({
        collapsed: !this.state.collapsed,
      });
    };
  }
  render() {
    return (
      <div>
        <Menu mode="horizontal"
          onClick={this.handleClick}
          selectedKeys={[this.props.selectedKey]}
          mode="inline"
        >
              <Menu.Item
                key="1"
                onClick={() => {
                  this.props.history.push("/");
                }}
              >
                Organisation
              </Menu.Item>
              <Menu.Item
                key="2"
                onClick={() => {
                  this.props.history.push("./tutorscreen");
                }}
              >
                Tutor
              </Menu.Item>
              <Menu.Item
                key="3"
                onClick={() => {
                  this.props.history.push("./studentscreen");
                }}
              >
                Student
              </Menu.Item>
              <Menu.Item
              key="4"
              onClick={() => {
                this.props.history.push("./revenuescreen");
              }}
            >
              Revenue
            </Menu.Item>
            <Menu.Item
            key="5"
            onClick={() => {
              this.props.history.push("./QuizattemptScreen");
            }}
          >
            Quiz Attempts
          </Menu.Item>
          <Menu.Item
          key="6"
          onClick={() => {
            this.props.history.push("./Practice");
          }}
        >
          Practice Quiz Attempts
        </Menu.Item>
     
      <Menu.Item
      key="8"
      onClick={() => {
        this.props.history.push("./Quiz");
      }}
    >
      Total Quiz 
    </Menu.Item>
        </Menu>
      </div>
    );
  }
}

export default withRouter(Sidebar);
