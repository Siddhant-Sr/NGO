import React from "react";
import './index.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Header() {
    return (
      <div className="Header">
        <header className="main-header clearfix">
          <div className="main-header__top clearfix">
            <div className="container clearfix">
              <div className="main-header__top-inner clearfix">
                <div className="main-header__top-left">
                  <ul className="list-unstyled main-header__top-address">
                    <li>
                      <div className="icon">
                        <span className="icon-call" />
                      </div>
                      <div className="text">
                        <p><Link className="link" to="tel:8928846639">+91-8928846639</Link></p>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <span className="icon-envelope" />
                      </div>
                      <div className="text">
                        <p><Link className="link" to="mailto:support@supportstreetchildren.org">support@supportstreetchildren.org</Link></p>
                      </div>
                    </li>
                    {/* <li>
                                    <div class="icon">
                                        <span class="icon-place"></span>
                                    </div>
                                    <div class="text">
                                        <p>24/21, 2nd Rangpur, Sapla</p>
                                    </div>
                                </li> */}
                  </ul>
                </div>
                <div className="main-header__top-right">
                  {/* <ul class="list-unstyled main-header__top-right-content">
                                <li><Link className="link" to="#">Login</Link></li>
                                <li><Link className="link" to="#">Help You</Link></li>
                                <li><Link className="link" to="#" class="search-toggler"> <i class="fa fa-search"></i> Search</Link></li>
                            </ul> */}
                  <Link className="link thm-btn main-header__btn" to="/donate"><i className="fas fa-heart" /> Donate Now</Link> 
                </div>
              </div>
            </div>
          </div>
          <nav className="main-menu clearfix">
            <div className="container clearfix">
              <div className="main-menu-wrapper clearfix">
                <div className="main-menu-wrapper__left">
                  <div className="main-menu-wrapper__logo">
                    <Link className="link" to="/">
                    <img src="https://www.supportstreetchildren.org/assets/images/resources/logo-1.png" alt="" />
                    </Link>
                  </div>
                </div>
                <div className="main-menu-wrapper__right">
                  <div className="main-menu-wrapper__main-menu">
                    {/* <Link className="link" to="#" className="mobile-nav__toggler"> */}
                    <i className="fa fa-bars" />
                    {/* </Link> */}
                    <ul className="main-menu__list">
                      <li className="dropdown current">
                      <Link className="link" to="/">Home</Link>
                      </li>
                      <li className="dropdown">
                      <Link className="link" to="/about-us">
              About us
            </Link>
                        <ul>
                          <li><Link className="link" to="/about-us">Profile</Link></li>
                          <li><Link className="link" to="/facilities">Facilities</Link></li>
                          <li><Link className="link" to="/compliances">Compliances</Link></li>
                          <li><Link className="link" to="/team">Team</Link></li>
                          <li><Link className="link" to="/trustees">Trustees</Link></li>
                        </ul>
                      </li>
                      <li className="dropdown">
                        <Link className="link" to="/programs">Programs</Link>
                        <ul>
                          <li><Link className="link" to="/programs-overview">Overview</Link></li>
                          <li><Link className="link" to="/drug-prevention-and-awareness">Drug Prevention &amp; Awareness</Link></li>
                          <li><Link className="link" to="/de-addiction">De-Addiction</Link></li>
                          <li><Link className="link" to="/rehabilitation">Rehabilitation</Link></li>
                          <li><Link className="link" to="/education">  Education</Link></li>
                          <li><Link className="link" to="/skill-training">  Skill Training</Link></li>
                          <li><Link className="link" to="/ansh-community-kitchen">Ansh Community Kitchen </Link></li>
                        </ul>
                      </li>
                      <li>
                        <Link className="link" to="/success-stories">Success Stories</Link>
                      </li>
                      <li className="dropdown">
                      <Link className="link" to="/partner-with-us">Partner With Us</Link>
                        <ul>
                          <li><Link className="link" to="/partner-with-us">Overview</Link></li>
                          <li><Link className="link" to="/partner-with-us">Partners</Link></li>
                          <li><Link className="link" to="/partner-with-us">Volunteers</Link></li>
                        </ul>
                      </li>
                      <li className="dropdown">
                        <Link className="link" to="/donate">Donation</Link>
                        <ul>
                          <li><Link className="link" to="/programs">Overview</Link></li>
                          <li><Link className="link" to="/donate">Donate Now</Link></li>                                            
                          <li><Link className="link" to="/policies-and-terms">Policies &amp; Terms </Link></li>
                        </ul>
                      </li>
                      <li className="dropdown">
                        <Link className="link" to="/gallery">Media</Link>
                        <ul>
                          <li><Link className="link" to="/gallery">Gallery</Link></li>
                          <li><Link className="link" to="/annual-reports">Annual Reports</Link></li>
                        </ul>
                      </li>
                      <li><Link className="link" to="/contact-us">
              Contact us
            </Link>
            </li>
                    </ul>
                  </div>
                  {/* <Link className="link" to="donation-overview.html" class="thm-btn main-header__btn">Donate Now</Link> */}
                </div>
              </div>
            </div>
          </nav>
        </header>
        <div className="stricky-header stricked-menu main-menu">
          <div className="sticky-header__content" />{/* /.sticky-header__content */}
        </div>{/* /.stricky-header */}
      </div>
    );
  }
  
  export default Header;
  