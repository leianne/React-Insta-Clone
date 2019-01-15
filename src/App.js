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
      data: [],
      searchText: ''
    }
  }

  componentDidMount() {
     this.setState({data: dummyData})
  }

  
  handleChanges = ev => {
    this.setState({ [ev.target.name]: ev.target.value })
    console.log(ev.target)
  }

  render() {
    return (
      <div className="container">
        <SearchBarContainer data={this.state.data}/>
        <PostContainer handleChanges={this.handleChanges} commentInput={this.state.commentInput} data={this.state.data}/>
      </div>
    );
  }
}

export default App;
