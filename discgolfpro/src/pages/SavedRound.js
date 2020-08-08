import React, { Component } from 'react';

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
     <br></br><br></br>
       <h4>...Coming Soon!</h4>
      </div>
    )
  }
}
export default SavedRound