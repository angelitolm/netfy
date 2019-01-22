/*
  This file is a part of Netfy
  Author: Angel Labrada Massó
 */

// ===============================================================
// Import Modules
// ===============================================================
import React, { Component } from 'react';
// import superagent from 'superagent';
// import { Route } from 'react-router-dom'

// ===============================================================
// Components
// ===============================================================
// import Login from './components/authentication/Signin'

import logo from './logo.svg';
import './App.css';

class App extends Component {
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

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

        </header>
      </div>
    );
  }
}

export default App;
