/* eslint-env browser */
import axios from 'axios';
import tokenService from './tokenService';

export default {
  // Returns a Promise.
  authenticate(callback) {
    // give token to server and check if the token is valid.
    axios({
      url: 'http://localhost:3000/auth',
      method: 'get',
      headers: { Authorization: `Bearer ${tokenService.getToken()}` },
    })
      .then(user => callback(user))
      .catch(err => console.log(err));
  },

  register(user, callback) {
  // create user and redirect to login page.
    axios({
      url: 'http://localhost:3000/auth/register',
      method: 'post',
      data: user,
    })
      .then((response) => {
        callback(response);
      })
      .catch(err => console.log(err));
  },

  login(user, callback) {
    // recieve token from server, if credientials match,
    // and then redirect to profile page.
    axios({
      url: 'http://localhost:3000/auth/login',
      method: 'post',
      data: user,
    })
      .then((token) => {
        tokenService.login(token);
        callback(token);
      })
      .catch(err => console.log(err));
  },

  logout(callback) {
    // logout user by removing token from localStorage.
    // and redirect to home page.
    tokenService.logout();
    callback();
  },
};
