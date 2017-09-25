import React, { Component } from 'react';
import IdeasTab from './IdeasTab';
import CategoryButtons from './CategoryButtons';

class Home2 extends Component {
  render() {
    return (
      <div>
        <IdeasTab user={this.props.user}/>

        <CategoryButtons />
      </div>
    );
  }
}

export default Home2;
