import React, { Component } from 'react';

class LoginForm extends Component{
  render(){
    return (
      <from className="login-form">
           <input
           name = "loginUserName"
          type = "text"
          placeholder = "Your Username"
          value = {this.props.loginUserName}
          onChange = {this.props.handleRegisterInput}
          />
      <br />
           <input
           name= "loginPassword"
          type = "password"
          placeholder = "Your Password"
          value = {this.props.loginPassword}
          onChange = {this.props.handleRegisterInput}
          />
      <br />
         <button onClick={this.onSubmitRegister}>Submit</button>
      )
  }
}
