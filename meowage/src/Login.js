import React from 'react';
import './App.css';

class Login extends React.Component {

  state = {
    email: '',
    password: ''
  }

  handleEmailChange = e => {
    console.log(e)
    this.setState(
      {
        email: e.target.value
      }
    )
  }

  handlePasswordChange = e => {
    console.log(e)
    this.setState(
      {
        password: e.target.value
      }
    )
  }

  handleLogin = (e) => {
    e.preventDefault();
    let auth = false;
    console.log(this.props)
      for (let i = 0; i < this.props.cats.length; i++) {
        if (this.state.email === this.props.cats[i].email && this.state.password === this.props.cats[i].password) {
          this.props.setUser(this.props.cats[i].id, this.props.cats[i].email, this.props.cats[i].password);
          auth = true;
          this.props.history.push('/dashboard');
        }
      }
      if (auth === false) {
          window.alert('You messed up either the Email or the Password.  Get it together meow!')
      }
    }

  render () {
    return (
      <div className="Login">
        <header className="App-header">
        </header>
        <img className="pic" src="jRFox.jpg" alt=""/>
        <div className="placemat">
        <div className="card">
        <form onSubmit={(e) => this.handleLogin(e)}>
        <img src="meowage.png" alt="logo"></img>
        <br></br>
        <label>Email Address</label>
        <br></br>
        <input onChange={(e) => this.handleEmailChange(e) } value={this.state.email} type="email" name="email"></input>
        <br></br>
        <label>Password</label>
        <br></br>
        <input onChange={(e) => this.handlePasswordChange(e) } value={this.state.password} type="password" name="password"></input>
        <br></br>
        <button type="submit" name="submit">Sign In</button>
        </form>
        <button onClick={() => this.props.history.push('/create')} >I need to make an account</button>

        <h3>You've only got 9 lives...make them count!</h3>
        <p>Welcome to the dating site made exclusively for you!</p>
        <p>The mature single cat looking for the one for a long term relationship!</p>
        <p>Create an account with us today to meet your cat's meow!</p>
        </div>
        </div>
        </div>
      );
    }
}

export default Login;
