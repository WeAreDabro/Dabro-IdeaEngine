/* eslint-disable */

import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Header        from './components/partials/Header';
import Footer        from './components/partials/Footer';
import Home          from './components/Home';
import RegisterForm  from './components/RegisterForm';
import LoginForm     from './components/LoginForm';
import SingleTweet   from './components/SingleTweet';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/register" component={RegisterForm} />
          <Route exact path="/login" component={LoginForm} />
          <Route exact path="/" component={Home} />
          <Redirect to="/" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;

// <Route path="/single-idea" component={SingleIdea} />
// <Route exact path="/single-tweet" component={SingleTweet} />
// <Route path="/home-2" component={Auth(Home, Home2)} />
