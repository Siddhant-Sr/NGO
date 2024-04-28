// import React from "react";
// import './index.css';
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import { useEffect, useState } from "react";
// import { HOST, HOST_API } from "./utilities";

// function Facilities() {
//   const [content, setContent] = useState([]);

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     try {
//       const response = await fetch(HOST_API+"/facilities?populate=*");
//       const json = await response.json();
//       setContent(json.data);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   }
//     return (
    
//   <section className="about-one about-three">
//     <div className="container">
//       <div className="row">
//         <div className="col-xl-12 mb-5">
//           <p className="about-one__text">
//             SUPPORT has set up different centers in various parts of Mumbai for
//             administering different services. Each center performs its set
//             function like identification of potential inmates, their rescue,
//             nutrition to overcome malnutrition, expert counselling, complete
//             medical diagnosis and treatment along with psychological
//             reinforcement, recreational activities, observation, education
//             (academic, personal and social), skill training, placement and
//             eventual rehabilitation and absorption into the mainstream of the
//             society. All centers work in conjunction with one another like the
//             parts of well-maintained Swiss watch.
//           </p>
//         </div>
//       </div>
//       <div className="row">
//         <div className="col-xl-12">
//           <section className="facilities-list">
//             <div className="facilities-list-col-1 wow fadeInUp">
//               <span id="F1" className="anchor" />
//               <h4> {content[0].attributes.heading} {console.log(content[0].attributes)}</h4>
//               <p>
//               {content[0].attributes.content}
//               </p>
//             </div>
//             <div className="facilities-list-col-2">
//               <div className="facilities-list-img">
//                 <img
//                 src={`${HOST}`+ content[0]?.attributes?.image?.data?.attributes?.url}
//                   className="wow fadeInRight" alt=""
//                 />
//               </div>
//             </div>
//           </section>
//           <section className="facilities-list">
//             <div className="facilities-list-col-3 wow fadeInUp">
//               <span id="F2" className="anchor" />
//               <h4> {content[1].attributes.heading}</h4>
//               <p>
//               {content[1].attributes.content}
//               </p>
//             </div>
//             <div className="facilities-list-col-4">
//               <div className="facilities-list-img">
//                 <img
//                 src={`${HOST}`+ content[1]?.attributes?.image?.data?.attributes?.url}
//                   className="wow fadeInRight" alt=""
//                 />
//               </div>
//             </div>
//           </section>
//           <section className="facilities-list">
//             <div className="facilities-list-col-1 wow fadeInUp">
//               <span id="F3" className="anchor" />
//               <h4> {content[2].attributes.heading}</h4>
//               <p>
//               {content[2].attributes.content}
//               </p>
//             </div>
//             <div className="facilities-list-col-2">
//               <div className="facilities-list-img">
//                 <img
//                   src={`${HOST}`+ content[2]?.attributes?.image?.data?.attributes?.url}
//                   className="wow fadeInRight"
//                   alt=""
//                 />
//               </div>
//             </div>
//           </section>
//           <section className="facilities-list">
//             <div className="facilities-list-col-3 wow fadeInUp">
//               <span id="F4" className="anchor" />
//               <h4>{content[3].attributes.heading}</h4>
//               <p>
//               {content[3].attributes.content}
//               </p>
//             </div>
//             <div className="facilities-list-col-4">
//               <div className="facilities-list-img">
//                 <img
//                   src={`${HOST}`+ content[3]?.attributes?.image?.data?.attributes?.url}
//                   className="wow fadeInRight" alt=""
//                 />
//               </div>
//             </div>
//           </section>
//           <section className="facilities-list">
//             <div className="facilities-list-col-1 wow fadeInUp">
//               <span id="F5" className="anchor" />
//               <h4> {content[4].attributes.heading} </h4>
//               <p>
//               {content[4].attributes.content}
//               </p>
//             </div>
//             <div className="facilities-list-col-2">
//               <div className="facilities-list-img">
//                 <img
//                   src={`${HOST}`+ content[4]?.attributes?.image?.data?.attributes?.url}
//                   className="wow fadeInRight" alt=""
//                 />
//               </div>
//             </div>
//           </section>
//           <section className="facilities-list">
//             <div className="facilities-list-col-3 wow fadeInUp">
//               <h4> {content[5].attributes.heading} </h4>
//               <p>
//               {content[5].attributes.content}
//               </p>
//             </div>
//             <div className="facilities-list-col-4">
//               <div className="facilities-list-img">
//                 <img
//                   src={`${HOST}`+ content[5]?.attributes?.image?.data?.attributes?.url}
//                   className="wow fadeInRight" alt=""
//                 />
//               </div>
//             </div>
//           </section>
//           <section className="facilities-list">
//             <div className="facilities-list-col-1 wow fadeInUp">
//               <h4> {content[6].attributes.heading}</h4>
//               <p>
//               {content[6].attributes.content}
//               </p>
//             </div>
//             <div className="facilities-list-col-2">
//               <div className="facilities-list-img">
//                 <img
//                 src={`${HOST}`+ content[6]?.attributes?.image?.data?.attributes?.url}
//                   className="wow fadeInRight" alt=""
//                 />
//               </div>
//             </div>
//           </section>
//         </div>
//       </div>
//     </div>
//   </section>


//     );
//   }
  
//   export default Facilities;


import React, { useEffect, useState } from "react";
import './index.css';
import { HOST, HOST_API } from "./utilities";

function Facilities() {
  const [content, setContent] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(HOST_API + "/facilities?populate=*");
      const json = await response.json();
      setContent(json.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <section className="about-one about-three">
      <div className="container">
        <div className="row">
          <div className="col-xl-12 mb-5">
            <p className="about-one__text">
              SUPPORT has set up different centers in various parts of Mumbai for
              administering different services. Each center performs its set
              function like identification of potential inmates, their rescue,
              nutrition to overcome malnutrition, expert counselling, complete
              medical diagnosis and treatment along with psychological
              reinforcement, recreational activities, observation, education
              (academic, personal and social), skill training, placement and
              eventual rehabilitation and absorption into the mainstream of the
              society. All centers work in conjunction with one another like the
              parts of well-maintained Swiss watch.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-12">
            {content.map((item, index) => (
              <section className="facilities-list" key={index}>
                <div
                  className={`facilities-list-col-${index % 2 === 0 ? '1' : '3'} wow fadeInUp`}
                >
                  <span id={`F${index + 1}`} className="anchor" />
                  <h4>{item.attributes.heading}</h4>
                  <p>{item.attributes.content}</p>
                </div>
                <div className={`facilities-list-col-${index % 2 === 0 ? '2' : '4'}`}>
                  <div className="facilities-list-img">
                    <img
                      src={`${HOST}${item.attributes.image?.data?.attributes?.url}`}
                      className="wow fadeInRight"
                      alt=""
                    />
                  </div>
                </div>
              </section>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Facilities;
