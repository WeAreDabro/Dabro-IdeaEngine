import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import './App.css';

class CategoryButtons extends Component {
  render () {
    return (
      <button><Link to='/single-tweet'>Tech</Link></button>
      )
  }
}

export default CategoryButtons;
