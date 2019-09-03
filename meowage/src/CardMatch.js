import React from 'react';
import './App.css';

class Card extends React.Component {
  render() {
    return (
      <div onClick={() => this.props.history.push('/profile/' + this.props.cat.id)} className='thumb match'>
        <img className='profpic' src={this.props.cat.photo} alt={this.props.cat.username}></img>
        <h5> {this.props.cat.username} </h5>
      </div>
    )
  }
}

export default Card;
