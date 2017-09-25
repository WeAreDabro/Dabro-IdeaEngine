import React, { Component } from 'react';
// import '.../App.css';

class Idea extends Component {

  /*shouldComponentUpdate(nextProps, nextState) {
    return nextProps.anIdea !==this.props.anIdea;
  }*/

  render() {
    return (
      <div>
        <span>{this.props.anIdea.idea_content}</span>
        <button onClick={this.props.handleDelete}>X</button>
      </div>
    );
  }
}


export default Idea;
