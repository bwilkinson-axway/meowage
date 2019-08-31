import React from 'react';
import './App.css';

function Login({ history }) {
  return (
    <div className="Login">
      <header className="App-header">
      </header>
      <img class="pic" src="jRFox.jpg" alt=""/>
      <div class="placemat">
      <div class="card">
      <form>
      <img src="meowage.png" alt="logo"></img>
      <br></br>

      <label>Email Address</label>
      <br></br>
      <input type="email" name="email"></input>
      <br></br>
      <label>Password</label>
      <br></br>
      <input type="password" name="password"></input>
      <br></br>
      <button onClick={() => history.push('/dashboard')} type="submit" name="submit">Sign In</button>
      </form>
      <button onClick={() => history.push('/create')} >I need to make an account</button>

      <h3>You've only got 9 lives...make them count!</h3>
      <p>Welcome to the dating site made exclusively for you!</p>
      <p>The mature single cat looking for the one for a long term relationship!</p>
      <p>Create an account with us today to meet your cat's meow!</p>
      </div>
      </div>
    </div>
  );
}

export default Login;
