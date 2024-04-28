import React from "react";
import './index.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { HOST, HOST_API } from "./utilities";

function About() {
    return (
    <>
  {/* Hello world */}
  <section className="page-header">
    <div className="page-header-bg"></div>
    <div className="container">
      <div className="page-header__inner">
        <h2>Profile</h2>
        <ul className="thm-breadcrumb list-unstyled">
          <li>
            <a href="index.html">Home</a>
          </li>
          <li>
            <span>/</span>
          </li>
          <li className="active">About Us</li>
        </ul>
      </div>
    </div>
  </section>
  {/*Page Header End*/}
  {/*About One Start*/}
  <section className="about-one about-three">
    <div className="container">
      <div className="row">
        <div className="col-xl-6">
          <div
            className="about-one__left wow slideInLeft"
            data-wow-delay="100ms"
            data-wow-duration="2500ms"
          >
            <div className="about-one__img-box">
              <div className="about-one__img">
                <img src="assets/images/resources/about-one-img-1.jpg" alt="" />
              </div>
              <div
                className="about-one__small-img wow zoomIn animated animated"
                data-wow-delay="500ms"
                data-wow-duration="2500ms"
              >
                <img
                  src="frontend/website-supp/src/images/resources/about-one-small-img.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-6">
          <div className="about-one__right">
            <div className="about-one__right-content">
              <div className="section-title text-left">
                <span className="section-title__tagline" id="aboutH1">
                  ‘To live is human; to let live is divine!’
                </span>
                <h2 className="section-title__title" id="aboutH2">
                  We can save more lives with Your Helping Hand{" "}
                </h2>
              </div>
              <p className="about-one__text" id="about1">
                <strong> SUPPORT</strong> (Society Undertaking Poor People’s
                Onus for Rehabilitation), a voluntary Non-Governmental
                Organization registered as a Charitable Trust in Mumbai in 1985,
                was started by a few altruistic college youth who wanted to give
                back to the society.
                <br />
                <br />
                For nearly four decades, <strong> SUPPORT</strong> has been
                actively working with street children and homeless youth in the
                field of prevention of drug addiction. It is one of the few NGOs
                in India that offer residential rehabilitation programs for
                street children and youth addicted to drug abuse, the most
                neglected segment of the society.
                <br />
                <br />
                This issue urgently needed intervention because, in the absence
                of appropriate services/facilities, street children and youth
                had to be de-addicted from substance abuse so that their risk
                behaviour vis-à-vis crime on the streets could be eventually
                curtailed.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-xl-12 my-4">
          <p className="about-one__text" id="about2">
            Most street children come from piteous backgrounds with horrifying
            stories of parental abuse, abject poverty, sexual abuse etc. driven
            by misplaced enthusiasm and lured by the razzle-dazzle of big
            cities. Some merely run away from their homes in far off villages,
            to strike it big. However, the moment they land on the streets in
            any metropolis, the tragic reality of the harsh life there dawns on
            them. Alone on the streets with no one to turn to and unable to
            return home, they quickly get into petty crimes to survive, and,
            eventually to drug abuse, before inevitably turning into potential
            threats to the society.
            <br />
            <br />
            Our staff at SUPPORT identify such youngsters and help them to give
            up their drug addiction through the processes of awareness by
            counselling, treatment, de-addiction and rehabilitation. The
            rehabilitation programme offers them an alternative to street life
            by educating them and providing vocational skills, so that the youth
            can become clean and lead respectable and healthy lives in the
            mainstream of the society.
            <br />
            <br />
            SUPPORT’s uncompromising dedication towards its goals of empathetic
            understanding, gentle counselling, medical healing, detoxification
            and rehabilitation ensures that such substance-abusing street
            children and homeless youth in Mumbai pull out from the abyss of
            desolation and destitution. Invigorated with renewed zeal and
            skilled in a useful trade, they enter the mainstream of the society
            as respectable individuals with dignity and purpose.
          </p>
        </div>
      </div>
    </div>
  </section>
  {/*About One End*/}
</>

);
}

export default About;