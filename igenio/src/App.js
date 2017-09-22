import React, { Component } from 'react';
import axios from 'axios';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from './components/Home';
import RegisterForm from './components/RegisterForm';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      apiData: [],
      isLoggedIn: false,
      registerEmail: '',
      registerUserName: '',
      registerPassword: '',

      loginUserName: '',
      loginPassword: '',
    };
  }

  componentDidMount() {
    console.log("compontent mounted");
  }

  handleInput(e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value,
    });
  }

  onSubmitRegister(e) {
    e.preventDefault();
    console.log(this.state);
    axios.post('/api/AEMIRO', {
      registerEmail: this.state.registerEmail,
      registerUserName: this.state.registerUserName,
      registerPassword: this.state.registerPassword,
    });
  }


  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <Header />
        <Switch>
          <Route path="/register" component={RegisterForm} />
          <Route path="/login" component={LoginForm} />
          <Route path="/profile" component={UserProfile} />
          <Route path="/single-idea" component={SingleIdea} />
          <Route path="/single-tweet" component={SingleTweet} />
          <Route path="/" component={Home} />
          <Route path="/home-2" component={auth(Home_2)} />

          <Redirect to="/" />
        </Switch>


        {/*<RegisterForm
          registerEmail={this.registerEmail}
          registerUserName={this.registerUserName}
          registerPassword={this.registerPassword}
          onSubmitRegister={this.onSubmitRegister}
        />*/}

        {/*<LoginForm
          loginuserName={this.loginUserName}
          loginPassword={this.loginPassword}
          onSubmitRegister={this.onSubmitRegister}
        />*/}
      </div>
    );
  }
}

export default App;
