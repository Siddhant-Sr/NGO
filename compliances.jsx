import React from "react";
import './index.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { HOST, HOST_API } from "./utilities";

function Compliances() {
    return (
      <>
  {/*About One Start*/}
  <section className="about-one about-three">
    <div className="container">
      <div className="row">
        <div className="col-xl-12 mb-3">
          <p className="about-one__text">
            SUPPORT as an NGO is a genuine body committed to the cause of
            upliftment and transformation of substance-addicted street children
            and homeless youth in Mumbai. The central governing body
            Brihanmumbai Municipal Corporation has officially allowed SUPPORT
            use of its land in ___________. Furthermore, SUPPORT meets all the
            due compliances mandatory for charitable organizations, as laid down
            by law. And these include:
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-xl-12">
          {/* 
                  <div class="text-left mb-2 ">                       
                      <h2 class="section-title__title ">Compliances</h2>
                  </div> */}
          <ul className="mt-2">
            <li>
              {" "}
              Trust registered with Charity Commission in 1985 (E 10336) Mumbai
            </li>
            <li>Darpan, NITI Ayog UID - MH/2017/017517</li>
            <li>CSR 1 - CSR00002042 </li>
            <li>FCRA - 08378049112 A - AABTS6799ME19897</li>
            <li> 80 G - AABTS6799MF19853</li>
            <li>
              {" "}
              Child Welfare Committee - MBU-20/CH/2020/412 (Boys) and
              MBU-21/CH/2020/208 (Girls)
            </li>
            <li>
              Child Care Institute Registered under Women and Child Development
              and Juvenile Justice Act, 2015 (Care and Protection)
            </li>
            <li>Registration with Social Justice and Welfare Department</li>
            <li>
              {" "}
              Registration with National Skill Development Corporation (NSDC)
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
  {/*About One End*/}
</>
    );
  }
  
  export default Compliances;