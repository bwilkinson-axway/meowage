import React from 'react';
import './Profile.css';

function Profile() {
  return (
    <div class="profile">
      <img id='pic' src="https://www.thesun.co.uk/wp-content/uploads/2017/10/nintchdbpict000359142075.jpg" alt="profile"></img>
      <div class='content'>
        <img id='logo' src='meowage-white.png'></img>
        <h1> Snookums </h1>
        <p> I'm super cuddly, and I don't bite too hard.  Give me a shot baby, and I'll rock your world </p>
        <h5> Age: 5 </h5>
        <h5> Favorite Toy: The red dot </h5>
        <button><img id='matches' src='matches.png'></img></button>
      </div>
    </div>
  );
}

export default Profile;
