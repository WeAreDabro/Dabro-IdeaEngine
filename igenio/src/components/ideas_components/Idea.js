import React, { Component } from 'react';
import '../App.css';

class Idea extends Component {

shouldComponentUpdate(nextProps, nextState) {
  return nextProps.anIdea./* ? */ !==this.props./* ? */;
}

  render() {
    return (
      <div>
      {console.log("finale render Idea " + this.props.anIdea.url)}
        <img src={this.props.anIdea.images.original.url} height="620" alt="this is a Idea"  />
     </div>
     )
   }
}

export default Idea;
