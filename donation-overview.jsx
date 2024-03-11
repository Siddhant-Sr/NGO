import React from "react";
import './index.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Overview() {
    return (
      <>
      <section className="project-details">
  <div className="container">
    <div className="row">
      <div className="col-xl-12 col-lg-12">
        <div className="project-details__text-box">
          <h4 className="mb-2">Donate to Recreate a LIFE!</h4>
          <p className="">
            None of us is too poor to help others. We only need a bit of
            conviction and willingness to translate our compassion into action.
            <br />
            <br />
            In our mission to mainstream street children into society, we need a
            little help from you, in such form as your skills, time or donation
            in cash or kind.
            <br />
            <br />
            It takes as little as Rs.18000/- per month to afford one child basic
            amenities － food, clothes, medical care, education and recreation
            － that we provide in our rehabilitation process.
            <br />
            <br />
            With over 230 children under our care in the residential programme,
            it is a mammoth task to provide these children's basic care each
            month. You could, therefore, sponsor it by sending us your
            contribution to meet below mentioned needs:
          </p>
          <ul className="mt-3">
            <li> Daily Meals like Breakfast, Lunch, Snacks and Dinner</li>
            <li>
              {" "}
              Other Daily needs like Clothes, footwear, Bedding, Toiletries etc.
            </li>
            <li>
              {" "}
              Educational needs like Primary, Secondary, Vocational or Higher
              Education etc.
            </li>
            <li>
              {" "}
              Recreational needs like Birthday Celebrations, Festival
              Celebrations, Picnics, Social Gatherings etc.{" "}
            </li>
          </ul>
          <p>
            SUPPORT is immensely grateful for funding received from various
            individuals and organizations, without whose help we cannot reach
            out to these children.
          </p>
          <div className="col-sm-6 mt-5">
            <a
              href="donate-now.html"
              className="thm-btn support-us__btn text-center"
              style={{ fontSize: 19 }}
              type="submit"
            >
              So let’s contribute to help… click here to Donate Now
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      </>
    );
  }
  
  export default Overview;