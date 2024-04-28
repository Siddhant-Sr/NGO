import React from "react";
import './index.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { HOST, HOST_API } from "./utilities";


function Footer() {
      return (
  
        <footer className="site-footer-one">
          <div className="site-footer-one__top">
            <div className="container">
              <div className="row">
                <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="100ms">
                  <div className="footer-widget__column footer-widget-one__about">
                    <div className="footer-widget-one__about-logo">
                      <Link className="link" to="/home">
                      <img src="https://www.supportstreetchildren.org/assets/images/resources/footer-logo.png" alt="" />
                      </Link >
                    </div>
                    {/* <p class="footer-widget-one__about-text">
                                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam iaculis lorem augue, at
                                  dapibus quam aliquet ex...
                              </p> */}<br />
                    <ul className="list-unstyled footer-widget-one__list mb-4">
                      <li>
                        <div className="icon">
                          <span className="icon-place" />
                        </div>
                        <div className="text">
                          <p>3rd Floor, Manthan Plaza, 
                            Vakola Market, Nehru Road, 
                            Santacruz (East), <br />Mumbai - 400055, India.
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <span className="icon-envelope" />
                        </div>
                        <div className="text">
                          <p><Link className="link" to="mailto:support@supportstreetchildren.org">support@supportstreetchildren.org</Link ></p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <span className="icon-call" />
                        </div>
                        <div className="text">
                          <p><Link className="link" to="tel:+91-8928846639 ">+91-8928846639 </Link ></p>
                        </div>
                      </li>
                    </ul>
                    <h3 className="footer-widget-one__title mt-5" style={{margin: '20px 0'}}>Follow Us</h3>
                    <div className="footer-widget__social mb-4">
                      <Link className="link" to="https://www.facebook.com/profile.php?id=100092875073654" target="_blank">
                      <i className="fab fa-facebook" />
                      </Link >
                      <Link className="link" to="#" target="_blank"><i className="fab fa-instagram" /></Link >
                      <Link className="link" to="https://www.linkedin.com/company/support-ngo/?viewAsMember=true " target="_blank"><i className="fab fa-linkedin-in" /></Link >
                      <Link className="link" to="#" target="_blank"><i className="fab fa-youtube" /></Link >
                    </div>
                  </div>
                </div>
                <div className="col-xl-2 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="300ms">
                  <div className="footer-widget__column footer-widget-one__latest-works clearfix">
                    <h3 className="footer-widget-one__title">Quick Link</h3>
                    <ul className="footer-widget__links-list list-unstyled clearfix">
                      <li><Link className="link" to="/home">Home</Link ></li>
                      <li><Link className="link" to="/about-us">About Us</Link ></li>
                      <li><Link className="link" to="/success-stories">Success Stories</Link ></li>
                      <li><Link className="link" to="/partner-with-us">Partner With Us</Link ></li>
                      <li><Link className="link" to="/donation-overview">Donation</Link ></li>
                      <li><Link className="link" to="/gallery">Media</Link ></li>
                      <li><Link className="link" to="/contact-us">Contact Us</Link ></li>
                    </ul>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="400ms">
                  <div className="footer-widget__column footer-widget-one__twitter-feed clearfix">
                    <h3 className="footer-widget-one__title">Programs</h3>
                    <ul className="footer-widget__links-list list-unstyled clearfix">
                      <li><Link className="link" to="/programs">Overview</Link ></li>
                      <li><Link className="link" to="/drug-prevention">Drug Prevention &amp; Awareness</Link ></li>
                      <li><Link className="link" to="/de-addiction">De-Addiction</Link ></li>
                      <li><Link className="link" to="/rehabilitation">Rehabilitation</Link ></li>
                      <li><Link className="link" to="/education">  Education</Link ></li>
                      <li><Link className="link" to="/skill-training">  Skill Training</Link ></li>
                      <li><Link className="link" to="/ansh-community-kitchen">Ansh Community Kitchen </Link ></li>
                    </ul>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="200ms">
                  <div className="footer-widget__column footer-widget-one__gallery clearfix">
                    <h3 className="footer-widget-one__title">Donate Now</h3>
                    <p>
                      Beneficiary Name: SUPPORT <br />
                      A/c No: 911010010186026<br />
                      Bank: AXIS Bank<br />
                      IFSC: UTIB0001244 <br />
                      Branch: Vakola, Mumbai
                    </p>
                    <p style={{marginTop: '10px'}}>
                    <img src="https://www.supportstreetchildren.org/assets/images/resources/QR-Code-bank.jpg" alt=""/>
                    </p>
                    {/* <Link className="link" to="donation-overview.html" class="thm-btn skill-one__btn my-3 d-block text-center">Donate Now</Link > */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="site-footer__bottom">
            <div className="container">
              <div className="site-footer__bottom-inner">
                <div className="row">
                  <div className="col-xl-6 col-lg-6"><p className="site-footer__bottom-text" style={{textAlign: 'left'}}>© 2023-24 Copyright by SUPPORT</p></div>
                  <div className="col-xl-6 col-lg-6">
                    <p className="site-footer__bottom-text" style={{textAlign: 'right'}}>Conceived &amp; Developed at <Link className="link" to="http://www.agilesoftech.com/" target="_blank"> Agile Softech</Link >
                    </p></div>
                </div>
              </div>
            </div>
          </div>
        </footer>
  
      );
    };

    export default Footer;