import React from "react";
import './index.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function AReport() {
    return (
<section className="team-details">
  <div className="container">
    <div className="">
      <div className="row">
        <div className="col-xl-12 col-lg-12">
          <div className="notice-list">
            <Link
              className="notice-col"
              href="assets/annual-reports/SUPPORT-Annual_Report-2021-2022.pdf"
              target="_blank"
            >
              <i className="fa fa-file-pdf" />
              <h3>Annual Report 2021-22 </h3>
            </Link>
            <Link
              className="notice-col"
              href="assets/annual-reports/SUPPORT-Annual_Report-2020-2021.pdf"
              target="_blank"
            >
              <i className="fa fa-file-pdf" />
              <h3>Annual Report 2020-21 </h3>
            </Link>
            <Link
              className="notice-col"
              href="assets/annual-reports/SUPPORT-Annual_Report-2019-2020.pdf"
              target="_blank"
            >
              <i className="fa fa-file-pdf" />
              <h3>Annual Report 2019-20 </h3>
            </Link>
            <Link
              className="notice-col"
              href="assets/annual-reports/SUPPORT-Annual_Report-2018-2019.pdf"
              target="_blank"
            >
              <i className="fa fa-file-pdf" />
              <h3>Annual Report 2018-19 </h3>
            </Link>
            <Link
              className="notice-col"
              href="assets/annual-reports/SUPPORT-Annual_Report-2017-2018.pdf"
              target="_blank"
            >
              <i className="fa fa-file-pdf" />
              <h3>Annual Report 2017-18 </h3>
            </Link>
            <Link
              className="notice-col"
              href="assets/annual-reports/SUPPORT-Annual_Report-2016-2017.pdf"
              target="_blank"
            >
              <i className="fa fa-file-pdf" />
              <h3>Annual Report 2016-17 </h3>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>



);
}

export default AReport;