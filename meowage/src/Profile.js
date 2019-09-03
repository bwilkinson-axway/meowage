import React from 'react';
import './Profile.css';

class Profile extends React.Component {

  render () {
    return (
      <div className="profile">
        <img id='pic' src={this.props.state.cats[this.props.match.params.id].photo} alt="profile"></img>
        <div className='content'>
          <h1> {this.props.state.cats[this.props.match.params.id].username} </h1>
          <p> {this.props.state.cats[this.props.match.params.id].bio} </p>
          <h5> Age: {this.props.state.cats[this.props.match.params.id].age} </h5>
          <h5> Favorite Toy: {this.props.state.cats[this.props.match.params.id].favorite_toy} </h5>
          <button><img id='matches' src='https://clipart.info/images/ccovers/1495818555cartoon-fire-flames-emoji-png-transparent.png' alt='matches'></img></button>
        </div>
      </div>
    );
  }

}

export default Profile;
