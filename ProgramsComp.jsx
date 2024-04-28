// // import React, { useEffect, useState } from "react";
// // import './index.css';
// // import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// // import { HOST, HOST_API } from "./utilities";

// // function ProgramsComp() {
  
// //   const [content, setContent] = useState([]);

// //   useEffect(() => {
// //     fetchData();
// //   }, []);

// //   const fetchData = async () => {
// //     try {
// //       const response = await fetch(HOST_API + "/programs-articles?populate=*");
// //       const json = await response.json();
// //       setContent(json.data);
// //     } catch (error) {
// //       console.error("Error fetching data:", error);
// //     }
// //   }

// //   return (
// //     <>
// //       {content.map((item, index) => (
// //         <section className="project-details" key={index}>
// //           <div className="container">
// //             <div className="row">
// //               <div className="col-xl-6 col-lg-6">
// //                 <div className="project-details__left">
// //                   <div className="project-details__img">
// //                     <img
// //                       src={`${HOST}${item.attributes.article_img.data.attributes.url}`}
// //                       className="mb-3"
// //                       alt=""
// //                     />
// //                   </div>
// //                 </div>
// //               </div>
// //               <div className="col-xl-6 col-lg-6">
// //                 <div className="project-details__text-box">
// //                   <h4 className="mb-2">{item.attributes.heading_one}</h4>
// //                   <p className="project-details__text-1">{item.attributes.content_one}</p>
// //                 </div>
// //               </div>
// //             </div>
// //             <div className="project-details__bottom">
// //               <div className="row">
// //                 <div className="col-xl-12">
// //                   <div className="project-details__text-box">
// //                     <h5 className="mb-2">{item.attributes.heading_two}</h5>
// //                     <p>{item.attributes.content_two}</p>
// //                     <h5 className="mb-2 mt-4">{item.attributes.heading_three}</h5>
// //                     <p>{item.attributes.content_three}</p>
// //                     <h5 className="mb-2 mt-4">{item.attributes.heading_four}</h5>
// //                     <p>{item.attributes.content_four}</p>
// //                     <h5 className="mb-2 mt-4">{item.attributes.heading_five}</h5>
// //                     <p>{item.attributes.content_five}</p>
// //                     <h5 className="mb-2 mt-4">{item.attributes.heading_six}</h5>
// //                     <p>{item.attributes.content_six}</p>
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         </section>
// //       ))}
// //     </>
// //   );
// // }

// // export default ProgramsComp;

// import React, { useEffect, useState } from "react";
// import './index.css';
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import { HOST, HOST_API } from "./utilities";
// import ReactHtmlParser from 'react-html-parser'; // Importing ReactHtmlParser for rendering HTML

// function ProgramsComp() {
  
//   const [content, setContent] = useState([]);

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     try {
//       const response = await fetch(HOST_API + "/programs?populate=*");
//       const json = await response.json();
//       setContent(json.data);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   }

//   return (
//     <>
//       {content.map((item, index) => (
//         <section className="project-details" key={index}>
//           <div className="container">
//             <div className="row">
//               <div className="col-xl-6 col-lg-6">
//                 <div className="project-details__left">
//                   <div className="project-details__img">
//                     <img
//                       src={`${HOST}${item.attributes.article_img.data.attributes.url}`}
//                       className="mb-3"
//                       alt=""
//                     />
//                   </div>
//                 </div>
//               </div>
//               <div className="col-xl-6 col-lg-6">
//                 <div className="project-details__text-box">
//                   <h4 className="mb-2">{item.attributes.heading_one}</h4>
//                   <p className="project-details__text-1">{item.attributes.content_one}</p>
//                 </div>
//               </div>
//             </div>
//             <div className="project-details__bottom">
//               <div className="row">
//                 <div className="col-xl-12">
//                   <div className="project-details__text-box">
//                     {/* Render the rich text content */}
//                     {ReactHtmlParser(item.attributes.rich_text_content)}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//       ))}
//     </>
//   );
// }

// export default ProgramsComp;
// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { HOST_API } from "./utilities";
// import ReactHtmlParser from 'react-html-parser';

// function ProgramsComp() {
//   const { id } = useParams();
//   const [program, setProgram] = useState(null);

//   useEffect(() => {
//     fetchProgram(id);
//   }, [id]);

//   const fetchProgram = async (id) => {
//     try {
//       const response = await fetch(`${HOST_API}/programs/${id}?populate=*`);
//       const json = await response.json();
//       setProgram(json.data);
//       console.log(id)
//     } catch (error) {
//       console.error("Error fetching program details:", error);
//     }
//   };

//   return (
//     <div className="project-details">
//       {program && (
//         <div className="container">
//           <div className="row">
//             <div className="col-xl-6 col-lg-6">
//               <div className="project-details__left">
//                 <div className="project-details__img">
//                   <img src={program.attributes.program_image.data.attributes.url} alt={program.attributes.tile_title} />
//                 </div>
//               </div>
//             </div>
//             <div className="col-xl-6 col-lg-6">
//               <div className="project-details__text-box">
//                 <h4 className="mb-2">{program.attributes.program_title}</h4>
//                 {/* {program.attributes.program_content.map((contentItem, index) => (
//                   <div key={index}>
//                     {contentItem.type === 'heading' && <h5 className="mb-2">{contentItem.children[0].text}</h5>}
//                     {contentItem.type === 'paragraph' && <p>{contentItem.children[0].text}</p>}
//                   </div>
//                 ))} */}
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default ProgramsComp;
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {HOST, HOST_API } from "./utilities";

function ProgramsComp() {
  const { id } = useParams();
  const [program, setProgram] = useState(null);

  useEffect(() => {
    fetchProgram(id);
  }, [id]);

  const fetchProgram = async (id) => {
    try {
      const response = await fetch(`${HOST_API}/programs/${id}?populate=*`);
      const json = await response.json();
      setProgram(json.data);
      console.log("ID:", id); // Log the ID
      console.log("Data:", json.data); // Log the data fetched from the API
    } catch (error) {
      console.error("Error fetching program details:", error);
    }
  };

  return (
    <div className="project-details">
      {program && (
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6">
              <div className="project-details__left">
                <div className="project-details__img">
                  <img src={`${HOST}${program.attributes.program_image.data.attributes.url}`} alt={program.attributes.tile_title} />
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="project-details__text-box">
                <h4 className="mb-2">{program.attributes.program_title}</h4>
                <p className="project-details__text-1">
                {program.attributes.program_content_one}
                </p>
             
              </div>
            </div>
          </div>
          <div className="project-details__bottom">
        <div className="row">
          <div className="col-xl-12">
            <div className="project-details__text-box">

            </div>
            </div>
            </div>
            </div>


        </div>
      )}
    </div>
  );
}

export default ProgramsComp;
