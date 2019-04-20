import React, { Component } from 'react';
import { Rate, Card, Timeline, Row, Col, Divider, Icon } from 'antd';
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
              className="card"
              cover={<img alt="profile" className="pro-Images" src={require("./Images/my_profile.jpg")} />}
            > <Meta
                title="Theerat Kanisaraphongphon"
                description="Software Developer"
              />
            </Card>
            <div style={{ marginTop: 50 }}>
              <div>
                <Divider orientation="left">EDUCATION</Divider>
                <ul>
                  <li><b>Rajamangala University of Technology Krungthep (RMUTK)</b></li>
                </ul>
              </div>
            </div>
          </Col>
          <Col lg={12} md={12}>
            <div>
              <Divider orientation="left">EXPERIENCE</Divider>
              <Timeline className="elTimeline">
                <Timeline.Item><b>2558-2560 - TECHCONSBIZ CO, LTD</b></Timeline.Item>
                <Timeline.Item><b>2560-2561 - LH BANK PUB CO, LTD</b></Timeline.Item>
                <Timeline.Item><b>PRESENT - OUTSOURCE (PTT DIGITAL)</b></Timeline.Item>
              </Timeline>,
          </div>
            <div style={{ marginTop: 20 }}>
              <Divider orientation="left">SKILL</Divider>
              <ul>
                <li ><Rate allowHalf defaultValue={4} /><b>C#</b></li>
                <li><Rate allowHalf defaultValue={3} /><b>API</b></li>
                <li><Rate allowHalf defaultValue={3} /><b>.NET CORE</b></li>
                <li><Rate allowHalf defaultValue={3} /><b>SHAREPOINT</b></li>
                <li><Rate allowHalf defaultValue={2} /><b>JQUERY</b></li>
              </ul>
            </div>
            <div style={{ marginTop: 20 }}>
              <Divider orientation="left">CONNECT ME AT</Divider>
              <ul>
                <li><Icon type="facebook" style={{ fontSize: '30px', paddingRight: '10px', paddingTop: '10px' }} /><b><a href="https://www.facebook.com/julong.boybas">Theerat Kanisaraphongphon</a></b></li>
                <li><Icon type="github" style={{ fontSize: '30px', paddingRight: '10px', paddingTop: '10px' }} /><b><a href="https://github.com/theerat">https://github.com/theerat</a></b></li>
              </ul>
            </div>
          </Col>

        </Row>
      </div>
    );
  }
}

export default App;
