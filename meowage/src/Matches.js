import React from 'react';
import './App.css';
import './Dashboard.css';
import CardMatch from './CardMatch.js'

class Matches extends React.Component {
  render() {
    return (
      <div className='matches'>
        <div className='header'>
        <button onClick={() => this.props.history.push('/edit')}>Edit Profile</button>
        <img id='logo' src='meowage-white.png' alt='logo'></img>
        <button onClick={() => this.props.history.push('/dashboard')}>See All Cats</button>
        </div>
        <div className='meowmeows'>
        {this.props.state.cats.map(cat => {return Object.values(this.props.state.meow).includes(cat.id) ? <CardMatch key={cat.id} cat={cat} history={this.props.history} /> : null })}
        </div>
      </div>
    );
  }

}

export default Matches;
