import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import StartRound from './pages/StartRound';
import SavedRound from './pages/SavedRound';
import './App.css';

function App() {

  return (
    <>
      <HashRouter>
        <Navbar />
    <Switch>
      <Route exact path="/start"  component={StartRound} />
      <Route exact path="/saved" component={SavedRound} />
      <Route path="/" component={Home} />
      </Switch>
    </HashRouter>
    </>
  );
}

export default App;
