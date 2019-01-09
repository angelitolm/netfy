/*
  This file is a part of Netfy
  Author: Angel Labrada Massó
 */
'use strict'

// ===============================================================
// Import Modules
// ===============================================================
import React, { Component } from 'react'

class App extends Component {
  // SignUp
  // signUp () {
  //   alert('holaaaaa')
  //   console.log('registrandose')
  // }

  render () {
    return (
      <div>
        <div className='m-login__logo'>
          <a href='#'>
            <img src='img/app/logos/logo.png' />
          </a>
        </div>
        <div className='m-login__signin'>
          <div className='m-login__head'>
            <h3 className='m-login__title'>Sign In To Admin</h3>
          </div>
          <form className='m-login__form m-form' action=''>
            <div className='form-group m-form__group'>
              <input className='form-control m-input' type='text' placeholder='Username' name='username' autoComplete='off' />
            </div>
            <div className='form-group m-form__group'>
              <input className='form-control m-input m-login__form-input--last' type='password' placeholder='Password' name='password' />
            </div>
            <div className='row m-login__form-sub'>
              <div className='col m--align-left m-login__form-left'>
                <label className='m-checkbox  m-checkbox--light'>
                  <input type='checkbox' name='remember' /> Remember me
                  <span></span>
                </label>
              </div>
              <div className='col m--align-right m-login__form-right'>
                <a href='javascript:;' id='m_login_forget_password' className='m-link'>Forget Password ?</a>
              </div>
            </div>
            <div className='m-login__form-action'>
              <button id='m_login_signin_submit' className='btn btn-focus m-btn m-btn--pill m-btn--custom m-btn--air  m-login__btn m-login__btn--primary'>Sign In</button>
            </div>
          </form>
        </div>
        <div className='m-login__signup'>
          <div className='m-login__head'>
            <h3 className='m-login__title'>Sign Up</h3>
            <div className='m-login__desc'>Enter your details to create your account:</div>
          </div>
          <form id='form_signup' className='m-login__form m-form'>
            <div className='form-group m-form__group'>
              <input className='form-control m-input' type='text' placeholder='Fullname' name='name' autoComplete='off' />
            </div>
            <div className='form-group m-form__group'>
              <input className='form-control m-input' type='text' placeholder='Email' name='email' autoComplete='off' />
            </div>
            <div className='form-group m-form__group'>
              <input className='form-control m-input' type='text' placeholder='Username' name='username' autoComplete='off' />
            </div>
            <div className='form-group m-form__group'>
              <input className='form-control m-input' type='password' placeholder='Password' name='password' />
            </div>
            <div className='form-group m-form__group'>
              <input className='form-control m-input m-login__form-input--last' type='password' placeholder='Confirm Password' name='rpassword' />
            </div>
            <div className='row form-group m-form__group m-login__form-sub'>
              <div className='col m--align-left'>
                <label className='m-checkbox m-checkbox--light'>
                  <input type='checkbox' name='agree' />I Agree the <a href='#' className='m-link m-link--focus'>terms and conditions</a>.
                  <span></span>
                </label>
                <span className="m-form__help"></span>
              </div>
            </div>
            <div className='m-login__form-action'>
              <button id='m_login_signup_submit' className='btn m-btn m-btn--pill m-btn--custom m-btn--air m-login__btn m-login__btn--primary'>Sign Up</button>&nbsp;&nbsp;
              <button id='m_login_signup_cancel' className='btn m-btn m-btn--pill m-btn--custom m-btn--air m-login__btn'>Cancel</button>
            </div>
          </form>
        </div>
        <div className='m-login__forget-password'>
          <div className='m-login__head'>
            <h3 className='m-login__title'>Forgotten Password ?</h3>
            <div className='m-login__desc'>Enter your email to reset your password:</div>
          </div>
          <form className='m-login__form m-form' action=''>
            <div className='form-group m-form__group'>
              <input className='form-control m-input' type='text' placeholder='Email' name='email' id='m_email' autoComplete='off' />
            </div>
            <div className='m-login__form-action'>
              <button id='m_login_forget_password_submit' className='btn m-btn m-btn--pill m-btn--custom m-btn--air m-login__btn m-login__btn--primary'>Request</button>&nbsp;&nbsp;
              <button id='m_login_forget_password_cancel' className='btn m-btn m-btn--pill m-btn--custom m-btn--air m-login__btn'>Cancel</button>
            </div>
          </form>
        </div>
        <div className='m-login__account'>
          <span className='m-login__account-msg'>
            Don't have an account yet ?
          </span>&nbsp;&nbsp;
          <a href='javascript:;' id='m_login_signup' className='m-link m-link--light m-login__account-link'>Sign Up</a>
        </div>
      </div>
    )
  }
}

export default App
