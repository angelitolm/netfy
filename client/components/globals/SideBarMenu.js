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

class SideBarMenu extends Component {

     render() {
        return (
          <div id="m_ver_menu" className="m-aside-menu  m-aside-menu--skin-dark m-aside-menu--submenu-skin-dark " m-menu-vertical="1" m-menu-scrollable="1" m-menu-dropdown-timeout="500">
						<ul className="m-menu__nav  m-menu__nav--dropdown-submenu-arrow ">
							<li className="m-menu__item  m-menu__item--submenu" aria-haspopup="true" m-menu-submenu-toggle="hover"><a href="javascript:;" className="m-menu__link m-menu__toggle"><i className="m-menu__link-icon flaticon-layers"></i><span className="m-menu__link-text">Resources</span><i
									 className="m-menu__ver-arrow la la-angle-right"></i></a>
								<div className="m-menu__submenu "><span className="m-menu__arrow"></span>
									<ul className="m-menu__subnav">
										<li className="m-menu__item  m-menu__item--parent" aria-haspopup="true"><span className="m-menu__link"><span className="m-menu__link-text">Resources</span></span></li>
										<li className="m-menu__item " aria-haspopup="true" m-menu-link-redirect="1"><a href="inner.html" className="m-menu__link "><i className="m-menu__link-bullet m-menu__link-bullet--dot"><span></span></i><span className="m-menu__link-text">Timesheet</span></a></li>
										<li className="m-menu__item " aria-haspopup="true" m-menu-link-redirect="1"><a href="inner.html" className="m-menu__link "><i className="m-menu__link-bullet m-menu__link-bullet--dot"><span></span></i><span className="m-menu__link-text">Payroll</span></a></li>
										<li className="m-menu__item " aria-haspopup="true" m-menu-link-redirect="1"><a href="inner.html" className="m-menu__link "><i className="m-menu__link-bullet m-menu__link-bullet--dot"><span></span></i><span className="m-menu__link-text">Contacts</span></a></li>
									</ul>
								</div>
							</li>
							<li className="m-menu__item " aria-haspopup="true" m-menu-link-redirect="1"><a href="inner.html" className="m-menu__link "><i className="m-menu__link-icon flaticon-suitcase"></i><span className="m-menu__link-text">Finance</span></a></li>
							<li className="m-menu__item  m-menu__item--submenu" aria-haspopup="true" m-menu-submenu-toggle="hover" m-menu-link-redirect="1"><a href="javascript:;" className="m-menu__link m-menu__toggle"><i className="m-menu__link-icon flaticon-graphic-1"></i><span
									 className="m-menu__link-title"> <span className="m-menu__link-wrap"> <span className="m-menu__link-text">Support</span> <span className="m-menu__link-badge"><span className="m-badge m-badge--danger">23</span></span> </span></span><i className="m-menu__ver-arrow la la-angle-right"></i></a>
								<div className="m-menu__submenu "><span className="m-menu__arrow"></span>
									<ul className="m-menu__subnav">
										<li className="m-menu__item  m-menu__item--parent" aria-haspopup="true" m-menu-link-redirect="1"><span className="m-menu__link"><span className="m-menu__link-title"> <span className="m-menu__link-wrap"> <span className="m-menu__link-text">Support</span> <span
														 className="m-menu__link-badge"><span className="m-badge m-badge--danger">23</span></span> </span></span></span></li>
										<li className="m-menu__item " aria-haspopup="true" m-menu-link-redirect="1"><a href="inner.html" className="m-menu__link "><i className="m-menu__link-bullet m-menu__link-bullet--dot"><span></span></i><span className="m-menu__link-text">Reports</span></a></li>
										<li className="m-menu__item  m-menu__item--submenu" aria-haspopup="true" m-menu-submenu-toggle="hover" m-menu-link-redirect="1"><a href="javascript:;" className="m-menu__link m-menu__toggle"><i className="m-menu__link-bullet m-menu__link-bullet--dot"><span></span></i><span
												 className="m-menu__link-text">Cases</span><i className="m-menu__ver-arrow la la-angle-right"></i></a>
											<div className="m-menu__submenu "><span className="m-menu__arrow"></span>
												<ul className="m-menu__subnav">
													<li className="m-menu__item " aria-haspopup="true" m-menu-link-redirect="1"><a href="inner.html" className="m-menu__link "><i className="m-menu__link-icon flaticon-computer"></i><span className="m-menu__link-title"> <span className="m-menu__link-wrap">
																	<span className="m-menu__link-text">Pending</span> <span className="m-menu__link-badge"><span className="m-badge m-badge--warning">10</span></span> </span></span></a></li>
													<li className="m-menu__item " aria-haspopup="true" m-menu-link-redirect="1"><a href="inner.html" className="m-menu__link "><i className="m-menu__link-icon flaticon-signs-2"></i><span className="m-menu__link-title"> <span className="m-menu__link-wrap">
																	<span className="m-menu__link-text">Urgent</span> <span className="m-menu__link-badge"><span className="m-badge m-badge--danger">6</span></span> </span></span></a></li>
													<li className="m-menu__item " aria-haspopup="true" m-menu-link-redirect="1"><a href="inner.html" className="m-menu__link "><i className="m-menu__link-icon flaticon-clipboard"></i><span className="m-menu__link-title"> <span className="m-menu__link-wrap">
																	<span className="m-menu__link-text">Done</span> <span className="m-menu__link-badge"><span className="m-badge m-badge--success">2</span></span> </span></span></a></li>
													<li className="m-menu__item " aria-haspopup="true" m-menu-link-redirect="1"><a href="inner.html" className="m-menu__link "><i className="m-menu__link-icon flaticon-multimedia-2"></i><span className="m-menu__link-title"> <span className="m-menu__link-wrap">
																	<span className="m-menu__link-text">Archive</span> <span className="m-menu__link-badge"><span className="m-badge m-badge--info m-badge--wide">245</span></span> </span></span></a></li>
												</ul>
											</div>
										</li>
										<li className="m-menu__item " aria-haspopup="true" m-menu-link-redirect="1"><a href="inner.html" className="m-menu__link "><i className="m-menu__link-bullet m-menu__link-bullet--dot"><span></span></i><span className="m-menu__link-text">Clients</span></a></li>
										<li className="m-menu__item " aria-haspopup="true" m-menu-link-redirect="1"><a href="inner.html" className="m-menu__link "><i className="m-menu__link-bullet m-menu__link-bullet--dot"><span></span></i><span className="m-menu__link-text">Audit</span></a></li>
									</ul>
								</div>
							</li>
							<li className="m-menu__item " aria-haspopup="true" m-menu-link-redirect="1"><a href="inner.html" className="m-menu__link "><i className="m-menu__link-icon flaticon-light"></i><span className="m-menu__link-text">Administration</span></a></li>
							<li className="m-menu__item " aria-haspopup="true" m-menu-link-redirect="1"><a href="inner.html" className="m-menu__link "><i className="m-menu__link-icon flaticon-share"></i><span className="m-menu__link-text">Management</span></a></li>
							<li className="m-menu__section ">
								<h4 className="m-menu__section-text">Reports</h4>
								<i className="m-menu__section-icon flaticon-more-v2"></i>
							</li>
							<li className="m-menu__item " aria-haspopup="true" m-menu-link-redirect="1"><a href="inner.html" className="m-menu__link "><i className="m-menu__link-icon flaticon-graphic"></i><span className="m-menu__link-text">Accounting</span></a></li>
							<li className="m-menu__item " aria-haspopup="true" m-menu-link-redirect="1"><a href="inner.html" className="m-menu__link "><i className="m-menu__link-icon flaticon-pie-chart"></i><span className="m-menu__link-title"> <span className="m-menu__link-wrap"> <span
											 className="m-menu__link-text">Products</span> <span className="m-menu__link-badge"><span className="m-badge m-badge--accent m-badge--wide m-badge--rounded">new</span></span> </span></span></a></li>
							<li className="m-menu__item " aria-haspopup="true" m-menu-link-redirect="1"><a href="inner.html" className="m-menu__link "><i className="m-menu__link-icon flaticon-clipboard"></i><span className="m-menu__link-text">Sales</span></a></li>
							<li className="m-menu__item " aria-haspopup="true" m-menu-link-redirect="1"><a href="inner.html" className="m-menu__link "><i className="m-menu__link-icon flaticon-technology"></i><span className="m-menu__link-text">IPO</span></a></li>
							<li className="m-menu__item  m-menu__item--submenu m-menu__item--bottom-1" aria-haspopup="true" m-menu-submenu-toggle="hover"><a href="javascript:;" className="m-menu__link m-menu__toggle"><i className="m-menu__link-icon flaticon-info"></i><span className="m-menu__link-text">Help</span><i
									 className="m-menu__ver-arrow la la-angle-right"></i></a>
								<div className="m-menu__submenu m-menu__submenu--up"><span className="m-menu__arrow"></span>
									<ul className="m-menu__subnav">
										<li className="m-menu__item  m-menu__item--parent m-menu__item--bottom-1" aria-haspopup="true"><span className="m-menu__link"><span className="m-menu__link-text">Help</span></span></li>
										<li className="m-menu__item " aria-haspopup="true" m-menu-link-redirect="1"><a href="inner.html" className="m-menu__link "><i className="m-menu__link-bullet m-menu__link-bullet--dot"><span></span></i><span className="m-menu__link-text">Support</span></a></li>
										<li className="m-menu__item " aria-haspopup="true" m-menu-link-redirect="1"><a href="inner.html" className="m-menu__link "><i className="m-menu__link-bullet m-menu__link-bullet--dot"><span></span></i><span className="m-menu__link-text">Blog</span></a></li>
										<li className="m-menu__item " aria-haspopup="true" m-menu-link-redirect="1"><a href="inner.html" className="m-menu__link "><i className="m-menu__link-bullet m-menu__link-bullet--dot"><span></span></i><span className="m-menu__link-text">Documentation</span></a></li>
										<li className="m-menu__item " aria-haspopup="true" m-menu-link-redirect="1"><a href="inner.html" className="m-menu__link "><i className="m-menu__link-bullet m-menu__link-bullet--dot"><span></span></i><span className="m-menu__link-text">Pricing</span></a></li>
										<li className="m-menu__item " aria-haspopup="true" m-menu-link-redirect="1"><a href="inner.html" className="m-menu__link "><i className="m-menu__link-bullet m-menu__link-bullet--dot"><span></span></i><span className="m-menu__link-text">Terms</span></a></li>
									</ul>
								</div>
							</li>
						</ul>
					</div>
        );
    }
}

export default SideBarMenu;
