import React, { Component } from 'react';
import axios from 'axios';
import RegisterForm from './components/RegisterForm';
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

    handleInput(e) {
      let name = e.target.name;
      let value = e.target.value;
      this.setState({
        [name]: value
      })
    }

    onSubmitRegister(e) {
      e.preventDefault();
      console.log(this.state)
      axios.post('/api/AEMIRO', {
      registerEmail: this.state.registerEmail
      registerUserName: this.state.registerUserName
      registerPassword: this.state.registerPassword
    }



  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <Header />
        <Home />
        <Home-2 />

          Route path="/register" compontent="RegisterForm"

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
        <Footer />
      </div>
    );
  }
}

export default App;
