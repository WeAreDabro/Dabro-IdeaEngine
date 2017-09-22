import React, { Component } from 'react';
import axios from 'axios';
class LoginForm extends Component{
    constructor() {
    super();
    this.state = {
      apiData: [],
      isLoggedIn: false,

      loginUserName: '',
      loginPassword: '',
    };
  }

  componentDidMount() {
    console.log('compontent mounted');
  }

  onSubmitRegister(e) {
    e.preventDefault();
    console.log(this.state);
    axios.post('/api/AEMIRO', {
      loginUserName: this.state.loginUserName,
      loginPassword: this.state.loginPassword,
    });
  }

  handleInput(e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value,
    });
  }

  render(){
    return (
      <div>
      <a href="/auth/Twitter"><button>Login With Twitter</button></a>

      <form onSubmit={this.onSubmitRegister} className="login-form">
           <input
           name="loginUserName"
           type="text"
           placeholder="Your Username"
           value={this.state.loginUserName}
           onChange={this.handleInput}
          />
      <br />
           <input
           name="loginPassword"
          type="password"
          placeholder="Your Password"
          value={this.props.loginPassword}
          onChange={this.props.handleInput}
          />
      <br />
         <button type="submit">Submit</button>
      </form>
      </div>
      )
  }
}

export default LoginForm;
