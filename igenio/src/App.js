import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from './components/Home';
import Home2 from './components/Home2';
import RegisterForm from './components/RegisterForm';
import Header from './components/partials/Header';
import LoginForm from './components/LoginForm';
import SingleTweet from './components/SingleTweet';
import Footer from './components/partials/Footer';
// import logo from './logo.svg';
import './App.css';

// added withRouter to allow redirects with `this.props.history`
import { withRouter } from 'react-router-dom';
// Auth component redirects to '/login' if not logged in.
import Auth from './utils/Auth';
// imported for logout functionality.
import authService from './utils/authService';

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
          {/*<Route exact path="/" component={Home} />*/}
          <Route path="/" component={Auth(Home, Home2)} />

          <Redirect to="/" />
        </Switch>
        { /* Logout button */ }
        <button onClick={() => authService.logout(this.props.history)}>logout</button>
        <Footer />
      </div>
    );
  }
}

export default withRouter(App);
