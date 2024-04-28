import React from "react";
import './index.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { HOST, HOST_API } from "./utilities";

function Rehabilitation() {

  const [content, setContent] = useState([]);

 
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(`${HOST_API}/programs-articles?populate=*`);
      const json = await response.json();
      setContent(json?.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }


    return (
     
  <section className="project-details">
    <div className="container">
      <div className="row">
        <div className="col-xl-6 col-lg-6">
          <div className="project-details__left">
            <div className="project-details__img">
              <img
                src={`${HOST}`+ content[2]?.attributes?.article_img?.data?.attributes?.url}
                className="mb-3" alt=""
              />
            </div>
          </div>
        </div>
        <div className="col-xl-6 col-lg-6">
          <div className="project-details__text-box">
            <h4 className="mb-2">
            {content[2]?.attributes?.heading_one}
              {console.log(content[2]?.attributes?.heading_two)}
            </h4>
            <p className="project-details__text-1">
              T{content[2]?.attributes?.content_one}
            </p>
          </div>
        </div>
      </div>
      <div className="project-details__bottom">
        <div className="row">
          <div className="col-xl-12">
            <div className="project-details__text-box">
              <h5 className="mb-2">
             {content[2]?.attributes?.heading_two}
              </h5>
              <p>
              {content[2]?.attributes?.content_two}
              </p>
              <h5 className="mb-2 mt-4">
              {content[2]?.attributes?.heading_three}
              </h5>
              <p>
                
              {content[2]?.attributes?.content_three}
              </p>
              <h5 className="mb-2 mt-4"> {content[2]?.attributes?.heading_four}</h5>
              <p>
              {content[2]?.attributes?.content_four}
              </p>
              <h5 className="mb-2 mt-4">
              {content[2]?.attributes?.heading_five}
              </h5>
              <p>
              {content[2]?.attributes?.content_five}
              </p>
              <h5 className="mb-2 mt-4"> {content[2]?.attributes?.heading_six}</h5>
              <p>
                Outdoor Activities:
                <br />
                From cricket to hopscotch, outdoor activities allow children and
                youth to channel excessive energy positively. Picnics and
                outings expose them to new environments, dissociated from drug
                use, fostering a sense of belongingness.
                <br />
                <br />
                Indoor Activities:
                <br />
                Structured indoor games like chess, ludo, snake &amp; ladder,
                many such which are facilitated by staff or peer educators,
                provide opportunities for constructive engagement. These
                activities, executed in small and large groups, help develop a
                sense of community, concentration, and teamwork.
              </p>
              <h5 className="mb-2 mt-4">Conclusion </h5>
              <p>
                Our rehabilitation program is more than a mere detoxification
                process; it's a holistic approach to rebuilding lives. By
                combining self-reflection, life skill education, one-to-one
                sessions, and recreational activities, we aim to empower street
                youth and addicts to not just break free from addiction but also
                rediscover their potential, transforming them into resilient
                individuals ready to embrace a drug-free and fulfilling life.
                Together, let's build bridges to a new life, one that is filled
                with hope, purpose, and the promise of a brighter tomorrow.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

    );
  }
  
  export default Rehabilitation;

// import React, { useEffect, useState } from "react";
// import './index.css';
// import { HOST, HOST_API } from "./utilities";

// function Rehabilitation() {
//   const [content, setContent] = useState([]);

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     try {
//       const response = await fetch(`${HOST_API}/programs-articles?populate=*`);
//       const json = await response.json();
//       setContent(json?.data);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   }

//   return (
//     <>
//       <section className="project-details">
//         <div className="container">
//           <div className="row">
//             <div className="col-xl-6 col-lg-6">
//               <div className="project-details__left">
//                 <div className="project-details__img">
//                   <img
//                     src={`${HOST}${content[2]?.attributes?.article_img?.data?.attributes?.url}`}
//                     className="mb-3" alt=""
//                   />
//                 </div>
//               </div>
//             </div>
//             <div className="col-xl-6 col-lg-6">
//               <div className="project-details__text-box">
//                 <h4 className="mb-2">
//                   Building Bridges to a New Life: Rehabilitating Street Youth
//                   through Comprehensive Life Transformation
//                 </h4>
//                 <p className="project-details__text-1">
//                   The journey from addiction on the streets to rehabilitation is a
//                   profound transformation for individuals seeking a path to
//                   recovery. Our rehabilitation program goes beyond detox, focusing
//                   on behavioral change to inspire street addicts to leave behind
//                   their tumultuous past and reintegrate into mainstream society.
//                   Through self-reflection, life skill education, one-to-one
//                   sessions, and recreational activities, we empower them to reshape
//                   their attitudes, habits, and lifestyles.
//                 </p>
//               </div>
//             </div>
//           </div>
//           <div className="project-details__bottom">
//             <div className="row">
//               <div className="col-xl-12">
//                 <div className="project-details__text-box">
//                   {/* Your sections here */}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }

// export default Rehabilitation;
