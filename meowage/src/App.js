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
    meow: [],
    newemail: '',
    newpassword: ''
  }

  addMatch = (id) => {
    this.setState({ meow: [...this.state.meow, id]});
  }

  updateState = (cat) => {
        this.setState({cats: this.state.cats.map(ogcat => ogcat.id === cat.id ? {cat} : {...ogcat})})
    }


  addState = (cat) => {
    this.setState({cats: [...this.state.cats, cat]})
  }

  async componentDidMount() {
    const response = await fetch('http://localhost:8080/all')
    const json = await response.json()
    this.setState({cats: json})
  }

  setNewUserInfo = (id, email, password) => {
      this.setState({user: id, newemail: email, newpassword: password})
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

  setUser = (id, email, password) => {
    this.setState({user: id, newemail: email, newpassword: password})
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
    <Route path="/create" render={({history}) => <Create state={this.state} history={history} setNewUserInfo={this.setNewUserInfo} />} />
    <Route path="/edit" render={({history}) => <Edit state={this.state} history={history} addState={this.addState} updateState={this.updateState} />} />
    <Route path="/profile/:id" render={({history, match}) => <Profile addMatch={this.addMatch} match={match} state={this.state} history={history}/>} />
    </Switch>
    </Router>
  )};
}

export default App;
