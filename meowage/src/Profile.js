import React from 'react';
import './Profile.css';

class Profile extends React.Component {

  handleClick = () => {
    this.props.addMatch(parseInt(this.props.match.params.id))
  }

  render () {
    let index = 0;
    for (let i = 0; i < this.props.state.cats.length; i++) {
      console.log(this.props.state.cats[i].id === parseInt(this.props.match.params.id))
      if(this.props.state.cats[i].id === parseInt(this.props.match.params.id)) {
        index = i;
      }
    }
    console.log(index)

    return (
      <div className="profile">
        <img id='pic' src={this.props.state.cats[index].photo} alt="profile"></img>
        <div className='content'>
          <h1> {this.props.state.cats[index].username} </h1>
          <p> {this.props.state.cats[index].bio} </p>
          <h5> Age: {this.props.state.cats[index].age} </h5>
          <h5> Favorite Toy: {this.props.state.cats[index].favorite_toy} </h5>
          <button onClick={() => this.handleClick()}><img id='matches' src={this.props.state.meow.includes(parseInt(index)) ? 'https://clipart.info/images/ccovers/1495818555cartoon-fire-flames-emoji-png-transparent.png' : "https://www.actaturcica.com/wp-content/uploads/2018/06/Match-Stick-PNG-Transparent-Image.png"} alt='matches'></img></button>
          <h4> {this.props.state.meow.includes(parseInt(index)) ? "Email: " + this.props.state.cats[index].email : ""} </h4>
        </div>
      </div>
    );
  }

}

export default Profile;
