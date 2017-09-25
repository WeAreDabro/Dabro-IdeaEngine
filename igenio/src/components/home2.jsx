import React, { Component } from 'react';
import IdeasTab from './IdeasTab';
import CategoryButtons from './CategoryButtons';

class Home2 extends Component {
  render() {
    return (
      <section id="home-user">
        <IdeasTab user={this.props.user}/>

        <CategoryButtons />
      </section>
    );
  }
}

export default Home2;
