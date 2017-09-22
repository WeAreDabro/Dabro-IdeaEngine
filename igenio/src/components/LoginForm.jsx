import React, { Component } from 'react';
// import axios from 'axios';

class LoginForm extends Component {
  constructor() {
    super();

    this.state = {
      loginUserName: '',
      loginPassword: '',
    };

    this.handleInput = this.handleInput.bind(this);
    this.onSubmitLogin = this.onSubmitLogin.bind(this);
  }

  componentDidMount() {
    console.log('component mounted');
  }

  onSubmitLogin(e) {
    e.preventDefault();
    console.log(this.state);
    {/* axios.get('/api/AEMIRO', {
      loginUserName: this.state.loginUserName,
      loginPassword: this.state.loginPassword,
    }); */}
  }

  handleInput(e) {
    const name = e.target.name;
    const value = e.target.value;

    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <div>
        <button><a href="/auth/twitter"> Login With Twitter</a></button>
        <form onSubmit={this.onSubmitLogin} className="login-form">
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
            value={this.state.loginPassword}
            onChange={this.handleInput}
          />
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
