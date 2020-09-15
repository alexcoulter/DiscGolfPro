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

  discClick = () => {
    var disc = document.getElementById("disc");
    disc.animate({marginLeft:"400%"},
    { duration: 1600, 
      easing: 'ease-in-out',
      iterations: 1        
});
    
  }

  render() {
    return (
      
        <div className="main">
          <h1>Disc Golf Pro</h1>
          <img src={logo} className="basket" alt="logo" />
          <p className = "whatADay">
            What a day to play a round of disc golf!
          </p>
          <br></br>
          <img src={disc} className="disc" id="disc" alt="spinning disc" onClick={this.discClick} />
        </div>
      
    )
  }
}
export default Home