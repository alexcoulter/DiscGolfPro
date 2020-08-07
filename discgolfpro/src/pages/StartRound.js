import React, { Component } from 'react';
import par from '../bobby.jpg';
import bird from '../bird.gif';
import bogey from '../milhouse.gif'
import Slider from '../components/Slider';

class StartRound extends Component {
  constructor(props) {
    super(props);
    this.state = {
      course: "",
      layout: "",
      numHoles: 18,
      hole: 1,
      scoreInput: 0,
      score: 0,
      scoreArray: [],
      roundStarted: false,
      message: "",
      par: false,
      birdie: false,
      bogey: false,
      ace: false,
      multiBogey: false
    };
  }

  start = (e) => {
    e.preventDefault();
    this.setState({
      roundStarted: true
    });
  }

  // next = (e) => {
  //   e.preventDefault();
  //   let newHole = this.state.hole + 1;
  //   this.setState({
  //     hole: newHole
  //   });
  // }

  birdie = (e) => {
    let newScore = this.state.score + 2;
    let newScoreArray = this.state.scoreArray;
    newScoreArray.push(2);
    let newHole = this.state.hole + 1;
    this.setState({
      score: newScore,
      scoreArray: newScoreArray,
      hole: newHole,
      birdie: true,
      bogey: false,
      par: false,
      message: "Nice Birdie!"
    });
    this.triggerAnimation();
  }
  par = (e) => {
    let newScore = this.state.score + 3;
    let newHole = this.state.hole + 1;
    let newScoreArray = this.state.scoreArray;
    newScoreArray.push(3);
    this.setState({
      score: newScore,
      scoreArray: newScoreArray,
      hole: newHole,
      birdie: false,
      bogey: false,
      par: true,
      message: "Good Par!"
    });
    this.triggerAnimation();
  }
  bogey = (e) => {
    let newScore = this.state.score + 4;
    let newHole = this.state.hole + 1;
    let newScoreArray = this.state.scoreArray;
    newScoreArray.push(4);
    this.setState({
      score: newScore,
      scoreArray: newScoreArray,
      hole: newHole,
      birdie: false,
      bogey: true,
      par: false,
      message: "Bogey's not too bad!"
    });
    this.triggerAnimation();
  }

  triggerAnimation = () => {
    const element = document.getElementById("holeNum");
    element.classList.remove("hole-num");
    void element.offsetWidth;
    element.classList.add("hole-num");
  }

  handleCourseChange = (event) => {
    this.setState({ course: event.target.value });
  }

  handleLayoutChange = (event) => {
    this.setState({ layout: event.target.value });
  }

  handleScoreChange = (event) => {
    console.log(event.target.value);
    this.setState({ scoreInput: event.target.value });
  }

  manualScore = (e) => {
    let score = parseInt(this.state.scoreInput);
    let ace = false;
    let multiBogey = false;
    let message = "";
    let newHole, newScore, newScoreArray;
    if (score === 1) {
      ace = true;
      message = "Wow, an Ace! You must be awesome!"
    }
    else if (score > 4) {
      multiBogey = true;
      message = "Not great, but there's always next hole"
    }
    if (score > 0) {
      newHole = this.state.hole + 1;
      newScore = this.state.score + score;
      newScoreArray = this.state.scoreArray;
      newScoreArray.push(score);
      this.setState({
        score: newScore,
        scoreArray: newScoreArray,
        hole: newHole,
        birdie: false,
        bogey: false,
        par: false,
        ace: ace,
        multiBogey: multiBogey,
        message: message
      });
    }
    this.triggerAnimation();
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

          <button className="btn btn-lg btn-success start-play-btn" onClick={this.start} type="button" id="course-btn">Start Playing!</button>

        </div>
      )
    }
    else if (this.state.hole <= this.state.numHoles) {
      return (
        <div className="hole-start">
          <h3>
            {this.state.course ? `${this.state.course.toUpperCase()}` : ""}
            {this.state.layout ? ` ${this.state.layout.toUpperCase()}` : ""}
          </h3>
          <div id="holeNum" class ="hole-num">
            <h4> *** Hole {this.state.hole} ***</h4>
          </div>
          <h4>What did you score?</h4>
          <button className="btn btn-lg btn-success birdie-btn score-btn" onClick={this.birdie} type="button" id="birdie-btn">Birdie</button>
          <button className="btn btn-lg btn-warning par-btn score-btn" onClick={this.par} type="button" id="par-btn">Par</button>
          <button className="btn btn-lg btn-danger bogey-btn score-btn" onClick={this.bogey} type="button" id="bogey-btn">Bogey</button>
          <div className="input-group my-3 text-center">
            <span id="otherScore">Other Score: </span>
            <input type="number" className="form-control score-num" onChange={this.handleScoreChange} placeholder="5" aria-label="Layout Name" aria-describedby="button-addon2" />
            <div className="input-group-append">
              <button className="btn btn-info" onClick={this.manualScore} type="button" id="course-btn">Submit</button>
            </div>
          </div>
          <img src={bird} className={this.state.birdie ? "score-img" : "score-img hidden"} id="birdImg" alt="Bird flying" />
          <img src={bogey} className={this.state.bogey ? "score-img" : "score-img hidden"} id="bogeyImg" alt="Milhouse throwing a frisbee" />
          <img src={par} className={this.state.par ? "score-img" : "score-img hidden"} id="parImg" alt="Bobby Hill as a disc golfer" />
          <h4>{this.state.message}</h4>
          <br />


          {this.state.scoreArray[0] ? <table className="score-table">
            <thead>
              <tr>
                <th>Hole</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Score
                </td>
              </tr>
            </tbody>
          </table> : ""}

          {this.state.scoreArray.map((score, index) => (
            <table className="score-table" key={index}>
              <thead>
                <tr>
                  <th>{index + 1}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    {score}
                  </td>
                </tr>
              </tbody>
            </table>
          ))}
        </div>
      )
    }
    else {
      return (
        <div className="hole-start">
          <h3> Good Job! Your round is over</h3>
          <h3> Your total score was {this.state.score}
            {this.state.layout ? ` on the ${this.state.layout} layout` : ""}
            {this.state.course ? ` at the ${this.state.course} course` : ""}
          </h3>
          <br />
          {this.state.scoreArray[0] ? <table className="score-table">
            <thead>
              <tr>
                <th>Hole</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Score
                </td>
              </tr>
            </tbody>
          </table> : ""}



          {this.state.scoreArray.map((score, index) => (
            <table className="score-table" key={index}>
              <thead>
                <tr>
                  <th>{index + 1}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    {score}
                  </td>
                </tr>
              </tbody>
            </table>
          ))}
        </div>
      )

    }
  }
}
export default StartRound