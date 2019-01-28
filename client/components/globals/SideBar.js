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
import SideBarMenu from './SideBarMenu'

class SideBar extends Component {

     render() {
        return (
          <div>
            <button className="m-aside-left-close  m-aside-left-close--skin-dark" id="m_aside_left_close_btn"><i className="la la-close"></i></button>
  				  <div id="m_aside_left" className="m-grid__item	m-aside-left  m-aside-left--skin-dark ">
              <SideBarMenu />
            </div>

          </div>
        );
    }
}

export default SideBar;
