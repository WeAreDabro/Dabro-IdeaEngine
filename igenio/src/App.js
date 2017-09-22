import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home2 from './components/Home2';
import RegisterForm from './components/RegisterForm';
import Header from './components/partials/Header';
import LoginForm from './components/LoginForm';
import SingleTweet from './components/SingleTweet';
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
          <Route exact path="/single-tweet" component={SingleTweet} />
          <Route path="/" component={Home2} />
          { /* <Route path="/home-2" component={Auth(Home, Home2)} /> */ }

          <Redirect to="/" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
