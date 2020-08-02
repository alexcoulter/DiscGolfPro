import React, { Component } from 'react';
import disc from '../aviar.png';
import Slider from '../components/Slider';


class StartRound extends Component {
  constructor(props) {
    super(props);
    this.state = {
      course: "",
      layout: "",
      numHoles: 18,
      hole: 1,
      score: 0,
      roundStarted: false,
      message: ""
    };
  }


  start = (e) => {
    e.preventDefault();
    this.setState({
      roundStarted: true
    });
  }

  next = (e) => {
    e.preventDefault();
    let newHole = this.state.hole + 1;
    this.setState({
      hole: newHole
    });
  }

  birdie = (e) => {
    let newScore = this.state.score + 2;
    let newHole = this.state.hole + 1;
    this.setState({ 
      score: newScore,
      hole: newHole,
      message: "Nice Birdie!" 
    });
  }
  par = (e) => {
    let newScore = this.state.score + 3;
    let newHole = this.state.hole + 1;
    this.setState({ 
      score: newScore,
      hole: newHole,
      message: "Good Par!"
    });
  }
  bogey = (e) => {
    let newScore = this.state.score + 4;
    let newHole = this.state.hole + 1;
    this.setState({ 
      score: newScore,
      hole: newHole,
      message: "Bogey's not too bad!"
      });
  }

  handleCourseChange = (event) => {
    this.setState({ course: event.target.value });
  }

  handleLayoutChange = (event) => {
    this.setState({ layout: event.target.value });
  }


  getNumHoles = (event, value) => {
    this.setState({
      numHoles: value
    });

  }


  render() {
    if (!this.state.roundStarted) {
      return (
        <div className="start-main">
          <h4>Start a new round:</h4>
          <p>What course are you playing?</p>
          <div className="input-group course-input mb-3">
            <input type="text" className="form-control" id="courseName" onChange={this.handleCourseChange} placeholder="Course Name" aria-label="Course Name" aria-describedby="button-addon2" />
            <div className="input-group-append">
            </div>
          </div>

          <Slider getNumHoles={this.getNumHoles} />
          <p>This course has {this.state.numHoles} holes</p>

          <p>What Layout are you playing?</p>
          <div className="input-group course-input mb-3">
            <input type="text" className="form-control" onChange={this.handleLayoutChange} placeholder="( red, white, blue, etc )" aria-label="Layout Name" aria-describedby="button-addon2" />
            <div className="input-group-append">
            </div>
          </div>
          <img src={disc} className="disc" alt="spinning disc" /><br />

          <button className="btn btn-lg btn-success start-play-btn" onClick={this.start} type="button" id="course-btn">Start Playing!</button>

        </div>
      )
    }
    else if (this.state.hole <= this.state.numHoles) {
      return (
        <div className="hole-start">
          <h1> Hole {this.state.hole}</h1>
          <h1>What did you score?</h1>
          <button className="btn btn-lg btn-success birdie-btn" onClick={this.birdie} type="button" id="birdie-btn">Birdie</button>
          <button className="btn btn-lg btn-warning par-btn" onClick={this.par} type="button" id="par-btn">Par</button>
          <button className="btn btn-lg btn-danger bogey-btn" onClick={this.bogey} type="button" id="bogey-btn">Bogey</button>
          <h3>{this.state.message}</h3>
  
        </div>
      )
    }
    else {
      return (
        <div className="hole-start">
          <h1> Good Job! Your round is over</h1>
          <h1> Your total score was {this.state.score}
          {this.state.layout ? ` on the ${this.state.layout} layout` : ""}
          {this.state.course ? ` at the ${this.state.course} course` : ""}
          </h1>
        </div>
      )

    }
  }
}
export default StartRound