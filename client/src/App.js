import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
          <Route path="/login">
            <div>Login</div>
          </Route>
          <Route path="/">
            <div>Game PIN Screen</div>
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
