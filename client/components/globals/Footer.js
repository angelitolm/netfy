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


class Footer extends Component {

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
          <footer className="m-grid__item		m-footer">
            <div className="m-container m-container--fluid m-container--full-height m-page__container">
              <div className="m-stack m-stack--flex-tablet-and-mobile m-stack--ver m-stack--desktop">
                <div className="m-stack__item m-stack__item--left m-stack__item--middle m-stack__item--last">
                  <button type="button" className="btn m-btn m-btn--gradient-from-focus m-btn--gradient-to-danger" style={ { background: '#bc1965' } }>Netfy v1.0.0</button>
                  <span className="m-footer__copyright">
                    &nbsp;2017 &copy; Metronic theme by <a href="https://keenthemes.com" className="m-link">Keenthemes</a>
                  </span>
                </div>
                <div className="m-stack__item m-stack__item--right m-stack__item--middle m-stack__item--first">
                  <ul className="m-footer__nav m-nav m-nav--inline m--pull-right">
                    <li className="m-nav__item">
                      <a href="#" className="m-nav__link">
                        <span className="m-nav__link-text">About</span>
                      </a>
                    </li>
                    <li className="m-nav__item">
                      <a href="#" className="m-nav__link">
                        <span className="m-nav__link-text">Privacy</span>
                      </a>
                    </li>
                    <li className="m-nav__item">
                      <a href="#" className="m-nav__link">
                        <span className="m-nav__link-text">T&C</span>
                      </a>
                    </li>
                    <li className="m-nav__item">
                      <a href="#" className="m-nav__link">
                        <span className="m-nav__link-text">Purchase</span>
                      </a>
                    </li>
                    <li className="m-nav__item m-nav__item">
                      <a href="#" className="m-nav__link" data-toggle="m-tooltip" title="Support Center" data-placement="left">
                        <i className="m-nav__link-icon flaticon-info m--icon-font-size-lg3"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </footer>
        );
    }
}

export default Footer;
