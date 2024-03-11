import React from "react";
import './index.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Policies() {
    return (
      <>
      <section className="project-details">
  <div className="container">
    <div className="row">
      <div className="col-xl-12 col-lg-12">
        <div className="project-details__text-box">
          <h4 className="mb-2">Policies &amp; Terms</h4>
          <ul className="mt-3">
            <li>
              {" "}
              We require PAN Card Copy and address as per Income Tax
              requirements.
            </li>
            <li> Donations in India are eligible for Income-Tax exemption </li>
            <li>
              {" "}
              Donations received from overseas are eligible under the Foreign
              Contribution Regulation Act.
            </li>
            <li>
              {" "}
              Receipt will be provided and amount eligible under income tax
              section 80G.
            </li>
            <li>
              {" "}
              All meals have to be booked &amp; confirmed by making donation, 2
              - 3 days in advance.
            </li>
            <li> Outside food or milk products are NOT allowed.</li>
            <li>
              {" "}
              The meal(s) will be shared to 230 children in all our centres.
            </li>
          </ul>
          <p className="mt-3">
            NOTE: Prices are subject to change depending on the market rates.
            Seasonal Fruits, Chocolates, Biscuits, Frooti could be distributed
            by the Sponsor(s).
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

      </>
    );
  }
  
  export default Policies;