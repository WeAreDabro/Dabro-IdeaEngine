import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// added withRouter to allow redirects with `this.props.history`
import { withRouter } from 'react-router-dom';
// Auth component redirects to '/login' if not logged in.
import Auth from '../../utils/Auth';
// imported for logout functionality.
import authService from '../../utils/authService';

class Nav extends Component {
  render() {
    return (

      <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="/">IGENIO</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav">
      <a className="nav-item nav-link active" href="/">Home <span className="sr-only">(current)</span></a>
      <a className="nav-item nav-link active" onClick={() => authService.logout(this.props.history)}>Logout</a>

    </div>
  </div>
</nav>
    );
  };
}

export default withRouter(Nav);

{/* <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li> <button onClick={() => authService.logout(this.props.history)}>logout</button></li>
        </ul>
      </nav> */}
