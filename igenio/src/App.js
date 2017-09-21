import React, { Component } from 'react';
import axios from 'axios';
import registerForm from './components/RegisterForm';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
    constructor() {
      super();
      this.state = {
        apiData: [],
        isLoggedIn: false
        registerEmail: ''
        registerUserName: ''
        registerPassword: ''

        loginUserName: ''
        loginPassword: ''
      }
    }

    componentDidmount() {
      console.log("compontent mounted")
    }

    handleRegisterInput(e) {
      let name = e.target.name;
      let value = e.target.value;
      this.setState({
        [name]: value
      })
    }

    onSubmitRegister(e) {
      e.preventDefault();
      console.log(this.state)
      axios.post('http://localhost:3001/api/AEMIRO', {
      /*form? */: this.state./*fields? */
    }



  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
          <RegisterForm
            registerEmail={this.registerEmail}
            registerUserName={this.registerUserName}
            registerPassword={this.registerPassword}
            onSubmitRegister={this.onSubmitRegister}
            />
          <LoginForm
            loginuserName={this.loginUserName}
            loginPassword={this.loginPassword}
            onSubmitRegister={this.onSubmitRegister}
            />
      </div>
    );
  }
}

export default App;
