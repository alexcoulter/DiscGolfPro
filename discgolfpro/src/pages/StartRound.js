import React, { Component } from 'react';
import ace from '../kid.gif';
import par from '../parDog.gif';
import bogey from '../bobby.jpg';
import bird from '../bird.gif';
import multiBogey from '../milhouse.gif'
import Slider from '../components/Slider';

class StartRound extends Component {
  constructor(props) {
    super(props);
  
    const scoreArray = JSON.parse(localStorage.getItem("scoreArray")) || [];
    const hole = parseInt(localStorage.getItem("hole")) || 1;
    const course = localStorage.getItem("course") || "";
    const layout = localStorage.getItem("layout") || "";
    const score = localStorage.getItem("score") || 0;

    this.state = {
      course: course,
      layout: layout,
      numHoles: 18,
      hole: hole,
      scoreInput: 0,
      score: score,
      scoreArray: scoreArray,
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

  birdie = (e) => {
    let newScore = parseInt(this.state.score) + 2;
    let newScoreArray = this.state.scoreArray;
    newScoreArray.push(2);
    localStorage.setItem("score", newScore);
    localStorage.setItem("scoreArray", JSON.stringify(newScoreArray));
    let newHole = this.state.hole + 1;
    localStorage.setItem("hole", newHole);
    this.setState({
      score: newScore,
      scoreArray: newScoreArray,
      hole: newHole,
      birdie: true,
      bogey: false,
      par: false,
      ace: false,
      multiBogey: false,
      message: "Nice Birdie!"
    });
    this.triggerAnimation();
  }
  par = (e) => {
    let newScore = parseInt(this.state.score) + 3;
    let newHole = this.state.hole + 1;
    localStorage.setItem("score", newScore);
    localStorage.setItem("hole", newHole);
    let newScoreArray = this.state.scoreArray;
    newScoreArray.push(3);
    localStorage.setItem("scoreArray", JSON.stringify(newScoreArray));
    this.setState({
      score: newScore,
      scoreArray: newScoreArray,
      hole: newHole,
      birdie: false,
      bogey: false,
      par: true,
      ace: false,
      multiBogey: false,
      message: "Good Par!"
    });
    this.triggerAnimation();
  }
  bogey = (e) => {
    let newScore = parseInt(this.state.score) + 4;
    let newHole = this.state.hole + 1;
    localStorage.setItem("score", newScore);
    localStorage.setItem("hole", newHole);
    let newScoreArray = this.state.scoreArray;
    newScoreArray.push(4);
    localStorage.setItem("scoreArray", JSON.stringify(newScoreArray));
    this.setState({
      score: newScore,
      scoreArray: newScoreArray,
      hole: newHole,
      birdie: false,
      bogey: true,
      ace: false,
      multiBogey: false,
      par: false,
      message: "Bogey's not too bad!"
    });
    this.triggerAnimation();
  }

  triggerAnimation = () => {
    const element = document.getElementById("holeNum");
    const element2 = document.getElementById("courseInfo");
    element.classList.remove("hole-num");
    element2.classList.remove("hole-num");
    void element.offsetWidth;
    void element2.offsetWidth;
    element.classList.add("hole-num");
    element2.classList.add("hole-num");
    document.getElementById("otherScoreDiv").classList.add("hidden");
  }

  handleCourseChange = (event) => {
    this.setState({ course: event.target.value });
    localStorage.setItem("course", event.target.value);
  }

  handleLayoutChange = (event) => {
    this.setState({ layout: event.target.value });
    localStorage.setItem("layout", event.target.value);
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
      message = `A ${score} is not great, but there's always next hole`
    }
    if (score > 0) {
      document.getElementById("otherScoreDiv").classList.add("hidden");
      newHole = this.state.hole + 1;
      localStorage.setItem("hole", newHole);
      newScore = parseInt(this.state.score) + score;
      localStorage.setItem("score", newScore);
      newScoreArray = this.state.scoreArray;
      newScoreArray.push(score);
      localStorage.setItem("scoreArray", JSON.stringify(newScoreArray));
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

  other = () => {
    document.getElementById("otherScoreDiv").classList.remove("hidden");
  }

  quit = () => {
    localStorage.clear();
    // window.location.reload(false);
    const { history } = this.props;
    history.push("/")
  }

  play = () => {
    localStorage.clear();
    window.location.reload(false);
  }


  render() {
    if (!this.state.roundStarted && this.state.hole === 1) {
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
      var relativeScore = "Even";
      if((this.state.score -((this.state.hole -1) * 3)) > 0){
        relativeScore = "+" + (this.state.score -((this.state.hole -1) * 3));
      }
        else if((this.state.score -((this.state.hole -1) * 3)) === 0){
          relativeScore = "Even";
      }
      else {
        relativeScore =  this.state.score -((this.state.hole -1) * 3);
      }

      return (
        <div className="hole-start">
          <h4 className="hole-num" id="courseInfo">
            {this.state.course ? `${this.state.course.toUpperCase()}` : ""}
            {this.state.layout ? ` ${this.state.layout.toUpperCase()}` : ""}
          </h4>
          <div id="holeNum" className="hole-num">
            <h5> * * * Hole {this.state.hole} * * *</h5>
          </div>
          <h6>What did you score?</h6>
          <div className="score-btn">
            <button className="btn btn-lg btn-success birdie-btn" onClick={this.birdie} type="button" id="birdie-btn">Birdie</button>
            <button className="btn btn-lg btn-warning par-btn" onClick={this.par} type="button" id="par-btn">Par</button>
            <button className="btn btn-lg btn-danger bogey-btn" onClick={this.bogey} type="button" id="bogey-btn">Bogey</button>
            <button className="btn btn-lg btn-primary other-btn" onClick={this.other} type="button" id="other-btn">Other</button>
          </div>
          <div id="otherScoreDiv" className="input-group my-3 text-center other-div hidden">
            <span id="otherScore">Enter Your Score: </span>
            <input type="number" className="form-control score-num" onChange={this.handleScoreChange} placeholder="#" aria-label="Layout Name" aria-describedby="button-addon2" />
            <div className="input-group-append">
              <button className="btn btn-primary" onClick={this.manualScore} type="button" id="course-btn">Submit</button>
            </div>
          </div>
          <img src={ace} className={this.state.ace ? "score-img" : "score-img hidden"} alt="id throwing the disc in" />
          <img src={bird} className={this.state.birdie ? "score-img" : "score-img hidden"} id="birdImg" alt="Bird flying" />
          <img src={par} className={this.state.par ? "score-img" : "score-img hidden"} alt="dog jumping on frisbee" />
          <img src={multiBogey} className={this.state.multiBogey ? "score-img" : "score-img hidden"} alt="Milhouse throwing a frisbee" />
          <img src={bogey} className={this.state.bogey ? "score-img" : "score-img hidden"}  alt="Bobby Hill as a disc golfer" />
          <h5>{this.state.message}</h5>
          <br />
          <h5>Total Score: {this.state.score} {` (${relativeScore})`}</h5>
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

          <button className="btn btn-lg btn-danger quit-btn" onClick={this.quit} type="button" id="quit-btn">Quit Game</button>
        </div>
      )
    }
    else {
      localStorage.clear();
      if((this.state.score -((this.state.hole -1) * 3)) > 0){
        relativeScore = "+" + (this.state.score -((this.state.hole -1) * 3));
      }
        else if((this.state.score -((this.state.hole -1) * 3)) === 0){
          relativeScore = "Even";
      }
      else {
        relativeScore =  this.state.score -((this.state.hole -1) * 3);
      }

      return (
        <div className="hole-start final-score">
          <h4> Good Job! Your round is over</h4>
          <h4> Your total score was {this.state.score} {`(${relativeScore})`}
            {this.state.layout ? ` on the ${this.state.layout} layout` : ""}
            {this.state.course ? ` at ${this.state.course}` : ""}
          </h4>
          <button className="btn btn-lg btn-primary play-btn" onClick={this.play} type="button">Play Again</button>
          
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