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
    user: '',
    matches: [],
    meow: []
  }

  async componentDidMount() {
    const response = await fetch('http://localhost:8080/all')
    const json = await response.json()
    this.setState({cats: json})
  }

  matchCats = () => {
      let meow = [];
        for (let i = 0; i < this.state.matches.length; i++) {
          if (this.state.user === this.state.matches[i].catone && this.state.matches[i].onematch === true && this.state.matches[i].twomatch === true) {
          meow.push(this.state.matches[i].cattwo)
        }
      }
      console.log(meow)
        this.setState({meow: meow})
    }

  async setMatches() {
    const matchResponse = await fetch('http://localhost:8080/matches')
    const jsonTwo = await matchResponse.json()
    this.setState({matches: jsonTwo})
    this.matchCats()
  }

  setUser = (id) => {
    this.setState({user: id})
    this.setMatches()
  }

  render() {
    const BrowserHistory = createBrowserHistory();
    console.log(this.state)

    return (
    <Router history={BrowserHistory}>
    <Switch>
    <Route exact path="/" render={({ history }) => <Login history={history} setUser={this.setUser} cats={this.state.cats} />} />
    <Route path="/dashboard" render={({history}) => <Dashboard state={this.state} history={history}/>} />
    <Route path="/matches" render={({history}) => <Matches state={this.state} history={history}/>} />
    <Route path="/create" state={this.state} component={Create} />
    <Route path="/edit" state={this.state} component={Edit} />
    <Route path="/profile/:id" render={({history, match}) => <Profile match={match} state={this.state} history={history}/>} />
    </Switch>
    </Router>
  )};
}

export default App;
