import React, { Component } from 'react';

import { Router, Route, browserHistory } from 'react-router';
//import logo from './logo.svg';
import './App.css';
import StarComponent from './star/starComponent';
import HomeComponent from './home/homeComponent';
import UsersComponent from './users/usersComponent';
import PostComponent from './posts/postComponent';

class App extends Component {

  render() {
    return (
      <React.Fragment>
        <Router history={browserHistory}>
          <Route exact path="/home" component={HomeComponent} />
          <Route exact path='/star' component={StarComponent} />
          <Route exact path='/users' component={UsersComponent} />
          <Route exact path='/' component={PostComponent} />
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
