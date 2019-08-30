import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from "history";
import Login from "./Login.js";
import Dashboard from "./Dashboard.js";
import Matches from "./Matches.js";
import Create from "./Create.js";
import Edit from "./Edit.js";
import Profile from "./Profile.js";

function App() {
  const BrowserHistory = createBrowserHistory();
  return (
    <Router history={BrowserHistory}>
    <Switch>
    <Route exact path="/" component={Login} />
    <Route path="/dashboard" component={Dashboard} />
    <Route path="/matches" component={Matches} />
    <Route path="/create" component={Create} />
    <Route path="/edit" component={Edit} />
    <Route path="/profile" component={Profile} />
    </Switch>
    </Router>
  );
}

export default App;
