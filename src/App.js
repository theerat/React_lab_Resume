import React, { Component } from 'react';
import { Rate, Card, Timeline, Row, Col } from 'antd';
import './App.css';

class App extends Component {

  render() {

    const { Meta } = Card;
    return (
      <div className="App ant-card ant-card-bordered" style={{}}>
        <Row>
          <Col lg={12} md={12}>
            <Card
              hoverable
              style={{ width: 300 }}
              cover={<img alt="profile" className="pro-Images" src={require("./Images/myPic.jpg")} />}
            > <Meta
                title="Theerat Kanisaraphongphon"
                description="Software Developer"
              />
            </Card>
            <div style={{ marginTop: 50 }}>
              <div>
                <h2>Education</h2>
                <ul>
                  <li><b>RMUTK</b></li>
                </ul>
              </div>
            </div>
          </Col>
          <Col lg={12} md={12}>
            <div>
              <h2>Experience</h2>
              <Timeline className="elTimeline">
                <Timeline.Item><b>2558-2560 - TECHCONSBIZ CO, LTD</b></Timeline.Item>
                <Timeline.Item><b>2560-2561 - LH BANK PUB CO, LTD</b></Timeline.Item>
                <Timeline.Item><b>PRESENT - OUTSOURCE (PTT DIGITAL)</b></Timeline.Item>
              </Timeline>,
          </div>
            <div style={{ marginTop: 20 }}>
              <h2>Skill</h2>
              <ul>
                <li ><Rate allowHalf defaultValue={4} /><b>C#</b></li>
                <li><Rate allowHalf defaultValue={3} /><b>API</b></li>
                <li><Rate allowHalf defaultValue={3} /><b>.NET CORE</b></li>
                <li><Rate allowHalf defaultValue={3} /><b>SHAREPOINT</b></li>
                <li><Rate allowHalf defaultValue={2} /><b>JQUERY</b></li>
              </ul>
            </div>
          </Col>

        </Row>
      </div>
    );
  }
}

export default App;
