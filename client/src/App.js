import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import React from 'react';

import Login from "./components/Login/Login";

function App() {
  return (
    <Router>
      <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <div>Game PIN Screen</div>
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
