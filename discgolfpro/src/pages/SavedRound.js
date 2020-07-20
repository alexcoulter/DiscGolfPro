import React, { Component } from 'react';
import disc from '../aviar.png';


class SavedRound extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: ""
    };
  }

  render() {
    return (
      <div className="saved-main">
      <h4>Your saved rounds:</h4>
     
        <img src={disc} className="disc" alt="spinning disc" />
      </div>
    )
  }
}
export default SavedRound