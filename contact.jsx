

import React from "react";
import './index.css';

function Contact() {
      return (
<>
  {/*Contact Info Start*/}
  <section className="contact-info">
    <div className="container">
      <div className="row">
        <div className="col-xl-4 col-lg-4">
          {/*Contact Info Single*/}
          <div className="contact-info__single">
            <h4 className="contact-info__title">
              SUPPORT <br /> (Society Undertaking Poor People's Onus For
              Rehabilitation){" "}
            </h4>
            <p className="contact-info__text">
              Registration No: <br />
              E-10336 (Mumbai)
            </p>
          </div>
        </div>
        <div className="col-xl-4 col-lg-4">
          {/*Contact Info Single*/}
          <div className="contact-info__single">
            <h4 className="contact-info__title">Address</h4>
            <p className="contact-info__text">
              3rd Floor, Manthan Plaza, Vakola Market, Nehru Road, <br />
              Santacruz (East), <br />
              Mumbai - 400055, India.
            </p>
          </div>
        </div>
        <div className="col-xl-4 col-lg-4">
          {/*Contact Info Single*/}
          <div className="contact-info__single contact-info__single-3">
            <h4 className="contact-info__title">Contact</h4>
            <p className="contact-info__email-phone">
              <a href="" className="contact-info__phone">
                Vijay Pawar (Program Director) <br /> +91-8928846639
              </a>
              <a href="" className="contact-info__phone">
                +91-22-26652904 / 26653045 / 26662806
              </a>
              <a
                href="mailto:support@supportstreetchildren.org"
                className="contact-info__email"
              >
                support@supportstreetchildren.org
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*Contact Info End*/}
  {/*Contact page Google Map Start*/}
  <section className="contact-page-google-map">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1885.2960949492835!2d72.8546463!3d19.0816597!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c8ff75c8e6c9%3A0x518f0664d3a4920f!2sSociety%20Undertaking%20poor%20people's%20onus%20for%20Rehabilation!5e0!3m2!1sen!2sin!4v1698312055695!5m2!1sen!2sin"
      className="contact-page-google-map__one"
      allowFullScreen=""
      title="iframe1"
    />
  </section>
  {/*Google Map End*/}
  {/*Contact Page Start*/}
  <section className="contact-page">
    <div className="container">
      <div className="row">
        <div className="col-xl-12 col-lg-12">
          <div className="contact-page__left">
            <div className="section-title text-left">
              {/* <span class="section-title__tagline">Our Contact now</span> */}
              <h2 className="section-title__title">Enquiry Form</h2>
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
                        placeholder="Company Name"
                        name="name"
                      />
                    </div>
                  </div>
                  <div className="col-xl-6">
                    <div className="comment-form__input-box">
                      <input type="text" placeholder="Your name" name="name" />
                    </div>
                  </div>
                  <div className="col-xl-6">
                    <div className="comment-form__input-box">
                      <input
                        type="email"
                        placeholder="Email address"
                        name="email"
                      />
                    </div>
                  </div>
                  <div className="col-xl-6">
                    <div className="comment-form__input-box">
                      <input
                        type="text"
                        placeholder="Mobile number"
                        name="Phone"
                      />
                    </div>
                  </div>
                  <div className="col-xl-6">
                    <div className="comment-form__input-box">
                      <input
                        type="text"
                        placeholder="Landline number"
                        name="Phone"
                      />
                    </div>
                  </div>
                  <div className="col-xl-6">
                    <div className="comment-form__input-box">
                      <input type="text" placeholder="Website" name="Website" />
                    </div>
                  </div>
                  <div className="col-xl-6">
                    <div className="comment-form__input-box">
                      <input type="text" placeholder="Address" name="Address" />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-xl-12">
                    <div className="comment-form__input-box text-message-box">
                      <textarea
                        name="message"
                        placeholder="Write a comment"
                        defaultValue={""}
                      />
                    </div>
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
        </div>
      </div>
    </div>
  </section>
  {/*Contact Page End*/}
</>
      );
    };

    export default Contact;