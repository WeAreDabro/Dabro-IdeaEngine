import React, { Component } from 'react';
// import Twit from 'twit';
// import Config from '../config';
import axios from 'axios';

class SingleTweet extends Component {
  constructor() {
    super();
    this.state = {
      tweet: '',
    };
  }

  componentDidMount() {
    axios.get('http://localhost:3000/api/twitter')
      .then((res) => {
        const tweetArr = res.data.data.statuses;
        const item = tweetArr[Math.floor(Math.random() * tweetArr.length)];
        console.log(item.text);
        this.setState({
          tweet: item.text,
        });
      // console.log(JSON.stringify(res.data.data.statuses[0].text))
      });
  }

//   shouldComponentUpdate(nextTweet, nextState) {
//   return nextTweet.tweet !==this.state.tweet;
// }

  render() {
    return (
      <div>

        <blockquote>{this.state.tweet}</blockquote>
      </div>
    );
  }
}

export default SingleTweet;
