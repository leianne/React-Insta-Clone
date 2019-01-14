import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import SearchBarContainer from './components/SearchBar/SearchBarContainer';
class App extends Component {
  render() {
    return (
      <div className="container">
        <SearchBarContainer />
      </div>
    );
  }
}

export default App;
