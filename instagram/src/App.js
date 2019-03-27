import React, { Component } from 'react';

import dummyData from './dummy-data';
import './App.css';
import SearchBar from './components/searchBar/SearchBar';
import WithAuthentica from './components/authentication/withAuthenticate';
import PostContainer from './components/postContainer/PostContainer';
import Login from './components/Login/Login';

const ComponentFromWithAuthenticate = WithAuthentica(PostContainer)(Login);

class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: dummyData,
      tempComment: '',
      tempDummyData: dummyData,
      loginStatus: !localStorage.getItem('login'),
      username: '',
      password: ''
    };
  }

  componentDidMount() {
    this.setState({
      posts: dummyData,
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
    tempContainer[event.target.id].comments.push({username: localStorage.getItem('usernam'), text: this.state.tempComment})
    this.setState({
      posts: tempContainer,
      tempComment: ''
    })
    console.log(this.state.loginStatus)
  }

  noReload = (event) => {
    event.preventDefault()
  }

  usernameValue = (event) => {
    localStorage.setItem('usernam', event.target.value)
  }

  passwordValue = (event) => {
    let password = event.target.value
    this.setState({
      password: password
    })    
    console.log(localStorage.getItem('login'))
  }

  checkLogin = (event) => {
    // event.preventDefault()
    if(this.state.password == 12345678) {
      localStorage.setItem('login', true)
      this.setState({
        loginStatus: localStorage.getItem('login')
      })
    }
  }

  logOut = (event) => {
    localStorage.setItem('login', false)
    this.setState({
      loginStatus: !localStorage.getItem('login')
    })
    console.log('hi')
  }

  render() {
    return (
      <div className="App">
        <SearchBar saveSearchValue={this.saveSearchValue} noReload={this.noReload} logOut={this.logOut}/>
        <ComponentFromWithAuthenticate 
          login={this.state.loginStatus}
          dummyData={this.state.posts} 
          incrementLikes={this.incrementLikes} 
          addComment={this.addComment}
          handleChanges={this.handleChanges}

          usernameValue={this.usernameValue}
          passwordValue={this.passwordValue}
          checkLogin={this.checkLogin}
        />
      </div>
    );
  }
}

export default App;
