/*
  This file is a part of Netfy
  Author: Angel Labrada Massó
 */

// ===============================================================
// Import Modules
// ===============================================================
import React, { Component } from 'react'
import superagent from 'superagent'
import { Route, Link  } from 'react-router-dom'

// ===============================================================
// Components
// ===============================================================
import Login from './authentication/Signin'

// ===============================================================
// Global Theme Styles
// ===============================================================
import '../assets/app/dashboardstyle.css'

class Dashboard extends Component {
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

  updateUser(user) {
    this.setState(user)
  }

  getUser() {
    superagent.get('http://localhost:4000/api/user')
    .then(response => {
      console.log('Get user response: ')
      console.log(response.body)
      if (response.body.username) {
        console.log('Get User: There is a user saved in the server session: ')

        this.setState({
          loggedIn: true,
          username: response.body.username
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

  render() {
    const loggedIn = this.props.loggedIn;
    console.log('navbar render, props: ')
    console.log(this.props);

    return (
      <div updateUser={this.updateUser} loggedIn={this.state.loggedIn} >
        <h1>Dashboard</h1>

        {this.state.loggedIn &&
          <p>Join the party, {this.state.username}!</p>
        }

        <Route
          path="/api/user"
          render={() =>
            <Login
              updateUser={this.updateUser}
            />}
        />
      </div>
    );
  }
}

export default Dashboard;
