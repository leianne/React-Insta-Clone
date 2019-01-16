import React, { Component } from 'react';


import SearchBarContainer from '../SearchBar/SearchBarContainer';
import PostContainer from './PostContainer';

import dummyData from '../../dummyData';

class PostPage extends Component {
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
       const post = this.state.data.filter(e => e.username.includes(ev.target.value) )
    
       this.setState({
         filterData: post
       })
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

export default PostPage;