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
      searchText: '',
      filterData: []
    }
  }

  componentDidMount() {
     this.setState({data: dummyData})
  }

  
  handleChanges = ev => {
    this.setState({ [ev.target.name]: ev.target.value })
    
  }

  searchData = (ev) => {
    const post = this.state.data.filter(e => {
      if(e.username.includes(ev.target.value)){
        return e
      }
    })
 
    this.setState({
      filterData: post
    })
   console.log(this.state.filterData)
  }

  render() {
    return (
      <div className="container">
        <SearchBarContainer searchData={this.searchData}/>
        <PostContainer handleChanges={this.handleChanges} commentInput={this.state.commentInput} data={this.state.filterData.length > 0 ? this.state.filterData : this.state.data}/>
      </div>
    );
  }
}

export default App;
