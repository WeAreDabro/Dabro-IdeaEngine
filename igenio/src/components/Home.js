import React, { Component } from 'react';
import RegisterForm from './components/RegisterForm';
import LoginForm from './components/LoginForm';
import Header from './components/partials/Header';
import GuestMain from './components/GuestMain';

class Home extends Component {

 // cons...super...state

  Render() {
    Return (
      <div>
        <Header />

        <GuestMain />


        <button><Link to="/register">Home</Link></button>
      </div>,

    );
  }
}
