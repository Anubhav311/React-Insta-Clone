import React, { Component } from 'react';

import dummyData from './dummy-data';
import './App.css';
import SearchBar from './components/searchBar/SearchBar';
import PostContainer from './components/postContainer/PostContainer';


class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: dummyData,
      tempComment: '',
      tempDummyData: dummyData

    };
  }

  componentDidMount() {
    this.setState({
      posts: dummyData
    })
  }

  incrementLikes = (event) => {
    let tempContainerLikes = this.state.posts
    for(let i=0; i<this.state.posts.length; i++) {
      if(event.target.id == this.state.posts[i].id)
        tempContainerLikes[i].likes = tempContainerLikes[i].likes + 1
    }
    this.setState({
      posts: tempContainerLikes
    })
  }

  saveSearchValue = (event) => {
    for(let i=0; i<this.state.posts.length; i++) {
      if(this.state.posts[i].username === event.target.value){
        this.setState({
          posts: [this.state.posts[i]]
        });
        break;
      } else {
        this.setState({
          posts: this.state.tempDummyData
        });
      }
    }
  }

  handleChanges = (event) => {
    event.preventDefault()
    this.setState({
      tempComment: event.target.value
    })
  }

  addComment = event => {
    event.preventDefault()
    let tempContainer = this.state.posts
    tempContainer[event.target.id].comments.push({username: "anubhav", text: this.state.tempComment})
    this.setState({
      posts: tempContainer,
      tempComment: ''
    })
  }

  noReload = (event) => {
    event.preventDefault()
  }

  render() {
    return (
      <div className="App">
        <SearchBar saveSearchValue={this.saveSearchValue} noReload={this.noReload}/>
        <PostContainer 
          dummyData={this.state.posts} 
          incrementLikes={this.incrementLikes} 
          addComment={this.addComment}
          handleChanges={this.handleChanges}
        />
      </div>
    );
  }
}

export default App;
