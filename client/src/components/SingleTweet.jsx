import React, { Component } from 'react';
// import Twit from 'twit';
// import Config from '../config';
import { Link } from 'react-router-dom';
import axios from 'axios';

class SingleTweet extends Component {
  constructor() {
    super();
    this.state = {
      tweet: '',
      screen_name: '',
    };
  }

  componentDidMount() {
    axios.get('/api/twitter')
      .then((res) => {
        console.log(res.data);
        const tweetArr = res.data.data.statuses;
        const item = tweetArr[Math.floor(Math.random() * tweetArr.length)];
        console.log(item);
        this.setState({
          tweet: item.text,
          screen_name: item.user.screen_name,
        })
      })
        .catch(err => console.log(err));
      // console.log(JSON.stringify(res.data.data.statuses[0].text))

  }

//   shouldComponentUpdate(nextTweet, nextState) {
//   return nextTweet.tweet !==this.state.tweet;
// }

  render() {
    return (
      <section>

        <blockquote>
          {this.state.tweet}

        <p> - {this.state.screen_name}</p>
        <button id="buttonST"><Link to="/">Random Idea</Link></button>
        <button id="grow"><Link to="/">Home</Link></button>
        </blockquote>
      </section>
    );
  }
}

export default SingleTweet;
