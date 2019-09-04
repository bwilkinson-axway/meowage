import React from 'react';
import './App.css';

class Edit extends React.Component {
  state = {
    username: '',
    age: '',
    photo: '',
    toy: '',
    bio: ''
  }

  async createCat() {
    let object = JSON.stringify({
      id: this.props.state.cats.length,
      email: this.props.state.newemail,
      username: this.state.username,
      password: this.props.state.newpassword,
      favorite_toy: this.state.toy,
      age: this.state.age,
      bio: this.state.bio,
      photo: this.state.photo,
      matched: false
    })
    console.log(object)
    const catMaker = await fetch('http://localhost:8080/meow', {
      method: 'POST',
      body: object,
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }
    })
    const kitty = await catMaker.json()
    this.props.addState(kitty);
  }

  handleSubmitFinal = e => {
    e.preventDefault()
    this.createCat()
    this.props.history.push('/dashboard')
  }

  handleDelete = e => {
    e.preventDefault()
    this.deleteCat()
    this.props.history.push('/')
  }

  handleChangeUsername = e => {
    this.setState({username: e.target.value})
    console.log(this.state)
  }

  handleChangeAge = e => {
    this.setState({age: e.target.value})
    console.log(this.state)
  }

  handleChangePhoto = e => {
    this.setState({photo: e.target.value})
    console.log(this.state)
  }

  handleChangeToy = e => {
    this.setState({toy: e.target.value})
    console.log(this.state)
  }

  handleChangeBio = e => {
    this.setState({bio: e.target.value})
    console.log(this.state)
  }

  render() {
    return (
      <div className="Edit">
        <img className="pic" src="jRFox.jpg" alt=""/>
        <div className="placemat">
        <div className="card">
        <form onSubmit={(e) => this.handleSubmitFinal(e)}>
        <img src="meowage.png" alt="logo"></img>
        <br></br>

        <label>Choose a Username</label>
        <br></br>
        <input onChange={(e) => this.handleChangeUsername(e)} value={this.state.username} type="text" name="username"></input>
        <br></br>
        <label>How old are you?</label>
        <br></br>
        <input onChange={(e) => this.handleChangeAge(e)} value={this.state.age} type="number" name="age"></input>
        <br></br>
        <label>Share a flattering photo</label>
        <br></br>
        <input onChange={(e) => this.handleChangePhoto(e)} value={this.state.photo}type="text" name="photo"></input>
        <br></br>
        <label>What is your favorite kind of toy?</label>
        <br></br>
        <input onChange={(e) => this.handleChangeToy(e)} value={this.state.toy} type="text" name="favorite toy"></input>
        <br></br>
        <label>Tell us more!  We want to ge to know you!</label>
        <br></br>
        <textarea onChange={(e) => this.handleChangeBio(e)} value={this.state.bio} type="text" name="bio"></textarea>
        <br></br>
        <button type="submit" name="submit">Update!</button>
        </form>
        <button onClick={(e) => this.handleDelete(e)} type="submit" name="submit">Delete My Account Right Meow!</button>

        <h3>You've only got 9 lives...make them count!</h3>
        </div>
        </div>
      </div>
    );
  }

}

export default Edit;
