/*
  This file is a part of Netfy
  Author: Angel Labrada Massó
 */

// ===============================================================
// Import Modules
// ===============================================================
import React, { Component } from 'react';
<<<<<<< HEAD
import axios from 'axios'
import { Route } from 'react-router-dom'
=======
// import superagent from 'superagent';
// import { Route } from 'react-router-dom'
>>>>>>> 589fee2dcbd9daf26b79d76227d79836499787b5

// ===============================================================
// Components
// ===============================================================
<<<<<<< HEAD
import Login from './components/authentication/Signin'
=======
// import Login from './components/authentication/Signin'
>>>>>>> 589fee2dcbd9daf26b79d76227d79836499787b5

import logo from './logo.svg';
import './App.css';

class App extends Component {
<<<<<<< HEAD
  constructor() {
    super()
    this.state = {
      loggedIn: false,
      username: null
    }

    this.getUser = this.getUser.bind(this)
    this.componentDidMount = this.componentDidMount.bind(this)
    this.updateUser = this.updateUser.bind(this)
  }

  componentDidMount() {
    this.getUser()
  }

  updateUser (userObject) {
    this.setState(userObject)
  }

  getUser() {
    axios.get('/dashboard').then(response => {
      console.log('Get user response: ')
      console.log(response.data)
      if (response.data.user) {
        console.log('Get User: There is a user saved in the server session: ')

        this.setState({
          loggedIn: true,
          username: response.data.user.username
        })
      } else {
        console.log('Get user: no user');
        this.setState({
          loggedIn: false,
          username: null
        })
      }
    })
  }
=======
  // constructor() {
  //   super()
  //   this.state = {
  //     loggedIn: false,
  //     username: null
  //   }
  //
  //   this.getUser = this.getUser.bind(this)
  //   this.componentDidMount = this.componentDidMount.bind(this)
  //   this.updateUser = this.updateUser.bind(this)
  // }
  //
  // componentDidMount() {
  //   this.getUser()
  // }
  //
  // updateUser (userObject) {
  //   this.setState(userObject)
  // }
  //
  // getUser() {
  //   superagent.get('http://localhost:4000/api/user')
  //   .end((err, res) => {
  //     if (err) {
  //       console.log('Get user: no user');
  //       this.setState({
  //         loggedIn: false,
  //         username: null
  //       })
  //     } else if (res.body.user) {
  //       console.log('Get user response: ')
  //       console.log(res.body)
  //
  //       console.log('Get User: There is a user saved in the server session: ')
  //
  //       this.setState({
  //         loggedIn: true,
  //         username: res.body.username
  //       })
  //     }
  //   })
  // }
>>>>>>> 589fee2dcbd9daf26b79d76227d79836499787b5

  render() {
    return (
      <div className="App">
        <header className="App-header" updateUser={this.updateUser} loggedIn={this.state.loggedIn}>
          <img src={logo} className="App-logo" alt="logo" />

        </header>

        {this.state.loggedIn &&
          <p>Join the party, {this.state.username}!</p>
        }
        
      </div>
    );
  }
}

export default App;
