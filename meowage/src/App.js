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

class App extends React.Component {

  state = {
    cats: [],
    user: ''
  }

  async componentDidMount() {
    const response = await fetch('http://localhost:8080/all')
    const json = await response.json()
    this.setState({cats: json})
  }

  setUser = (id) => {
    this.setState({user: id})
  }

  render() {
    const BrowserHistory = createBrowserHistory();
    console.log(this.state)

    return (
    <Router history={BrowserHistory}>
    <Switch>
    <Route exact path="/" render={({ history }) => <Login history={history} setUser={this.setUser} cats={this.state.cats} />} />
    <Route path="/dashboard" state={this.state} component={Dashboard} />
    <Route path="/matches" state={this.state} component={Matches} />
    <Route path="/create" state={this.state} component={Create} />
    <Route path="/edit" state={this.state} component={Edit} />
    <Route path="/profile" state={this.state} component={Profile} />
    </Switch>
    </Router>
  )};
}

export default App;
