import React, { Component } from 'react';
import disc from '../aviar.png';
import Slider from '../components/Slider';


class StartRound extends Component {
  constructor(props) {
    super(props);
    this.state = {
      courseInput: "",
      layoutInput: "",
      course: "",
      layout: "",
      numHoles: 18
    };
  }

  handleCourseChange = (event) => {
    this.setState({ courseInput: event.target.value });
  }

  handleLayoutChange = (event) => {
    console.log(event.target.value);
    this.setState({ layoutInput: event.target.value });
  }

  setCourse = (e) => {
    e.preventDefault();
    this.setState({
      course: this.state.courseInput
    });
  }  

  setLayout = (e) => {
    e.preventDefault();
    this.setState({
      layout: this.state.layoutInput
    });
  }  

   getNumHoles = (event,value) => {
    this.setState({
      numHoles: value
    });
  }

  redirect = () => {
    alert("here we go!!!");
  }


  render() {
    return (
      <div className="start-main">
        <h4>Start a new round:</h4>
        <p>What course are you playing?</p>
        <div className="input-group course-input mb-3">
          <input type="text" className="form-control" onChange={this.handleCourseChange} placeholder="Course Name" aria-label="Course Name" aria-describedby="button-addon2" />
          <div className="input-group-append">
            <button className="btn btn-info" onClick={this.setCourse} type="button" id="course-btn">Submit</button>
          </div>
        </div>
        <p>{this.state.course ? `You're Playing: ${this.state.course}` : ""}</p>

      <Slider getNumHoles={this.getNumHoles} />
      <p>This course has {this.state.numHoles} holes</p>

      <p>What Layout are you playing?</p>
        <div className="input-group course-input mb-3">
          <input type="text" className="form-control" onChange={this.handleLayoutChange} placeholder="( red, white, blue, etc )" aria-label="Layout Name" aria-describedby="button-addon2" />
          <div className="input-group-append">
            <button className="btn btn-info" onClick={this.setLayout} type="button" id="course-btn">Submit</button>
          </div>
        </div>
        <p>{this.state.layout ? `You're Playing the ${this.state.layout} layout` : ""}</p>
        <img src={disc} className="disc" alt="spinning disc" /><br />
        <button className="btn btn-lg btn-success start-play-btn" onClick={this.redirect} type="button" id="course-btn">Start Playing!</button>
       
      </div>
    )
  }
}
export default StartRound