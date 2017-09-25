import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CategoryButtons from './CategoryButtons';

class Home extends Component {
  render() {
    return (
      <div>
        <CategoryButtons />
        <br />
        <button><Link to="/register">Register</Link></button>
        <p>Or just <Link to="/login">Login Here</Link></p>
      </div>
    );
  }
}

export default Home;
