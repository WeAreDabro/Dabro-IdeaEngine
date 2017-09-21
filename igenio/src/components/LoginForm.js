import React, { Component } from 'react';

class LoginForm extends Component{
  render(){
    return (
      <a href="/auth/Twitter"><button>Login With Twitter</button></a>
      <form onSubmit={this.onSubmitRegister} className="login-form">
           <input
           name="loginUserName"
          type="text"
          placeholder="Your Username"
          value={this.props.loginUserName}
          onChange={this.props.handleInput}
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
      )
  }
}
