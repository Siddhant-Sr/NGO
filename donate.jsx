import React from "react";
import './index.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Donate() {
    return (
      <>
      <section className="project-details">
  <div className="container">
    <div className="row">
      <div className="col-xl-12 col-lg-12">
        <div className="project-details__text-box">
          <div className="row">
            <div className="col-md-5">
              <a
                href="assets/images/resources/Meal-Planner-Menu.pdf"
                target="_blank"
              >
                <img
                  src="assets/images/resources/Meal-Planner-Menu.jpg"
                  className="img-fluid" alt=""
                />
              </a>
            </div>
            <div className="col-md-7">
              <ul className="mb-3 mt-3">
                <li>
                  {" "}
                  Donate a Meal or Full-Day Meal – <strong>INR 18,000/-</strong>
                </li>
                <li>
                  {" "}
                  Donate for Education – <strong>INR 50,000/-</strong>
                </li>
                <li>
                  {" "}
                  Recreational Donation – <strong>INR 30,000/-</strong>
                </li>
                <li> General Donation - Any amount as you desire to</li>
                <li>
                  {" "}
                  Donate In-Kind – Food Grains, Clothes, footwear, books etc...{" "}
                  <br /> you can contact us at <br />
                  Phone: + 91 8928846639 <br />
                  Email:{" "}
                  <a href="mailto:support@supportstreetchildren.org">
                    support@supportstreetchildren.org
                  </a>{" "}
                </li>
              </ul>
              <br />
              <div
                className="row"
                style={{
                  border: "2px solid #e7e7e7",
                  padding: 10,
                  margin: "0px 15px"
                }}
              >
                <div className="col-md-7">
                  <p className="p-2">
                    <strong style={{ fontWeight: 500 }}>
                      {" "}
                      Beneficiary Name: SUPPORT
                      <br />
                      A/c No: 911010010186026
                      <br />
                      Bank: AXIS Bank
                      <br />
                      IFSC: UTIB0001244 <br />
                      (Branch: Vakola, Mumbai)
                    </strong>
                  </p>
                </div>
                <div className="col-md-5">
                  <p className="p-2">
                    {" "}
                    <img
                      src="assets/images/resources/QR-Code-bank.jpg"
                      alt=""
                    />
                  </p>
                </div>
              </div>
              <p className="mt-4 ps-3">
                <strong>
                  Donations can be made using below different types of modes:
                </strong>
              </p>
              <ul className="mt-2">
                <li> Donate using our QR code</li>
                <li>
                  {" "}
                  Donate online using our securely integrated Payment Gateway
                </li>
                <li>
                  {" "}
                  Donate using Net Banking (NEFT/IMPS) by adding our bank
                  account as beneficiary
                </li>
                <li>
                  {" "}
                  Donate by issuing Cheque/DD in favour of “SUPPORT” (You can
                  either deposit in our account or courier it to us)
                </li>
                <li> Donate by Cash at our office</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="project-details__bottom">
      <div className="row">
        <div className="col-xl-12">
          <div className="project-details__text-box">
            <h4 className="mb-2">Regulations to Follow</h4>
            <ul className="mt-2">
              <li>
                {" "}
                All meals have to be booked &amp; confirmed by making donation
                2-3 days in advance.{" "}
              </li>
              <li>
                The meal/s will be shared with children in all our centers.
              </li>
              <li>
                {" "}
                Seasonal Fruits, Chocolates, Biscuits, Frooti could be
                distributed by the Sponsor/s.
              </li>
              <li>
                {" "}
                Outside food or milk products are NOT allowed for our inmates.
              </li>
              <li>
                {" "}
                We accept donations of Wheat, Rice, different types of Dals,
                Pulses/Legumes, Cooking Oil and Sugar &amp; Tea leaves.
              </li>
              <li>
                {" "}
                Prices are subject to change depending on the market rates.
              </li>
              <li>
                {" "}
                A copy of PAN Card and Address Proof needed, as per Income Tax
                requirements.
              </li>
              <li>
                {" "}
                Donations in India are eligible for exemption under Section-80G
                of The Income-Tax Act, 1961.
              </li>
              <li>
                {" "}
                Donations received from overseas are eligible under The Foreign
                Contribution (Regulation) Act, 2010.
              </li>
              <li>
                {" "}
                Receipt will be provided for the donated amount eligible under
                Section-80G of The Income-Tax Act, 1961.
              </li>
            </ul>
            <h4 className="mb-2 mt-4"> Policies &amp; Terms</h4>
            <ul className="mt-2">
              <li>
                {" "}
                We require PAN Card Copy and address proof, as per Income Tax
                requirements.
              </li>
              <li>Donations in India are eligible for Income-Tax exemption</li>
              <li>
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
                All meals have to be booked &amp; confirmed by making donation,
                2 - 3 days in advance.
              </li>
              <li> Outside food or milk products are NOT allowed.</li>
              <li>
                {" "}
                The meal(s) will be shared to 230 children in all our centers.
              </li>
            </ul>
            <br />
            <p>
              <strong>NOTE:</strong> Prices are subject to change depending on
              the market rates.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      </>
    );
  }
  
  export default Donate;