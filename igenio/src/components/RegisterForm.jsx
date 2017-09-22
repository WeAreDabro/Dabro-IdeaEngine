import React, { Component } from 'react';
// import axios from 'axios';

class RegisterForm extends Component{
  constructor() {
    super();
    this.state = {
      apiData: [],
      isLoggedIn: false,
      registerEmail: '',
      registerUserName: '',
      registerPassword: '',
    };
    this.handleInput=this.handleInput.bind(this);
    this.onSubmitRegister=this.onSubmitRegister.bind(this);
  }

  componentDidMount() {
    console.log('compontent mounted');
  }

    handleInput(e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value,
    });
  }

  onSubmitRegister(e) {
    e.preventDefault();
    console.log(this.state);

    {/* axios.post('/api/AEMIRO', {
      registerEmail: this.state.registerEmail,
      registerUserName: this.state.registerUserName,
      registerPassword: this.state.registerPassword,
    }); */}
  }


  render() {
    return (
      <div>
        <a href="/auth/twitter"><button>Login With Twitter</button></a>
        <form onSubmit={this.onSubmitRegister} className="register-form">
          <input
            name="registerEmail"
            type="email"
            placeholder="Your Email"
            value={this.state.registerEmail}
            onChange={this.handleInput}
          />
          <br />
          <input
            name="registerUserName"
            type="text"
            placeholder="Your Username"
            value={this.state.registerUserName}
            onChange={this.handleInput}
          />
          <br />
          <input
            name="registerPassword"
            type="password"
            placeholder="Your Password"
            value={this.state.registerpassword}
            onChange={this.handleInput}
          />
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default RegisterForm;
