import React from 'react';
import './App.css';
import './Dashboard.css';

function Matches() {
  return (
    <div class='matches'>
      <div class='header'>
      <button>Edit Profile</button>
      <img id='logo' src='meowage-white.png' alt='logo'></img>
      <button>See All Cats</button>
      </div>
      <div class='meowmeows'>
        <div class='thumb match'>
          <img class='profpic' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO9zHwQ5zx_7NFGb6iEzHkZlCbbzJX7x_bWAmvt86dKPlbdmD-" alt='cat profile pic'></img>
          <h5> Samwise Catgi </h5>
        </div>
        <div class='thumb match'>
          <img class='profpic' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG3MEyjg2RJpF9sxsrHWMpgAQ91LvvM5LCbC59mO-XTcOj2kLf7A" alt='cat profile pic'></img>
          <h5> Meow Zedong </h5>
        </div>
        <div class='thumb match'>
          <img class='profpic' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp82tQI4xHdtSSlQ1IEWUPv2JeoeOg_PHkCN3akXj1BCTeRJrDqw" alt='cat profile pic'></img>
          <h5> Randolf </h5>
        </div>
        <div class='thumb match'>
          <img class='profpic' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLxgj_XBkIAyUi1fZWMsvyiCg0EghBC2REgvaZxXrBO1E_1ocV-Q" alt='cat profile pic'></img>
          <h5> Howard P. Cat </h5>
        </div>
        <div class='thumb match'>
          <img class='profpic' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbK4pLlCWdwlWm0wx9fhZtiOi0huyWvlZXTSFi9RwORMCuMKZn" alt='cat profile pic'></img>
          <h5> Kate </h5>
        </div>
        <div class='thumb match'>
          <img class='profpic' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcbU53z7u5aOxKtteKOzDM0cUxOjHUJ6BPIM8_LbGELYWRC56baA" alt='cat profile pic'></img>
          <h5> Rhianna </h5>
        </div>
        <div class='thumb match'>
          <img class='profpic' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv7iP-nzX-3NENlXvC5EeiVGBNSln3t76jPAGnqdUxNnjMrYsI" alt='cat profile pic'></img>
          <h5> Pookie </h5>
        </div>
      </div>
    </div>
  );
}

export default Matches;
