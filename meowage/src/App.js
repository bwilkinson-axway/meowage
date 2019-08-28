import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <img class="pic" src="jRFox.jpg"/>
      <div class="placemat">
      <div class="card">
      <form>
      <h3>Meowage: You've only got 9 lives...make them count!</h3>

      <label>Email Address</label>
      <br></br>
      <input type="email" name="email"></input>
      <br></br>
      <label>Password</label>
      <br></br>
      <input type="password" name="password"></input>
      <br></br>
      <button type="submit" name="submit">Sign In</button>
      </form>
      <button>I need to make an account</button>
      </div>
      </div>
    </div>
  );
}

export default App;
