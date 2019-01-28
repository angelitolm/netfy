// eslint-disable-next-line
/*
  This file is a part of Netfy
  Author: Angel Labrada Massó
 */

// ===============================================================
// Import Modules
// ===============================================================
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

// ===============================================================
// Components
// ===============================================================
import HeaderMenu from './HeaderMenu'

import ImgLogo from '../../assets/app/media/img/logos/logo.png'

class Header extends Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.session = this.session.bind(this);

    this.state = {
      isOpen: false
    };

  }

  session(){
    sessionStorage.removeItem("token")
    sessionStorage.removeItem("user")
  }

      toggle() {
        this.setState({
          isOpen: !this.state.isOpen
        });
      }
     render() {
        return (
          <header id="m_header" className="m-grid__item    m-header " m-minimize-offset="200" m-minimize-mobile-offset="200">
            <div className="m-container m-container--fluid m-container--full-height">
              <div className="m-stack m-stack--ver m-stack--desktop">

                <div className="m-stack__item m-brand  m-brand--skin-dark ">
    							<div className="m-stack m-stack--ver m-stack--general">
    								<div className="m-stack__item m-stack__item--middle m-brand__logo">
    									<a href="index.html" className="m-brand__logo-wrapper">
    										<img alt="" src={ ImgLogo } />
    									</a>
    									<h3 className="m-header__title">Apps</h3>
    								</div>
    								<div className="m-stack__item m-stack__item--middle m-brand__tools">

    									<a href="javascript:;" id="m_aside_left_offcanvas_toggle" className="m-brand__icon m-brand__toggler m-brand__toggler--left m--visible-tablet-and-mobile-inline-block">
    										<span></span>
    									</a>

    									<a id="m_aside_header_menu_mobile_toggle" href="javascript:;" className="m-brand__icon m-brand__toggler m--visible-tablet-and-mobile-inline-block">
    										<span></span>
    									</a>

    									<a id="m_aside_header_topbar_mobile_toggle" href="javascript:;" className="m-brand__icon m--visible-tablet-and-mobile-inline-block">
    										<i className="flaticon-more"></i>
    									</a>

    								</div>
    							</div>
    						</div>

                < HeaderMenu />

              </div>
            </div>
          </header>
        );
    }
}

export default Header;
