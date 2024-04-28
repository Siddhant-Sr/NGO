import React from "react";
import './index.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { HOST, HOST_API } from "./utilities"

function AReport() {

  const [content, setContent] = useState([]);
  
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(HOST_API+"/annual-reports?populate=*");
      const json = await response.json();
      setContent(json.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  useEffect(() => {
    console.log(content[0]?.attributes?.report?.data?.attributes?.url);
  }, [content]);

  return (
    <section className="team-details">
      <div className="container">
        <div className="">
          <div className="row">
            <div className="col-xl-12 col-lg-12">
              <div className="notice-list">
                {content.map((item, index) => (
                  <Link
                    key={index}
                    className="notice-col"
                    to={`${HOST}${item?.attributes?.report?.data?.attributes?.url}`}
                    target="_blank"
                  >
                    <i className="fa fa-file-pdf" />
                    <h3>{item?.attributes?.caption}</h3>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AReport;