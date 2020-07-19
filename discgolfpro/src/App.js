import React from 'react';
import logo from './disc.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Disc Golf Pro</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         For all your Disc Golf needs
        </p>
      </header>
      <span>Start a round -</span><span>- View a saved round</span>
    </div>
  );
}

export default App;
