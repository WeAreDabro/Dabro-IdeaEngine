import React, { Component } from 'react';

class RegisterForm extends Component{
  render(){
    return (
      <from className="register-form">
        <input
          name = "registerEmail"
          type = "email"
          placeholder = "Your Email"
          value = {this.props.registerEmail}
          onChange = {this.props.handleRegisterInput}
          />
      <br />
           <input
           name = "registerUserName"
          type = "text"
          placeholder = "Your Username"
          value = {this.props.registerUserName}
          onChange = {this.props.handleRegisterInput}
          />
      <br />
           <input
           name= "registerPassword"
          type = "password"
          placeholder = "Your Password"
          value = {this.props.registerpassword}
          onChange = {this.props.handleRegisterInput}
          />
      <br />
         <button onClick={this.onSubmitRegister}>Submit</button>
      )
  }
}
