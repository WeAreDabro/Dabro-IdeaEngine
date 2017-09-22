import React, { Component } from 'react';
import Header from './components/partials/Header';
import Nav from './Nav';


class MainTab extends Component {
  render () {
    return (
      <div>
        <ul>
          <li><Link to="/">Your Ideas</Link></li>
          <li><Link to="/quotes">Your Favorites</Link></li>
        </ul>
        <Switch>
          <Route path="/ideas" component={IdeasTab} />
          <Route path="/favorites" component={FavoritesTab} />
        </Switch>
      </div>

    );
  }
}

export default MainTab;

