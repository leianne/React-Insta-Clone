import React, { Component } from 'react';
import './App.css';

import PostsPage from './components/PostContainer/PostsPage';
import Login from './components/Login/Login';
import authenticate from './components/Authentication/authenticate';

class App extends Component {
  constructor() {
    super();
    this.state = {

    }
  }
  render() {
    return (
      <>
      <PostsPage />
      </>
    );
  }
}


export default authenticate(App)(Login);
