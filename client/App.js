import React, { Component } from 'react';

//import logo from './logo.svg';
//import './assets/app/js/webfont';
import './assets/vendors/base/vendors.bundle.css';
import './assets/demo/default/base/style.bundle.css';
import logo1 from './assets/app/media/img/logos/logo-1.png';
//import logo from './assets/demo/default/media/img/logo/favicon.ico';

class App extends Component {
  constructor(){
    super()
    this.SubmitUser = this.SubmitUser.bind(this);
  }

  SubmitUser = e =>{
    e.preventDefault();
  }

  render() {
    return (
      <body className="m--skin- m-header--fixed m-header--fixed-mobile m-aside-left--enabled m-aside-left--skin-dark m-aside-left--fixed m-aside-left--offcanvas m-footer--push m-aside--offcanvas-default">
    		<div className="m-grid m-grid--hor m-grid--root m-page">
    			<div className="m-grid__item m-grid__item--fluid m-grid m-grid--hor m-login m-login--signin m-login--2 m-login-2--skin-3" >
    				<div className="m-grid__item m-grid__item--fluid	m-login__wrapper">
    					<div className="m-login__container">
    						<div className="m-login__logo">
                <img src={logo1} alt="logo" />
    						</div>
    						<div className="m-login__signin">
    							<div className="m-login__head">
    								<h3 className="m-login__title">Sign In To Admin</h3>
    							</div>
    							<form className="m-login__form m-form" onSubmit = { this.SubmitUser }>
    								<div className="form-group m-form__group">
    									<input className="form-control m-input" type="text" placeholder="Email" name="email" autocomplete="off" />
    								</div>
    								<div className="form-group m-form__group">
    									<input
                        invalid = {true}
                         className="form-control m-input m-login__form-input--last" type="password" placeholder="Password" name="password" />
                       <div id="password-error" class="form-control-feedback">This field is required.</div>
    								</div>
    								<div className="row m-login__form-sub">
    									<div className="col m--align-left m-login__form-left">
    										<label className="m-checkbox  m-checkbox--light">
    											<input type="checkbox" name="remember" /> Remember me
    											<span></span>
    										</label>
    									</div>
    									<div className="col m--align-right m-login__form-right">
    									</div>
    								</div>
    								<div className="m-login__form-action">
    									<button id="m_login_signin_submit" className="btn btn-focus m-btn m-btn--pill m-btn--custom m-btn--air  m-login__btn">Sign In</button>
    								</div>
    							</form>
    						</div>
              </div>
    				</div>
    			</div>
    		</div>
        <script src="./assets/app/js/webfont"></script>

    	</body>
    );
  }
}

export default App;
