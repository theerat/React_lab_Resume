import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="app-left">

          <div className="card">
            <img alt="profile" className="pro-Images" src={require("./Images/myPic.jpg")} />
          </div>
          <h4 className="name"><b>Theerat Kanisaraphongphon</b></h4>
          <p>Software Developer</p>

          <div>
            <h4 className="title">Skill</h4>
            <p className="title-p">C#</p>
            <p className="title-p">JavaScrpt</p>
            <p className="title-p">MVC</p>
            <p className="title-p">.Net Core</p>
          </div>
        </div>
        <div className="app-right">
          <h2 className="title">Experience</h2>
        </div>
        <div className="app-right">

        </div>
        <div className="app-right">
          <h2 className="title">Education</h2>
        </div>
      </div >
    );
  }
}

export default App;
