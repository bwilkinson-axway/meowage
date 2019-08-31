import React from 'react';
import './App.css';

function Edit({ history }) {
  return (
    <div className="Edit">
      <img class="pic" src="jRFox.jpg" alt=""/>
      <div class="placemat">
      <div class="card">
      <form>
      <img src="meowage.png" alt="logo"></img>
      <br></br>

      <label>Choose a Username</label>
      <br></br>
      <input type="text" name="username"></input>
      <br></br>
      <label>How old are you?</label>
      <br></br>
      <input type="number" name="age"></input>
      <br></br>
      <label>Share a flattering photo</label>
      <br></br>
      <input type="text" name="photo"></input>
      <br></br>
      <label>What is your favorite kind of toy?</label>
      <br></br>
      <input type="text" name="favorite toy"></input>
      <br></br>
      <label>Tell us more!  We want to ge to know you!</label>
      <br></br>
      <textarea type="text" name="bio"></textarea>
      <br></br>
      <button onClick={() => history.push('/dashboard')} type="submit" name="submit">Update!</button>
      </form>
      <button onClick={() => history.push('/')} type="submit" name="submit">Delete My Account Right Meow!</button>

      <h3>You've only got 9 lives...make them count!</h3>
      </div>
      </div>
    </div>
  );
}

export default Edit;
