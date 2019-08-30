import React from 'react';
import './App.css';

function Create() {
  return (
    <div className="Create">
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
      <label>Re-enter Password</label>
      <br></br>
      <input type="password" name="password"></input>
      <br></br>
      <button type="submit" name="submit">Create Your Account!</button>
      </form>

      <h3>You've only got 9 lives...make them count!</h3>
      </div>
      </div>
    </div>
  );
}

export default Create;
