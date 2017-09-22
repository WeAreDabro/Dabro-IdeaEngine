import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div>
        <button><Link to="/register">Register</Link></button>
        <p>Or just <Link to="/login">Login Here</Link></p>
      </div>
    );
  }
}

export default Home;
