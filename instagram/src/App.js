import React, { Component } from 'react';

import dummyData from './dummy-data';
import './App.css';
import SearchBar from './components/searchBar/SearchBar';
import PostContainer from './components/postContainer/PostContainer';
import CommentSection from './components/commentSection/CommentSection';


class App extends Component {
  constructor() {
    super();
    this.state = {
      posts = dummyData
    };
  }
  render() {
    return (
      <div className="App">
        <SearchBar/>
        <div><img src={dummyData[0].imageUrl} alt="strawberry"/></div>
        <PostContainer post={}/>
        <CommentSection/>
        {console.log(dummyData)}
      </div>
    );
  }
}

export default App;
