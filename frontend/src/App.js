import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Room from './Room';
import './App.css';

function App() {

  const generateRoomID = () => {
    return Math.floor(Math.random() * 0xFFFFFF).toString(16);
  }

  const roomID = generateRoomID();

  return (
    <div className="App">
      <Router>
        <div>
          <a href="/"><h1>PoseParty</h1></a>
          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/room/:roomID">
              <Room />
            </Route>
            <Route path="/">
              <h2>A social exercise game you can play while social distancing.</h2>
              <Link to={`/room/${roomID}`}>Create a Room</Link>
            </Route>
          </Switch>

          
        </div>
      </Router>
    </div>
  );
}

export default App;
