// eslint-disable-next-line
/*
  This file is a part of Netfy
  Author: Angel Labrada Massó
 */

// ===============================================================
// Import Modules
// ===============================================================
import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import '../Dashboard'

// ===============================================================
// Web font
// ===============================================================
// import WebFont from '../../assets/app/js/webfont.js';

    // WebFont.load({
    //   google: {"families":["Poppins:300,400,500,600,700","Roboto:300,400,500,600,700"]},
    //   active: function() {
    //       sessionStorage.fonts = true;
    //   }
    // });

// ===============================================================
// Global Theme Styles
// ===============================================================
import '../../assets/app/loginstyle.css';
// import '../../assets/vendors/base/vendors.bundle.css';
// import '../../assets/demo/default/base/style.bundle.css';

// import '../../assets/demo/default/media/img/logo/favicon.ico';

    // ===============================================================
    // Global Theme Bundle
    // ===============================================================
		// import '../../assets/vendors/base/vendors.bundle.js';
		// import '../../assets/demo/default/base/scripts.bundle.js';

    // ===============================================================
    // Page Scripts
    // ===============================================================
		// import '../../assets/snippets/custom/pages/user/login.js';

    import ImgLogo from '../../assets/app/media/img/logos/logonew.png'

    let winHeight = window.innerHeight // Resize Backgroud Login
    window.onresize = function() {
      winHeight = window.innerHeight
    }

class Login extends Component {
  // constructor
  constructor(props) {
      super(props)
      this.state = {
          username: '',
          password: '',
          redirectTo: null
      }
      this.handleSubmit = this.handleSubmit.bind(this)
      this.handleChange = this.handleChange.bind(this)

  }

  handleChange(event) {
      this.setState({
          [event.target.name]: event.target.value
      })
  }

  handleSubmit(event) {
        event.preventDefault()
        console.log('handleSubmit')

        axios
            .post('/signin', {
                username: this.state.username,
                password: this.state.password
            })
            .then(response => {
                console.log('login response: ')
                console.log(response)
                if (response.status === 200) {
                    // update App.js state
                    // this.props.updateUser({
                    //     loggedIn: true,
                    //     username: response.data.username
                    // })
                    // update the state to redirect to home
                    this.setState({
                        redirectTo: '/dashboard'
                    })
                }
            }).catch(error => {
                console.log('login error: ')
                console.log(error);

            })
    }

  render() {
    if (this.state.redirectTo) {
          return <Redirect to={{ pathname: this.state.redirectTo }} />
    } else {
          return (
            <div className="m-grid m-grid--hor m-grid--root m-page">
              <div className="m-grid__item m-grid__item--fluid m-grid m-grid--hor m-login m-login--signin m-login--2 m-login-2--skin-1" id="m_login" style={ { height: winHeight } }>
                <div className="m-grid__item m-grid__item--fluid m-login__wrapper">
                  <div className="m-login__container">
                    <div className="m-login__logo">
                      <a href=".">
                        <img src={ ImgLogo } alt="Logo" />
                      </a>
                    </div>
                    <div className="m-login__signin">
                      <div className="m-login__head">
                        <h3 className="m-login__title">Sign In To Admin</h3>
                      </div>
                      <form className="m-login__form m-form">
                        <div className="form-group m-form__group">
                          <input className="form-control m-input" type="text" placeholder="Username" name="username" autoComplete="off" value={ this.state.username } onChange={this.handleChange} />
                        </div>
                        <div className="form-group m-form__group">
                          <input className="form-control m-input m-login__form-input--last" type="password" placeholder="Password" name="password" value={ this.state.password } onChange={ this.handleChange } />
                        </div>
                        <div className="row m-login__form-sub">
                          <div className="col m--align-left m-login__form-left">
                            <label className="m-checkbox  m-checkbox--light">
                              <input type="checkbox" name="remember" /> Remember me
                              <span></span>
                            </label>
                          </div>
                          <div className="col m--align-right m-login__form-right">
                            <a href="/" id="m_login_forget_password" className="m-link">Forget Password ?</a>
                          </div>
                        </div>
                        <div className="m-login__form-action">
                          <button type="submit" onClick={ this.handleSubmit } id="m_login_signin_submit" className="btn btn-focus m-btn m-btn--pill m-btn--custom m-btn--air  m-login__btn m-login__btn--primary">Sign In</button>
                        </div>
                      </form>
                    </div>
                    <div className="m-login__signup">
                      <div className="m-login__head">
                        <h3 className="m-login__title">Sign Up</h3>
                        <div className="m-login__desc">Enter your details to create your account:</div>
                      </div>
                      <form className="m-login__form m-form" action="">
                        <div className="form-group m-form__group">
                          <input className="form-control m-input" type="text" placeholder="Fullname" name="fullname" />
                        </div>
                        <div className="form-group m-form__group">
                          <input className="form-control m-input" type="text" placeholder="Email" name="email" autoComplete="off" />
                        </div>
                        <div className="form-group m-form__group">
                          <input className="form-control m-input" type="password" placeholder="Password" name="password" />
                        </div>
                        <div className="form-group m-form__group">
                          <input className="form-control m-input m-login__form-input--last" type="password" placeholder="Confirm Password" name="rpassword" />
                        </div>
                        <div className="row form-group m-form__group m-login__form-sub">
                          <div className="col m--align-left">
                            <label className="m-checkbox m-checkbox--light">
                              <input type="checkbox" name="agree" />I Agree the <a href="/" className="m-link m-link--focus">terms and conditions</a>.
                              <span></span>
                            </label>
                            <span className="m-form__help"></span>
                          </div>
                        </div>
                        <div className="m-login__form-action">
                          <button id="m_login_signup_submit" className="btn m-btn m-btn--pill m-btn--custom m-btn--air m-login__btn m-login__btn--primary">Sign Up</button>&nbsp;&nbsp;
                          <button id="m_login_signup_cancel" className="btn m-btn m-btn--pill m-btn--custom m-btn--air m-login__btn">Cancel</button>
                        </div>
                      </form>
                    </div>
                    <div className="m-login__forget-password">
                      <div className="m-login__head">
                        <h3 className="m-login__title">Forgotten Password ?</h3>
                        <div className="m-login__desc">Enter your email to reset your password:</div>
                      </div>
                      <form className="m-login__form m-form" action="">
                        <div className="form-group m-form__group">
                          <input className="form-control m-input" type="text" placeholder="Email" name="email" id="m_email" autoComplete="off" />
                        </div>
                        <div className="m-login__form-action">
                          <button id="m_login_forget_password_submit" className="btn m-btn m-btn--pill m-btn--custom m-btn--air m-login__btn m-login__btn--primary">Request</button>&nbsp;&nbsp;
                          <button id="m_login_forget_password_cancel" className="btn m-btn m-btn--pill m-btn--custom m-btn--air m-login__btn">Cancel</button>
                        </div>
                      </form>
                    </div>
                    <div className="m-login__account">
                      <span className="m-login__account-msg">
                        Don't have an account yet ?
                      </span>&nbsp;&nbsp;
                      <a href="/" id="m_login_signup" className="m-link m-link--light m-login__account-link">Sign Up</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
    }
  }
}

export default Login
