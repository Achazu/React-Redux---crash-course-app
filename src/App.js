import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Posts from	'./Components/Posts'
import PostForm from	'./Components/Postform'
import { Provider } from 'react-redux'
import store from './store'

class App extends Component {
  render() {
    return (
		 <Provider store={store}>
			<div className="App">
				<header className="App-header">
					
				</header>
				<PostForm/>
				<hr/>
				<Posts/>
			</div>
		</Provider>
    );
  }
}

export default App;
