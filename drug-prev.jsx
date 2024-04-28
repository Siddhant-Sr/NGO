import React from "react";
import './index.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { HOST, HOST_API } from "./utilities";

function Drug() {
  const [content, setContent] = useState([]);

  useEffect(()=>{
    fetchData();
  }, []);
  
  const fetchData = async () =>{
    const data = await fetch(
      HOST_API+"/programs-articles?populate=*");
    const json = await data.json();
      console.log(json?.data[0]?.attributes?.article_img?.data?.attributes?.url);
      setContent(json?.data);
      console.log(content);
  }
    return (
      <>
      <>
  {/*Project Details Start*/}
  <section className="project-details">
  <div className="container">
      <div className="row">
        <div className="col-xl-6 col-lg-6">
          <div className="project-details__left">
            <div className="project-details__img">
              <img
            //  src="http://localhost:1337/uploads/thumbnail_de_addiction_ff5cacfb8d.jpg"
                src={`${HOST}`+ content[0]?.attributes?.article_img?.data?.attributes?.url}
                className="mb-3"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="col-xl-6 col-lg-6">
          <div className="project-details__text-box">
            <h4 className="mb-2">
           { content[0]?.attributes?.heading_one}
            </h4>
            <p className="project-details__text-1">
            { content[0]?.attributes?.content_one}
            </p>
          </div>
        </div>
      </div>
      <div className="project-details__bottom">
        <div className="row">
          <div className="col-xl-12">
            <div className="project-details__text-box">
              <h5 className="mb-2">
              { content[0]?.attributes?.heading_two}
              </h5>
              <p>
              { content[0]?.attributes?.content_two}
              </p>
              <h5 className="mb-2 mt-4">
              { content[0]?.attributes?.heading_three}
              </h5>
              <p>
              { content[0]?.attributes?.content_three}
              </p>
              <h5 className="mb-2 mt-4">
              { content[0]?.attributes?.heading_four}
              </h5>
              <p>
              { content[0]?.attributes?.content_four}
              </p>
              <h5 className="mb-2 mt-4">{ content[0]?.attributes?.heading_five} </h5>
              <p>
              { content[0]?.attributes?.content_five}
              </p>
              <h5 className="mb-2 mt-4">{ content[0]?.attributes?.heading_six} </h5>
              <p>
              { content[0]?.attributes?.content_six}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

</>
</>
    );
  }
  
  export default Drug;