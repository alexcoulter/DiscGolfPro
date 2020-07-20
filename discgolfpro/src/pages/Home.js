import React, { Component } from 'react';
import logo from '../disc.png';
import disc from '../aviar.png';
import '../App.css';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: ""
    };
  }

  render() {
    return (
      <div>
        <div className="main">
          <h1>Disc Golf Pro</h1>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            For all your Disc Golf needs
        </p>
        
        <br></br>
        <img src={disc} className="disc" alt="spinning disc" />
        </div>
      </div>
    )
  }
}
export default Home