import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from './components/Home';
import RegisterForm from './components/RegisterForm';
import Header from './components/partials/Header';
import LoginForm from './components/LoginForm';
import Footer from './components/partials/Footer';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/register" component={RegisterForm} />
          <Route exact path="/login" component={LoginForm} />
          { /* <Route path="/single-idea" component={SingleIdea} /> */ }
          { /* <Route path="/single-tweet" component={SingleTweet} /> */ }
          <Route path="/" component={Home} />
          { /* <Route path="/home-2" component={Auth(Home, Home2)} /> */ }

          <Redirect to="/" />
        </Switch>
        <Footer />


        {/* <RegisterForm
          registerEmail={this.registerEmail}
          registerUserName={this.registerUserName}
          registerPassword={this.registerPassword}
          onSubmitRegister={this.onSubmitRegister}
        /> */}

        {/* <LoginForm
          loginuserName={this.loginUserName}
          loginPassword={this.loginPassword}
          onSubmitRegister={this.onSubmitRegister}
        /> */}

      </div>
    );
  }
}

export default App;
