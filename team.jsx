// import React from "react";
// import './index.css';
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import { useEffect, useState } from "react";
// import { HOST, HOST_API } from "./utilities";

// function Team() {
//   const [content, setContent] = useState([]);

//   useEffect(()=>{
//     fetchData();
//   }, []);
  
//   const fetchData = async () =>{
//     const data = await fetch(
//       HOST_API+"/teams?populate=*");
//     const json = await data.json();
//       console.log(json?.data);
//       setContent(json?.data);
//       console.log(content[0].attributes.image.data.attributes.url);
//   }

//     return (
//       <>
//       <section className="team-details">
//   <div className="container">
//     <div className="team-details__inner">
//       <div className="row">
//         <div className="col-xl-6 col-lg-6">
//           <div className="team-details__top-right">
//             <div className="team-details__top-content">
//               <p className="">
//                 Besides its altruistic nature and noble endeavours, SUPPORT is
//                 run by qualified personnel under the watchful eyes of trained
//                 and experienced professionals. It follows the law-based
//                 hierarchical system of control, management and administration.
//                 No one is independent － each one watches and is watched by
//                 another. Each of its seven Centers is managed by a dedicated
//                 team and headed by a responsible Center-in-Charge. The C-in-Cs
//                 report to the Executive Director, who in turn is accountable to
//                 the trustees. Needless to say, the system works smoothly like a
//                 well-oiled machine.
//               </p>
//               <ul className="my-4">
//                 <li>Day Care Center</li>
//                 <li>Detoxification &amp; Medical Center</li>
//                 <li>Boys Rehabilitation Center</li>
//                 <li>Girls Rehabilitation Center</li>
//                 <li>Skill Development &amp; Rehabilitation Center</li>
//                 <li>Community Kitchen</li>
//                 <li>Administration Department</li>
//               </ul>
//             </div>
//           </div>
//         </div>
//         <div className="col-xl-6 col-lg-6">
//           <ul id="lightGallery" className="gallery-team-sm">
//             <li data-src={`${HOST}`+ content[0].attributes.image.data.attributes.url}>
//               <figure>
//                 <img alt="" src={`${HOST}`+ content[0].attributes.image.data.attributes.url}/>
//               </figure>
//             </li>
//             <li data-src={`${HOST}`+ content[1].attributes.image.data.attributes.url}>
//               <figure>
//                 <img alt="" src={`${HOST}`+ content[1].attributes.image.data.attributes.url}/>
//               </figure>
//             </li>
//             <li data-src={`${HOST}`+ content[2].attributes.image.data.attributes.url}>
//               <figure>
//                 <img alt="" src={`${HOST}`+ content[2].attributes.image.data.attributes.url}/>
//               </figure>
//             </li>
//             <li data-src={`${HOST}`+ content[3].attributes.image.data.attributes.url}>
//               <figure>
//                 <img alt="" src={`${HOST}`+ content[3].attributes.image.data.attributes.url} />
//               </figure>
//             </li>
//             <li data-src={`${HOST}`+ content[4].attributes.image.data.attributes.url}>
//               <figure>
//                 <img alt="" src={`${HOST}`+ content[4].attributes.image.data.attributes.url} />
//               </figure>
//             </li>
//             <li data-src={`${HOST}`+ content[5].attributes.image.data.attributes.url}>
//               <figure>
//                 <img alt="" src={`${HOST}`+ content[5].attributes.image.data.attributes.url} />
//               </figure>
//             </li>
//             <li data-src={`${HOST}`+ content[6].attributes.image.data.attributes.url}>
//               <figure>
//                 <img alt="" src={`${HOST}`+ content[6].attributes.image.data.attributes.url} />
//               </figure>
//             </li>
//             <li data-src={`${HOST}`+ content[7].attributes.image.data.attributes.url}>
//               <figure>
//                 <img alt="" src={`${HOST}`+ content[7].attributes.image.data.attributes.url}/>
//               </figure>
//             </li>
//             <li data-src={`${HOST}`+ content[8].attributes.image.data.attributes.url}>
//               <figure>
//                 <img alt="" src={`${HOST}`+ content[8].attributes.image.data.attributes.url} />
//               </figure>
//             </li>
//             <li data-src={`${HOST}`+ content[9].attributes.image.data.attributes.url}>
//               <figure>
//                 <img alt="" src={`${HOST}`+ content[9].attributes.image.data.attributes.url}/>
//               </figure>
//             </li>
//             <li data-src={`${HOST}`+ content[10].attributes.image.data.attributes.url}>
//               <figure>
//                 <img alt="" src={`${HOST}`+ content[10].attributes.image.data.attributes.url}/>
//               </figure>
//             </li>
//             <li data-src={`${HOST}`+ content[11].attributes.image.data.attributes.url}>
//               <figure>
//                 <img alt="" src={`${HOST}`+ content[11].attributes.image.data.attributes.url} />
//               </figure>
//             </li>
//             <li data-src={`${HOST}`+ content[12].attributes.image.data.attributes.url} >
//               <figure>
//                 <img alt="" src={`${HOST}`+ content[12].attributes.image.data.attributes.url}  />
//               </figure>
//             </li>
//             <li data-src={`${HOST}`+ content[13].attributes.image.data.attributes.url} >
//               <figure>
//                 <img alt="" src={`${HOST}`+ content[13].attributes.image.data.attributes.url}  />
//               </figure>
//             </li>
//             <li data-src={`${HOST}`+ content[13].attributes.image.data.attributes.url} >
//               <figure>
//                 <img alt="" src={`${HOST}`+ content[13].attributes.image.data.attributes.url} />
//               </figure>
//             </li>
//             <li data-src={`${HOST}`+ content[14].attributes.image.data.attributes.url} >
//               <figure>
//                 <img alt="" src={`${HOST}`+ content[14].attributes.image.data.attributes.url}  />
//               </figure>
//             </li>
//             <li data-src={`${HOST}`+ content[15].attributes.image.data.attributes.url} >
//               <figure>
//                 <img alt="" src={`${HOST}`+ content[15].attributes.image.data.attributes.url}  />
//               </figure>
//             </li>
//             <li data-src={`${HOST}`+ content[16].attributes.image.data.attributes.url} >
//               <figure>
//                 <img alt="" src={`${HOST}`+ content[16].attributes.image.data.attributes.url} />
//               </figure>
//             </li>
//             <li data-src={`${HOST}`+ content[17].attributes.image.data.attributes.url} >
//               <figure>
//                 <img alt="" src={`${HOST}`+ content[17].attributes.image.data.attributes.url}  />
//               </figure>
//             </li>
//             <li data-src={`${HOST}`+ content[18].attributes.image.data.attributes.url} >
//               <figure>
//                 <img alt="" src={`${HOST}`+ content[18].attributes.image.data.attributes.url} />
//               </figure>
//             </li>
//             <li />
//           </ul>
//         </div>
//       </div>
//     </div>
//   </div>
// </section>

//       </>
//     );
//   }
  
//   export default Team;

import React, { useEffect, useState } from "react";
import {HOST, HOST_API } from "./utilities";

function Team() {
  const [content, setContent] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(HOST_API + "/teams?populate=*");
      const json = await response.json();
      setContent(json?.data || []);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching team data:", error);
    }
  };

  return (
    <>
      <section className="team-details">
        <div className="container">
          <div className="team-details__inner">
            <div className="row">
              <div className="col-xl-6 col-lg-6">
                <div className="team-details__top-right">
                  <div className="team-details__top-content">
                    <p className="">
                      Besides its altruistic nature and noble endeavours, SUPPORT is
                      run by qualified personnel under the watchful eyes of trained
                      and experienced professionals. It follows the law-based
                      hierarchical system of control, management and administration.
                      No one is independent － each one watches and is watched by
                      another. Each of its seven Centers is managed by a dedicated
                      team and headed by a responsible Center-in-Charge. The C-in-Cs
                      report to the Executive Director, who in turn is accountable to
                      the trustees. Needless to say, the system works smoothly like a
                      well-oiled machine.
                    </p>
                    <ul className="my-4">
                      <li>Day Care Center</li>
                      <li>Detoxification &amp; Medical Center</li>
                      <li>Boys Rehabilitation Center</li>
                      <li>Girls Rehabilitation Center</li>
                      <li>Skill Development &amp; Rehabilitation Center</li>
                      <li>Community Kitchen</li>
                      <li>Administration Department</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6">
                <ul id="lightGallery" className="gallery-team-sm">
                  {loading ? (
                    <p>Loading...</p>
                  ) : (
                    content.map((item, index) => (
                      <li key={index} data-src={`${HOST}${item.attributes.image?.data?.attributes?.url}`}>
                        <figure>
                          <img alt="" src={`${HOST}${item.attributes.image?.data?.attributes?.url}`} />
                        </figure>
                      </li>
                    ))
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Team;
