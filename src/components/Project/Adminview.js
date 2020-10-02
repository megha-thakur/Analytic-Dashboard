import React, { Component } from 'react'
import { Card, Row, Col } from 'antd';

export default class AdminView extends React.Component {
  render() {
    return (
      <div>
      <nav class="navbar navbar-light bg-light">
      <a class="navbar-brand" href="#">Navbar</a>
    </nav>
        <br />
        <Row gutter={16}>
        <Col>
        <Card title="Total No of organisation"  style={{ width: 300 }} >
        <p>Card content</p>
        <p>Card content</p>
      </Card>
      </Col>
      <Col>
      <Card title="No of coachings"  style={{ width: 300 }}>
      <p>Card content</p>
      <p>Card content</p>
      <p>Card content</p>
    </Card>
    </Col>
    <Col>
    <Card title="No of students"  style={{ width: 300 }}>
    <p>Card content</p>
    <p>Card content</p>
    <p>Card content</p>
  </Card>
  </Col>
  <Col>
  <Card title="No of tutors"  style={{ width: 300 }}>
  <p>Card content</p>
  <p>Card content</p>
  <p>Card content</p>
</Card>
</Col>
</Row>
      </div>
    );
  }
}