import React, { Component } from 'react';
import Twit from 'twit';
import Config from '../config';
import axios from 'axios';

class SingleTweet extends Component {
 constructor() {
  super();
  this.state = {
    tweets: []
  };
 }

  componentDidMount() {
    axios.get('/api/tweets')
    .then(res => {
      console.log(res.data.statuses)
    })


}

  render() {
    return (
      <div>

        <h2> thiz is a single tweet from the Twitter Api</h2>
      </div>
    )
  }
}

export default SingleTweet;
