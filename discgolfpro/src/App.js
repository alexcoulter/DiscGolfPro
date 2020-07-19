import React from 'react';
import logo from './disc.png';
import './App.css';

function App() {

  function startRound(){
    alert("started the round!");
  }

  function savedRound(){
    alert("Here are your saved rounds!");
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Disc Golf Pro</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         For all your Disc Golf needs
        </p>
      </header>
      <span onClick={startRound}>Start a round -</span><span onClick={savedRound}>- View a saved round</span>
    </div>
  );
}

export default App;
