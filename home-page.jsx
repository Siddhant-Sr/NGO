import React from "react";
import './index.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { HOST, HOST_API } from "./utilities";
import Tile from "./Tile";

function Home() {

  const [content, setContent] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch("http://localhost:1337/api/programs?populate=*");
      const json = await data.json();
      setContent(json?.data || []); // Ensure setContent receives an array
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

      return (
<>


  <div className="scroll-down-box">
    <span />
    <span />
    <span />
  </div>
  <section className="up-comming-events">
    <div className="container">
      <div className="row">
        <div className="col-xl-12">
          <div
            className="up-comming-events__inner wow fadeInUp"
            data-wow-delay="100ms"
          >
            <div className="row">
              <div className="col-md-12">
                <div className="section-title text-center">
                  {/* <span class="section-title__tagline"></span> */}
                  <h2 className="section-title__title1">
                    How do you Want to <span>Help Children</span> Today?
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="causes-one">
    <div className="container">
      <div className="section-title text-center">
        {/* <span class="section-title__tagline"></span> */}
        <h2 className="section-title__title">Our Programs</h2>
      </div>
 


      <div className="row">
      {console.log(content)}
      {content.map((item, index) => (

        <Tile key={item.id} program={item} />// Assuming there is a link attribute in your data
      
      ))}
    </div>
    {/* <div className="row">
      {content.map((item) => (
        <Tile key={item.id} program={item} />
      ))}
    </div> */}
    </div>
  </section>
  <section className="team-one">
    <div className="container">
      <div className="section-title text-center">
        {/* <span class="section-title__tagline">Donation</span> */}
        <h2 className="section-title__title">
          {" "}
          Donate for a Happier Childhood{" "}
        </h2>
      </div>
      <div className="row">
        <div
          className="col-xl-12 col-lg-12 wow fadeInLeft"
          data-wow-delay="100ms"
        >
          <p className="mb-3 text-center">
            Like little drops of water and tiny grains of sand making vast
            oceans and mighty deserts, every little contribution of magnanimous
            folk like you enables us to transform precious lives. We implore you
            to donate in cash and/or kind and participate in our endeavour to
            help give decent lives to scores of street children and youth mired
            in the deadly trap of substance abuse.
            <br />
            Let us contribute humanely to help the hapless and make our society
            better. You may choose from any of the following plans:
          </p>
        </div>
        <div
          className="col-xl-1 col-lg-12 wow fadeInLeft"
          data-wow-delay="100ms"
        />
        <div
          className="col-xl-4 col-lg-6 wow fadeInLeft"
          data-wow-delay="100ms"
        >
          <section className="slider">
            <div
              id="carouselExampleCaptions"
              className="carousel slide"
              data-bs-ride="carousel"
              data-interval={5000}
            >
              <div className="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to={0}
                  className="active"
                  aria-current="true"
                  aria-label="Slide 1"
                />
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to={1}
                  aria-label="Slide 2"
                />
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to={2}
                  aria-label="Slide 3"
                />
                {/* <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3"
                            aria-label="Slide 4"></button>
                          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4"
                            aria-label="Slide 5"></button> */}
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    className="d-block w-100"
                    src="https://www.supportstreetchildren.org/assets/images/donation/Sponsor-a-Child.png"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    className="d-block w-100"
                    src="https://www.supportstreetchildren.org/assets/images/donation/Donation.png"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    className="d-block w-100"
                    src="https://www.supportstreetchildren.org/assets/images/donation/Sponsor-a-Child.png"
                  />
                </div>
              </div>
              {/* <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span class="visually-hidden">Previous</span>
                    </button>
                      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                      <span class="carousel-control-next-icon" aria-hidden="true"></span>
                      <span class="visually-hidden">Next</span>
                    </button> */}
            </div>
          </section>
        </div>
        <div
          className="col-xl-7 col-lg-6 wow fadeInLeft"
          data-wow-delay="100ms"
        >
          <div className="donate-box">
            <div className="row">
              <div className="col-md-12">
                <p>
                  Donate a Meal or Full-Day Meal – <strong>INR 18,000/-</strong>
                  <br />
                  Donate for Education – <strong>INR 50,000/-</strong>
                  <br />
                  Recreational Donation - <strong>INR 30,000/- </strong>
                  <br />
                  General Donation - Any desired amount <br />
                  Donate In Kind - Food Grains, Clothes, Books etc... <br /> you
                  can contact us at
                  <br />
                  Phone: +91-8928846639
                  <br />
                  Email:{" "}
                  <Link href="mailto:support@supportstreetchildren.org">
                    support@supportstreetchildren.org
                  </Link>
                </p>
                <br /> <br />
              </div>
              <div className="col-md-6">
                <p>
                  Beneficiary Name: SUPPORT
                  <br />
                  A/c No: 911010010186026
                  <br />
                  Bank: AXIS Bank
                  <br />
                  IFSC: UTIB0001244 <br />
                  (Branch: Vakola, Mumbai)
                </p>
                <br />
              </div>
              <div className="col-md-6">
                <p>
                  {" "}
                  <img src="https://www.supportstreetchildren.org/assets/images/resources/QR-Code-bank.jpg
" alt="" />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*Up Comming Events Start*/}
  <section className="up-comming-events">
    <div className="container">
      <div className="row">
        <div className="col-xl-12">
          <div
            className="up-comming-events__inner wow fadeInUp"
            data-wow-delay="100ms"
          >
            <div className="row">
              <div className="col-md-12  py-5">
                <div className="section-title text-center">
                  {/* <span class="section-title__tagline"></span> */}
                  <h2 className="section-title__title">
                    Impact of your Donations{" "}
                  </h2>
                </div>
                <div className="row">
                  <div
                    className="col-xl-3 col-lg-6 col-md-6 wow fadeInLeft"
                    data-wow-delay="100ms"
                  >
                    {/*Counter One Single*/}
                    <div className="counter-one__single">
                      <div className="counter-one__content">
                        <p>
                          {" "}
                          <img src="https://www.supportstreetchildren.org/assets/images/icon/1.png" />
                        </p>
                        <p className="counter-one__text">Reached out to</p>
                        <h3 className="odometer" data-count={100}>
                          7819
                        </h3>
                        <span className="counter-one__letter">k+</span>
                        <p className="counter-one__text">
                          through our drug awareness program
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-xl-3 col-lg-6 col-md-6 wow fadeInLeft"
                    data-wow-delay="100ms"
                  >
                    {/*Counter One Single*/}
                    <div className="counter-one__single">
                      <div className="counter-one__content">
                        <p>
                          {" "}
                          <img src="https://www.supportstreetchildren.org/assets/images/icon/2.png" />
                        </p>
                        <h3 className="odometer" data-count={2600}>
                          00
                        </h3>
                        <span className="counter-one__letter">+</span>
                        <p className="counter-one__text">
                          {" "}
                          drug-addicted children detoxicated and healed with 90%
                          success rate
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-xl-3 col-lg-6 col-md-6 wow fadeInLeft"
                    data-wow-delay="100ms"
                  >
                    {/*Counter One Single*/}
                    <div className="counter-one__single">
                      <div className="counter-one__content">
                        <p>
                          <img src="https://www.supportstreetchildren.org/assets/images/icon/3.png" />
                        </p>
                        <h3>
                          {" "}
                          <small className="odometer" data-count={1680}>
                            00
                          </small>{" "}
                          &amp;{" "}
                          <small className="odometer" data-count={1563}>
                            00
                          </small>
                        </h3>
                        <p className="counter-one__text">
                          boys and girls formally educated through BMC Schools
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-xl-3 col-lg-6 col-md-6 wow fadeInLeft"
                    data-wow-delay="100ms"
                  >
                    {/*Counter One Single*/}
                    <div className="counter-one__single">
                      <div className="counter-one__content">
                        <p>
                          <img src="https://www.supportstreetchildren.org/assets/images/icon/4.png" />
                        </p>
                        <h3 className="odometer" data-count={47}>
                          00
                        </h3>
                        <p className="counter-one__text">

                          committed staff including 15 former drug-users working
                          as care-taker
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="highlights-list" style={{ display: "none" }}>
                  <ul className="highlights-list-row">
                    <li>
                      <img src="assets/images/icon/1.png" />
                      <p>Reached out to </p>
                      <h3
                        className="odometer"
                        data-count={100}
                        style={{ color: "black" }}
                      >
                        00
                      </h3>
                      <span className="counter-one__letter">K+</span>
                      <p> through our drug awareness program</p>
                    </li>
                    <li>
                      <img src="assets/images/icon/2.png" />
                      <p>
                        <span> 2600+</span> drug affected children detoxicated
                        and treated with 90% success rate
                      </p>
                    </li>
                    <li>
                      <img src="assets/images/icon/3.png" />
                      <p>
                        <span> 1680 &amp; 1563</span> boys and girls got formal
                        education from BMC Schools
                      </p>
                    </li>
                    {/* <li>
                                         <span> 32</span> students got technical education from ITI 
                                      </li> */}
                    {/* <li>
                                        <span> 225</span>  got vocational training in various trades 
                                      </li> */}
                    {/* <li>
                                        <span> 222</span>  got employed in Boiser, Palghar, Vasai and Mumbai
                                      </li> */}
                    <li>
                      <img src="assets/images/icon/4.png" />
                      <p>
                        {" "}
                        <span>47</span> committed staff, 15 ex-drug user working
                        as care-takers
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*Up Comming Events End*/}
  <section className="support-us">
    <div
      className="support-us-bg"
      style={{  
        backgroundImage: "url(" + "https://www.supportstreetchildren.org/assets/images/backgrounds/support-us-bg.jpg" + ")"
      }}
    ></div>
    <div className="container">
      <div className="row align-items-center">
        <div className="col-xl-6 col-lg-7">
          <div
            className="support-us__left wow slideInLeft"
            data-wow-delay="100ms"
            data-wow-duration="2500ms"
          >
            <div className="support-us__content-box">
              <h3 className="support-us__title">Our Success Stories</h3>
              <p className="support-us__text">
                Since its inception, SUPPORT has adopted time-tested and
                professional methods of functioning. Many homeless children
                identified from railway stations, traffic signals, and isolated
                abandoned ruins were gently coaxed into our centers, fed and
                treated to wean them off narcotic substances.
                <br />
                <br /> Simultaneously, they were given basic education,
                vocationally trained in different trades at government
                institutes and then placed in fruitful employment. They have
                done us proud by continuing to live dignified lives,
                contributing profitably to the society, instead of imperiling
                it, as they would have inevitably done without SUPPORT’s timely
                intervention.{" "}
              </p>
              <Link
                href="success-stories.html"
                className="thm-btn support-us__btn"
                type="submit"
              >
                View All Stories{" "}
              </Link>
            </div>
          </div>
        </div>
        <div className="col-xl-6 col-lg-5">
          <div className="support-us__right">
            <div className="support-us__right-content">
              <h3 className="support-us__right-content-title">
                {/* Our aim is help visitors recognise their journey on how they became a success stories */}
                We hope our visitors and donors recognize that their visit
                created a success stories.
              </h3>
              {/* <p class="support-us__right-content-text">[New Professional every year]</p> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="skill-one ">
    <div className="skill-one__container container">
      <div className="section-title text-center">
        {/* <span class="section-title__tagline"> Contribute </span> */}
        <h2 className="section-title__title  ">Partner With Us</h2>
      </div>
      <div className="row">
        <div className="col-md-12">
          <p className="skill-one__text text-center">
            Our NGO creates positive change for isolated, vulnerable people on
            the streets. In order to help such people support from individuals
            like you is crucial.
            <br />
            There are various ways to get involved in this noble endeavour,
            including donating and volunteering. Spreading the word about our
            programs helps too. Your support enables us to provide essential
            services to the marginalized. So join us in building a better world
            for all. Together, we can make a real difference!
            <br />
            Our strength stems from the constant support of our partners. We are
            eternally grateful to them for their contributions, both financially
            as well as in kind.
          </p>
          {/* <div class="logo-list1">
                      <img src="assets/images/brand/1.jpg">
                      <img src="assets/images/brand/2.jpg">
                      <img src="assets/images/brand/3.jpg">
                      <img src="assets/images/brand/4.jpg">
                      <img src="assets/images/brand/5.jpg">
                      <img src="assets/images/brand/6.jpg">
                      <img src="assets/images/brand/7.jpg">
                      <img src="assets/images/brand/8.jpg">
                      <img src="assets/images/brand/9.jpg">
                      <img src="assets/images/brand/10.jpg">
                      <img src="assets/images/brand/11.jpg">
                      <img src="assets/images/brand/12.jpg">
                      <img src="assets/images/brand/13.jpg">
                      <img src="assets/images/brand/14.jpg">
                  </div>  */}
          <div
            className="thm-swiper__slider swiper-container"
            data-swiper-options='{"spaceBetween": 100, "slidesPerView": 5, "autoplay": { "delay": 2000 }, "breakpoints": {
                      "0": {
                          "spaceBetween": 30,
                          "slidesPerView": 2
                      },
                      "375": {
                          "spaceBetween": 30,
                          "slidesPerView": 2
                      },
                      "575": {
                          "spaceBetween": 30,
                          "slidesPerView": 3
                      },
                      "767": {
                          "spaceBetween": 50,
                          "slidesPerView": 4
                      },
                      "991": {
                          "spaceBetween": 50,
                          "slidesPerView": 5
                      },
                      "1199": {
                          "spaceBetween": 100,
                          "slidesPerView": 5
                      }
                  }}'
          >
            <div className="swiper-wrapper my-3">
              <div className="swiper-slide">
                <Link href="#">
                  <img src="https://www.supportstreetchildren.org/assets/images/brand/1.jpg" alt="" />
                </Link>
              </div>
              <div className="swiper-slide">
                <Link href="#">
                  <img src="https://www.supportstreetchildren.org/assets/images/brand/2.jpg
" alt="" />
                </Link>
              </div>
              <div className="swiper-slide">
                <Link href="#">
                  <img src="https://www.supportstreetchildren.org/assets/images/brand/3.jpg
" alt="" />
                </Link>
              </div>
              <div className="swiper-slide">
                <Link href="#">
                  <img src="https://www.supportstreetchildren.org/assets/images/brand/4.jpg
" alt="" />
                </Link>
              </div>
              <div className="swiper-slide">
                <Link href="#">
                  <img src="https://www.supportstreetchildren.org/assets/images/brand/5.jpg
" alt="" />
                </Link>
              </div>
              <div className="swiper-slide">
                <Link href="#">
                  <img src="https://www.supportstreetchildren.org/assets/images/brand/6.jpgv" alt="" />
                </Link>
              </div>
              <div className="swiper-slide">
                <Link href="#">
                  <img src="https://www.supportstreetchildren.org/assets/images/brand/7.jpg
" alt="" />
                </Link>
              </div>
              <div className="swiper-slide">
                <Link href="#">
                  <img src="assets/images/brand/8.jpg" alt="" />
                </Link>
              </div>
              <div className="swiper-slide">
                <Link href="#">
                  <img src="assets/images/brand/9.jpg" alt="" />
                </Link>
              </div>
              <div className="swiper-slide">
                <Link href="#">
                  <img src="assets/images/brand/10.jpg" alt="" />
                </Link>
              </div>
              <div className="swiper-slide">
                <Link href="#">
                  <img src="assets/images/brand/11.jpg" alt="" />
                </Link>
              </div>
              <div className="swiper-slide">
                <Link href="#">
                  <img src="assets/images/brand/12.jpg" alt="" />
                </Link>
              </div>
              <div className="swiper-slide">
                <Link href="#">
                  <img src="assets/images/brand/13.jpg" alt="" />
                </Link>
              </div>
              <div className="swiper-slide">
                <Link href="#">
                  <img src="assets/images/brand/14.jpg" alt="" />
                </Link>
              </div>
            </div>
          </div>
          <div className="text-center mt-2">
            <Link
              href="partner-with-us.html#partners"
              className="thm-btn skill-one__btn  "
            >
              Read More
            </Link>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*Feature One Start*/}
  <section className="feature-one">
    <div className="container">
      <div className="row">
        <div className="col-xl-6 col-lg-6 wow fadeInUp" data-wow-delay="200ms">
          {/*Feature One Single*/}
          <div className="feature-one__single">
            <div className="feature-one__top">
              <div className="feature-one__icon">
                <span className="icon-heart" />
              </div>
              <h3 className="feature-one__title">
                <Link href="about.html">Vision</Link>
              </h3>
            </div>
            <p className="feature-one__text">
              SUPPORT aims to eradicate substance abuse amongst street children
              and homeless youth to prevent high risk behaviour.
            </p>
          </div>
        </div>
        <div
          className="col-xl-6 col-lg-6 wow fadeInRight"
          data-wow-delay="300ms"
        >
          {/*Feature One Single*/}
          <div className="feature-one__single">
            <div className="feature-one__top">
              <div className="feature-one__icon">
                <span className="icon-help" />
              </div>
              <h3 className="feature-one__title">
                <Link href="about.html">Mission</Link>
              </h3>
            </div>
            <p className="feature-one__text">
              To encourage street children and homeless youth to overcome their
              drug addiction and reduce risk behaviour through the processes of
              Detoxification, Rehabilitation and Mainstreaming.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*Feature One Start*/}
  {/*About One Start*/}
  <section className="about-one">
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
                <img src="https://www.supportstreetchildren.org/assets/images/resources/about-one-img-1.jpg
" alt="" />
              </div>
              <div
                className="about-one__small-img wow zoomIn animated animated"
                data-wow-delay="500ms"
                data-wow-duration="2500ms"
              >
                <img
                  src="https://www.supportstreetchildren.org/assets/images/resources/about-one-small-img.jpg
                  "
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
                <span className="section-title__tagline">Know Our Journey</span>
                <h2 className="section-title__title">
                  We Can Save More Lifes With Your Helping Hand.{" "}
                </h2>
              </div>
              <p className="about-one__text">
                <strong>SUPPORT</strong> began its work in 1985 creating
                awareness on drug abuse among children from the higher strata of
                society. In three years, SUPPORT saw the need to move its focus
                to the more vulnerable of street children. A pilot project in
                1989 was launched at Victoria Terminus (now Chhatrapati Shivaji
                Maharaj Terminus) railway station, involving approximately 300
                street addicts. This was followed by a counselling Centre at St.
                George Hospital.
                <br />
                <br />
                Within just 3 years, SUPPORT expanded its activities to
                encompass Grant Road, Masjid Bunder, Dadar and Matunga areas
                covering a wide range of street population including Drug
                Addicts.
                <br />
                <br />
                We invite all those with a sense of social responsibility to
                join us in our fight against drug addiction among the homeless.
                It will surely change the way we live in the society.
              </p>
              <div className="about-one__bottom-video-box">
                <div className="about-one__btn-box">
                  <Link href="about.html" className="thm-btn about-one__btn">
                    Read More
                  </Link>
                </div>
                {/* <div class="about-one__video-link">
                                  <Link href="https://www.youtube.com/watch?v=204TUvfiP5c&t=97s" class="video-popup">
                                      <div class="about-one__video-icon">
                                          <span class="fa fa-play"></span>
                                          <i class="ripple"></i>
                                      </div>
                                  </Link>
                              </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*About One End*/}
  {/*Project One Start*/}
  <section className="project-one">
    <div className="container">
      <div className="section-title text-center">
        {/* <span class="section-title__tagline"></span> */}
        <h2 className="section-title__title">Our Centres </h2>
      </div>
      <div className="row">
        <div
          className="col-xl-4 col-lg-4 col-md-12 wow fadeInUp"
          data-wow-delay="100ms"
        >
          {/*Project One Single*/}
          <div className="project-one__single">
            <div className="project-one__img">
              <img src="https://www.supportstreetchildren.org/assets/images/centre/centre-1-1.jpg
" alt="" />
              <div className="project-one__content">
                {/* <p class="project-one__sub-title">Mumbai</p> */}
                <h3 className="project-one__title">
                  <Link to="facilities.html#F1">Day Care Center</Link>
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div
          className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp"
          data-wow-delay="200ms"
        >
          {/*Project One Single*/}
          <div className="project-one__single">
            <div className="project-one__img">
              <img src="https://www.supportstreetchildren.org/assets/images/centre/centre-1-2.jpg
" alt="" />
              <div className="project-one__content">
                {/* <p class="project-one__sub-title">Mumbai</p> */}
                <h3 className="project-one__title">
                  <Link to="facilities.html#F2">Detoxification Center</Link>
                </h3>
              </div>
            </div>
          </div>
          {/*Project One Single*/}
          <div className="project-one__single">
            <div className="project-one__img">
              <img src="https://www.supportstreetchildren.org/assets/images/centre/centre-1-3.jpg
" alt="" />
              <div className="project-one__content">
                {/* <p class="project-one__sub-title">Mumbai</p> */}
                <h3 className="project-one__title">
                  <Link to="facilities.html#F3">Medical Facilities</Link>
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div
          className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp"
          data-wow-delay="300ms"
        >
          {/*Project One Single*/}
          <div className="project-one__single">
            <div className="project-one__img">
              <img src="https://www.supportstreetchildren.org/assets/images/centre/centre-1-4.jpg
" alt="" />
              <div className="project-one__content">
                {/* <p class="project-one__sub-title">Mumbai</p> */}
                <h3 className="project-one__title">
                  <Link to="facilities.html#F4">
                    Residential Rehabilitation Center
                  </Link>
                </h3>
              </div>
            </div>
          </div>
          {/*Project One Single*/}
          <div className="project-one__single">
            <div className="project-one__img">
              <img src="https://www.supportstreetchildren.org/assets/images/centre/centre-1-5.jpg
" alt="" />
              <div className="project-one__content">
                {/* <p class="project-one__sub-title">Mumbai</p> */}
                <h3 className="project-one__title">
                  <Link to="facilities.html#F5">Skill Development Centre</Link>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*Project One End*/}
</>

);
};

export default Home;