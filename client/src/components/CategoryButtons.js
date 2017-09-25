import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import './App.css';

class CategoryButtons extends Component {
  render () {
    return (
      <div>
      <button><Link to='/single-tweet'>Random Idea</Link></button>
      </div>
      )
  }
}

export default CategoryButtons;
