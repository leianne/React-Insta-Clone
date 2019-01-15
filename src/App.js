import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import SearchBarContainer from './components/SearchBar/SearchBarContainer';
import PostContainer from './components/PostContainer/PostContainer';

import dummyData from './dummyData';


class App extends Component {
  constructor() {
    super();
    this.state = {
      data: dummyData,
    }
  }
  render() {
    return (
      <div className="container">
        <SearchBarContainer />
        <PostContainer data={this.state.data}/>
      </div>
    );
  }
}

export default App;
