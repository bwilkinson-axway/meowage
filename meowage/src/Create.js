import React from 'react';
import './App.css';

class Create extends React.Component {

  state = {
    email: "",
    password: "",
    repassword: ""
  }

  handleChangeEmail = e => {
      this.setState({email: e.target.value});
      console.log(this.state)
  }

  handleChangePassword = e => {
      this.setState({password: e.target.value});
      console.log(this.state)
  }

  handleChangeRepassword = e => {
      this.setState({repassword: e.target.value});
      console.log(this.state)
  }

  handleSubmit = e => {
    e.preventDefault()
    let emails = []
    for (let i = 0; i < this.props.state.cats.length; i++) {
      emails.push(this.props.state.cats[i].email);
    }
      if (emails.includes(this.state.email)) {
        window.alert("you already have an account! Sign into the account you already have!")
      } else if (this.state.password !== this.state.repassword){
        window.alert('your passwords don\'t match right meow')
      } else {
        console.log('reacharound')
        this.props.setNewUserInfo((this.props.state.cats.length + 1), this.state.email, this.state.password)
        this.props.history.push('/edit')
      }
    }

  render () {


    return (
      <div className="Create">
        <img className="pic" src="jRFox.jpg" alt=""/>
        <div className="placemat">
        <div className="card">
        <form onSubmit={(e) => this.handleSubmit(e)}>
        <img src="meowage.png" alt="logo"></img>
        <br></br>

        <label>Email Address</label>
        <br></br>
        <input onChange={(e) => this.handleChangeEmail(e)} type="email" value={this.state.email} name="email"></input>
        <br></br>
        <label>Password</label>
        <br></br>
        <input onChange={(e) => this.handleChangePassword(e)} type="password" value={this.state.password} name="password"></input>
        <br></br>
        <label>Re-enter Password</label>
        <br></br>
        <input onChange={(e) => this.handleChangeRepassword(e)} type="password" value={this.state.repassword} name="password"></input>
        <br></br>
        <button type="submit" name="submit">Create Your Account!</button>
        </form>

        <h3>You've only got 9 lives...make them count!</h3>
        </div>
        </div>
      </div>
    );
  }

}

export default Create;
