import React, { Component } from 'react';

class RegisterForm extends Component{


  render(){
    return (
      <div>
      <a href="/auth/twitter"><button>Login With Twitter</button></a>
      <form onSubmit={this.onSubmitRegister} className="register-form">
        <input
          name="registerEmail"
          type="email"
          placeholder="Your Email"
          value={this.props.registerEmail}
          onChange={this.props.handleInput}
          />
      <br />
           <input
           name="registerUserName"
          type="text"
          placeholder="Your Username"
          value={this.props.registerUserName}
          onChange={this.props.handleInput}
          />
      <br />
           <input
           name="registerPassword"
          type="password"
          placeholder="Your Password"
          value={this.props.registerpassword}
          onChange={this.props.handleInput}
          />
      <br />
         <button type="submit">Submit</button>
      </form>
      </div>
      )
  }
}
