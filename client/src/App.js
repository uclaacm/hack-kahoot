import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Leaderboard from "./components/LeaderboardPage/Leaderboard";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <div>Login</div>
        </Route>
        <Route path="/leaderboard">
          <Leaderboard />
        </Route>
        <Route path="/">
          <div>Game PIN Screen</div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
