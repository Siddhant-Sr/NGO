
import React from "react";
import './index.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { HOST, HOST_API } from "./utilities";

function Partner() {
  const [content, setContent] = useState([]);
  
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(HOST_API+"/partner-with-us?populate=*");
      const json = await response.json();
      setContent(json.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  useEffect(() => {
    console.log(content[0]);
  }, [content]);

      return (
        <>
  {/*Page Header Start*/}
  <section className="page-header">
    <div className="page-header-bg"></div>
    <div className="container">
      <div className="page-header__inner">
        <h2>Partner With Us</h2>
        <ul className="thm-breadcrumb list-unstyled">
          <li>
            <a href="index.html">Home</a>
          </li>
          <li>
            <span>/</span>
          </li>
          <li className="active">Partner With Us</li>
        </ul>
      </div>
    </div>
  </section>
  {/*Page Header End*/}
  {/*About One Start*/}
  <section className="about-one about-three">
    <div className="container">
      <div className="row">
        <div className="col-xl-12">
          <section className="Contribute-list">
            <div className="Contribute-list-col-5 wow fadeInUp">
              <span className="anchor" id="partners" />
              <p>
                <strong>
                  We make a living by what we get, but we make a life by what we
                  give.
                  <br />- Winston Churchill
                </strong>
                <br />
                <br />A whiff of gentle breeze blows away a single feather, but
                hundreds of them together make a mighty wing capable of
                withstanding powerful gusts. Likewise, every little mite shared
                by many for a noble cause goes a long way in overcoming the most
                formidable of challenges. At SUPPORT, we implore conscientious
                folk like you to add your bit, in cash or in kind, in our
                earnest attempts to transform the lives of our less-fortunate
                brethren. No contribution is too small, no contributor too
                insignificant; for, as you will agree, each and every life
                deserves dignity, and we were sent into this world to ensure
                this!
              </p>
            </div>
          </section>
          <section className="Contribute-list">
            <div className="Contribute-list-col-5 wow fadeInUp">
              {/* <span class="anchor" id="partners"></span> */}
              <h4> Partners</h4>
              <p>
                Several altruistic individuals, benevolent Trusts and
                conscientious Corporates have partnered with us over the years
                and we are eternally grateful to all of them for their
                invaluable contribution to SUPPORT, both in cash as well as in
                kind. Have a look:
              </p>
            </div>
          </section>
          <section className="Contribute-list">
            <div className="Contribute-list-col-1 wow fadeInUp">
              <ul>
                <li>Brihanmumbai Municipal Corporation</li>
                <li>IndusInd Bank Limited</li>
                <li>
                  Swiss Air Staff Foundation for Children in Need, Switzerland
                </li>
                <li>Charities Aid Foundation Gay – India</li>
                <li>United Way Mumbai</li>
                <li>Azim Premji Philanthropic Initiatives</li>
                <li>Yes Foundation</li>
                <li>Fundacion Sonarisas De Bombay (SONRISAS)</li>
                <li>Accenture - Online Giving Foundation</li>
                <li>Dharma Production Pvt. Ltd</li>
                <li>DHL Express (India) Pvt. Ltd.</li>
                <li>SBI Fund Management </li>
              </ul>
            </div>
            <div className="Contribute-list-col-2">
              {/* <div class="Contribute-list-img">
                              <img src="assets/images/resources/Partners-img.jpg" class="wow fadeInRight">
                          </div> */}
              <div className="logo-list">
                <img src="assets/images/brand/1.jpg" />
                <img src="assets/images/brand/2.jpg" />
                <img src="assets/images/brand/3.jpg" />
                <img src="assets/images/brand/4.jpg" />
                <img src="assets/images/brand/5.jpg" />
                <img src="assets/images/brand/6.jpg" />
                <img src="assets/images/brand/7.jpg" />
                <img src="assets/images/brand/8.jpg" />
                <img src="assets/images/brand/9.jpg" />
                <img src="assets/images/brand/10.jpg" />
                <img src="assets/images/brand/11.jpg" />
                <img src="assets/images/brand/12.jpg" />
                <img src="assets/images/brand/13.jpg" />
                <img src="assets/images/brand/14.jpg" />
              </div>
            </div>
          </section>
          <section className="Contribute-list">
            <div className="Contribute-list-col-5 wow fadeInUp">
              <span className="anchor" id="volunteers" />
              <div className="row mt-5">
                <div className="col-xl-6 col-lg-6">
                  <h4 className="mt-3"> Volunteers</h4>
                  <p>
                    The humble chariot-driver contributes as much to the battle
                    as the valiant soldier who fights in the field. So, even if
                    you cannot contribute materialistically to our efforts at
                    SUPPORT, you can still lend us a helping hand by offering
                    your expertise and other service in our myriad activities.
                    Here are the ways:
                  </p>
                  <ul>
                    <li>Be a Yoga Teacher</li>
                    <li>Act as Career Councillor</li>
                    <li>Conduct Recreational Activities</li>
                    <li>
                      Guide in Drafting &amp; Editing Documents, Newsletters,
                      Annual Reports
                    </li>
                    <li>Help in Maintaining Social Media, Blogging etc.</li>
                  </ul>
                  <p>
                    Let us keep in mind that he who attempts to secure the good
                    of others, has already secured his own!
                  </p>
                </div>
                <div className="col-xl-6 col-lg-6">
                  <div className="contact-page__left">
                    <div className="section-title text-left mt-3">
                      {/* <span class="section-title__tagline">Our Contact now</span> */}
                      <h2 className="section-title__title">
                        Become a Volunteer
                      </h2>
                    </div>
                    <div className="contact-page__form">
                      <form
                        action="assets/inc/sendemail.php"
                        className="comment-one__form contact-form-validated"
                        noValidate="novalidate"
                      >
                        <div className="row">
                          <div className="col-xl-12">
                            <div className="comment-form__input-box">
                              <input
                                type="text"
                                placeholder="Your name"
                                name="name"
                              />
                            </div>
                          </div>
                          <div className="col-xl-12">
                            <div className="comment-form__input-box">
                              <input
                                type="email"
                                placeholder="Email address"
                                name="email"
                              />
                            </div>
                          </div>
                          <div className="col-xl-12">
                            <div className="comment-form__input-box">
                              <input
                                type="text"
                                placeholder="Mobile number"
                                name="Phone"
                              />
                            </div>
                          </div>
                          <div className="col-xl-12">
                            <div className="comment-form__input-box">
                              <input
                                type="text"
                                placeholder="Skills"
                                name="Phone"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-xl-12">
                            <div className="comment-form__btn-box">
                              <button
                                type="submit"
                                className="thm-btn comment-form__btn"
                              >
                                Send a message
                              </button>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  <p className="mt-4">
                    If any queries on how to join us, please contact us at{" "}
                    <a href="mailto:support@supportstreetchildren.org">
                      support@supportstreetchildren.org
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  </section>
  {/*About One End*/}
</>



      );
};

export default Partner