import React from 'react';
import './App.css';
import './Dashboard.css';
import Card from './Card.js';
import CardMatch from './CardMatch.js'

class Dashboard extends React.Component {

  handleReload = () => {
    this.props.recat()
  }
          // <button disabled onClick={() => this.handleReload()}> Refresh </button>

  render() {
    return (
      <div className='dashboard'>
        <div className='header'>
        <button onClick={() => this.props.history.push({pathname: '/edit'})}>Edit Profile</button>
        <img id='logo' src='meowage-white.png' alt='logo'></img>
        <button onClick={() => this.props.history.push('/matches')}>See Matches</button>
        </div>
        <div className='meowmeows'>
        {this.props.state.cats.map(cat => {return Object.values(this.props.state.meow).includes(cat.id) ? <CardMatch key={cat.id} cat={cat} history={this.props.history} /> : <Card key={cat.id} cat={cat} history={this.props.history} />})}
        </div>
      </div>
    );
  }
}

export default Dashboard;
