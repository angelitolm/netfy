// eslint-disable-next-line
/*
  This file is a part of Netfy
  Author: Angel Labrada Massó
 */

// ===============================================================
// Import Modules
// ===============================================================
import React, { Component } from 'react'
import axios from 'axios'
// import { Route } from 'react-router-dom'

// ===============================================================
// Components
// ===============================================================
// import Login from './authentication/Signin'

// ===============================================================
// Global Theme Styles
// ===============================================================
import '../assets/vendors/base/vendors.bundle.css'
import '../assets/demo/demo6/base/style.bundle.css'
import '../assets/app/dashboardstyle.css'

// ===============================================================
// Components
// ===============================================================
import Header from './globals/Header'
import ContentBody from './globals/ContentBody'
import Footer from './globals/Footer'

// require('../assets/vendors/base/vendors.vendors.bundle.js')
// require('../assets/demo/demo6/base/scripts.bundle.js')
// require('../assets/app/js/dashboard.js')

class Dashboard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loggedIn: false,
      username: null
    }

    this.getUser = this.getUser.bind(this)
    this.componentDidMount = this.componentDidMount.bind(this)
    this.updateUser = this.updateUser.bind(this)
  }

  componentDidMount() {
    this.isAuth()
    this.getUser()
  }

  updateUser (userObject) {
    this.setState(userObject)
  }

  isAuth(){
  const auth = sessionStorage.getItem('token')
  if (auth) {
    return true;
  }
  return false;
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

  render() {
    return (
        <div className="m-grid m-grid--hor m-grid--root m-page">

          <Header updateUser={this.updateUser} loggedIn={this.state.loggedIn} />


          <ContentBody />

          {/* greet user if logged in: */}
          {this.state.loggedIn &&
            <p>Join the party, {this.state.username}!</p>
          }

          <Footer />

          <div id="m_scroll_top" className="m-scroll-top">
            <i className="la la-arrow-up"></i>
          </div>

          <ul className="m-nav-sticky" style={ { marginTop: 30 } }>
      			<li className="m-nav-sticky__item" data-toggle="m-tooltip" title="Purchase" data-placement="left">
      				<a href="https://themeforest.net/item/metronic-responsive-admin-dashboard-template/4021469?ref=keenthemes" target="_blank"><i className="la la-cart-arrow-down"></i></a>
      			</li>
      			<li className="m-nav-sticky__item" data-toggle="m-tooltip" title="Documentation" data-placement="left">
      				<a href="https://keenthemes.com/metronic/documentation.html" target="_blank"><i className="la la-code-fork"></i></a>
      			</li>
      			<li className="m-nav-sticky__item" data-toggle="m-tooltip" title="Support" data-placement="left">
      				<a href="https://keenthemes.com/forums/forum/support/metronic5/" target="_blank"><i className="la la-life-ring"></i></a>
      			</li>
      		</ul>

        </div>
    );
  }
}

export default Dashboard;
