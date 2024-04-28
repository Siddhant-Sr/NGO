// import React from "react";
// import './index.css';
// import ImageSlider from "./ImageSlider";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import { useEffect, useState } from "react";

// function Gallery() {

//   const [content, setContent] = useState([]);

//   useEffect(()=>{
//     fetchData();
//   }, []);
  
//   const fetchData = async () =>{
//     const data = await fetch(
//       "http://localhost:1337/api/galleries?populate=*");
//     const json = await data.json();
//       // console.log(json);
//       setContent(json?.data);
//       console.log(content[0]?.attributes?.image_slider?.data[0]?.attributes?.url);
//   }

//     return (
//       <>
//       <section className="team-details">
//   <div className="container">
//     <div className="">
//       <div className="row">
//         <div className="col-xl-12 col-lg-12">
//           <div className="gallery-list">
//             <div className="gallery-box">
//               {/* <figure id="lightGallery3">
//                 <Link
//                   href="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/330px-Image_created_with_a_mobile_phone.png"
//                   data-fancybox-group="gallery"
//                 >
//                   <img
//                     className="img-responsive"
//                     src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/330px-Image_created_with_a_mobile_phone.png"
//                     alt=""
//                   />
//                 </Link>
//                 <Link
//                   href="https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg"
//                   data-fancybox-group="gallery"
//                 >
                
//                 </Link>
//                 <Link
//                   href="assets/images/gallery/Support-from-Sanjay-Dutt/3.jpg"
//                   data-fancybox-group="gallery"
//                 >
                
//                 </Link>
//                 <Link
//                   href="assets/images/gallery/Support-from-Sanjay-Dutt/4.jpg"
//                   data-fancybox-group="gallery"
//                 >
         
//                 </Link>
//                 <Link
//                   href="assets/images/gallery/Support-from-Sanjay-Dutt/5.jpg"
//                   data-fancybox-group="gallery"
//                 >
              
//                 </Link>
//                 <Link
//                   href="assets/images/gallery/Support-from-Sanjay-Dutt/6.jpg"
//                   data-fancybox-group="gallery"
//                 >
             
//                 </Link>
//                 <Link
//                   href="assets/images/gallery/Support-from-Sanjay-Dutt/7.jpg"
//                   data-fancybox-group="gallery"
//                 >

//                 </Link>
//                 <Link
//                   href="assets/images/gallery/Support-from-Sanjay-Dutt/8.jpg"
//                   data-fancybox-group="gallery"
//                 >
          
//                 </Link>
//                 <Link
//                   href="assets/images/gallery/Support-from-Sanjay-Dutt/9.jpg"
//                   data-fancybox-group="gallery"
//                 >
         
//                 </Link>
//               </figure> */}
//               <ImageSlider images={[
//                     `http://localhost:1337`+ content[0]?.attributes?.image_slider?.data[0]?.attributes?.url,
//                     `http://localhost:1337`+ content[0]?.attributes?.image_slider?.data[1]?.attributes?.url,
//                     `http://localhost:1337`+ content[0]?.attributes?.image_slider?.data[2]?.attributes?.url,
//                     `http://localhost:1337`+ content[0]?.attributes?.image_slider?.data[3]?.attributes?.url,
//                     `http://localhost:1337`+ content[0]?.attributes?.image_slider?.data[4]?.attributes?.url,
//                     `http://localhost:1337`+ content[0]?.attributes?.image_slider?.data[5]?.attributes?.url,
//                     `http://localhost:1337`+ content[0]?.attributes?.image_slider?.data[6]?.attributes?.url,
//                     `http://localhost:1337`+ content[0]?.attributes?.image_slider?.data[7]?.attributes?.url,
//                     `http://localhost:1337`+ content[0]?.attributes?.image_slider?.data[8]?.attributes?.url
//                   ]} />
//               <h4>Support from Celebrity </h4>
//             </div>
//             <div className="gallery-box">
//               {/* <figure id="lightGallery2">
//                 <Link
//                   href="assets/images/gallery/DHL-Donors-Event/1.jpg"
//                   data-fancybox-group="gallery"
//                 >
//                   <img
//                     className="img-responsive"
//                     src="assets/images/gallery/DHL-Donors-Event/1.jpg"
//                     alt=""
//                   />
//                 </Link>
//                 <Link
//                   href="assets/images/gallery/DHL-Donors-Event/2.jpg"
//                   data-fancybox-group="gallery"
//                 >
               
//                 </Link>
//                 <Link
//                   href="assets/images/gallery/DHL-Donors-Event/3.jpg"
//                   data-fancybox-group="gallery"
//                 >
           
//                 </Link>
//                 <Link
//                   href="assets/images/gallery/DHL-Donors-Event/4.jpg"
//                   data-fancybox-group="gallery"
//                 >
//                 </Link>
//                 <Link
//                   href="assets/images/gallery/DHL-Donors-Event/5.jpg"
//                   data-fancybox-group="gallery"
//                 >

//                 </Link>
//                 <Link
//                   href="assets/images/gallery/DHL-Donors-Event/6.jpg"
//                   data-fancybox-group="gallery"
//                 >

//                 </Link>
//                 <Link
//                   href="assets/images/gallery/DHL-Donors-Event/7.jpg"
//                   data-fancybox-group="gallery"
//                 >

//                 </Link>
//                 <Link
//                   href="assets/images/gallery/DHL-Donors-Event/8.jpg"
//                   data-fancybox-group="gallery"
//                 >

//                 </Link>
//                 <Link
//                   href="assets/images/gallery/DHL-Donors-Event/9.jpg"
//                   data-fancybox-group="gallery"
//                 >

//                 </Link>
//                 <Link
//                   href="assets/images/gallery/DHL-Donors-Event/10.jpg"
//                   data-fancybox-group="gallery"
//                 >

//                 </Link>
//                 <Link
//                   href="assets/images/gallery/DHL-Donors-Event/11.jpg"
//                   data-fancybox-group="gallery"
//                 >
          
//                 </Link>
//                 <Link
//                   href="assets/images/gallery/DHL-Donors-Event/12.jpg"
//                   data-fancybox-group="gallery"
//                 >
        
//                 </Link>
//               </figure> */}
//               <ImageSlider images={[
//                     `http://localhost:1337`+ content[1]?.attributes?.image_slider?.data[0]?.attributes?.url,
//                     `http://localhost:1337`+ content[1]?.attributes?.image_slider?.data[1]?.attributes?.url,
//                     `http://localhost:1337`+ content[1]?.attributes?.image_slider?.data[2]?.attributes?.url,
//                     `http://localhost:1337`+ content[1]?.attributes?.image_slider?.data[3]?.attributes?.url,
//                     `http://localhost:1337`+ content[1]?.attributes?.image_slider?.data[4]?.attributes?.url,
//                     `http://localhost:1337`+ content[1]?.attributes?.image_slider?.data[5]?.attributes?.url,
//                     `http://localhost:1337`+ content[1]?.attributes?.image_slider?.data[6]?.attributes?.url,
//                     `http://localhost:1337`+ content[1]?.attributes?.image_slider?.data[7]?.attributes?.url,
//                     `http://localhost:1337`+ content[1]?.attributes?.image_slider?.data[8]?.attributes?.url
//                   ]} />
//               <h4>DHL Donors Event</h4>
//             </div>
//             <div className="gallery-box">
//               {/* <figure id="lightGallery4">
//                 <Link
//                   href="assets/images/gallery/Skill-Education/1.jpg"
//                   data-fancybox-group="gallery"
//                 >
//                   <img
//                     className="img-responsive"
//                     src="assets/images/gallery/Skill-Education/1.jpg"
//                     alt=""
//                   />
//                 </Link>
//                 <Link
//                   href="assets/images/gallery/Skill-Education/2.jpg"
//                   data-fancybox-group="gallery"
//                 >
//                   {" "}
//                 </Link>
//                 <Link
//                   href="assets/images/gallery/Skill-Education/3.jpg"
//                   data-fancybox-group="gallery"
//                 >
//                   {" "}
//                 </Link>
//                 <Link
//                   href="assets/images/gallery/Skill-Education/4.jpg"
//                   data-fancybox-group="gallery"
//                 >
//                   {" "}
//                 </Link>
//                 <Link
//                   href="assets/images/gallery/Skill-Education/5.jpg"
//                   data-fancybox-group="gallery"
//                 >
//                   {" "}
//                 </Link>
//                 <Link
//                   href="assets/images/gallery/Skill-Education/6.jpg"
//                   data-fancybox-group="gallery"
//                 >
//                   {" "}
//                 </Link>
//                 <Link
//                   href="assets/images/gallery/Skill-Education/7.jpg"
//                   data-fancybox-group="gallery"
//                 >
//                   {" "}
//                 </Link>
//                 <Link
//                   href="assets/images/gallery/Skill-Education/8.jpg"
//                   data-fancybox-group="gallery"
//                 >
//                   {" "}
//                 </Link>
//                 <Link
//                   href="assets/images/gallery/Skill-Education/9.jpg"
//                   data-fancybox-group="gallery"
//                 >
//                   {" "}
//                 </Link>
//                 <Link
//                   href="assets/images/gallery/Skill-Education/10.jpg"
//                   data-fancybox-group="gallery"
//                 >
//                   {" "}
//                 </Link>
//                 <Link
//                   href="assets/images/gallery/Skill-Education/11.jpg"
//                   data-fancybox-group="gallery"
//                 >
//                   {" "}
//                 </Link>
//                 <Link
//                   href="assets/images/gallery/Skill-Education/12.jpg"
//                   data-fancybox-group="gallery"
//                 >
//                   {" "}
//                 </Link>
//                 <Link
//                   href="assets/images/gallery/Skill-Education/13.jpg"
//                   data-fancybox-group="gallery"
//                 >
//                   {" "}
//                 </Link>
//                 <Link
//                   href="assets/images/gallery/Skill-Education/14.jpg"
//                   data-fancybox-group="gallery"
//                 >
//                   {" "}
//                 </Link>
//                 <Link
//                   href="assets/images/gallery/Skill-Education/15.jpg"
//                   data-fancybox-group="gallery"
//                 >
//                   {" "}
//                 </Link>
//                 <Link
//                   href="assets/images/gallery/Skill-Education/16.jpg"
//                   data-fancybox-group="gallery"
//                 >
//                   {" "}
//                 </Link>
//                 <Link
//                   href="assets/images/gallery/Skill-Education/17.jpg"
//                   data-fancybox-group="gallery"
//                 >
//                   {" "}
//                 </Link>
//               </figure> */}
//               <ImageSlider images={[
//                     `http://localhost:1337`+ content[2]?.attributes?.image_slider?.data[0]?.attributes?.url,
//                     `http://localhost:1337`+ content[2]?.attributes?.image_slider?.data[1]?.attributes?.url,
//                     `http://localhost:1337`+ content[2]?.attributes?.image_slider?.data[2]?.attributes?.url,
//                     `http://localhost:1337`+ content[2]?.attributes?.image_slider?.data[3]?.attributes?.url,
//                     `http://localhost:1337`+ content[2]?.attributes?.image_slider?.data[4]?.attributes?.url,
//                     `http://localhost:1337`+ content[2]?.attributes?.image_slider?.data[5]?.attributes?.url,
//                     `http://localhost:1337`+ content[2]?.attributes?.image_slider?.data[6]?.attributes?.url,
//                     `http://localhost:1337`+ content[2]?.attributes?.image_slider?.data[7]?.attributes?.url,
//                     `http://localhost:1337`+ content[2]?.attributes?.image_slider?.data[8]?.attributes?.url
//                   ]} />
//               <h4>Skill Education </h4>
//             </div>
//             <div className="gallery-box">
//               {/* <figure id="lightGallery1">
//                 <Link
//                   href="assets/images/gallery/38th-Annual-Day/1.jpg"
//                   data-fancybox-group="gallery"
//                 >
//                   <img
//                     className="img-responsive"
//                     src="assets/images/gallery/38th-Annual-Day/thumb.jpg"
//                     alt=""
//                   />
//                 </Link>
//                 <Link
//                   href="assets/images/gallery/38th-Annual-Day/2.jpg"
//                   data-fancybox-group="gallery"
//                 >
//                   {" "}
//                 </Link>
//                 <Link
//                   href="assets/images/gallery/38th-Annual-Day/3.jpg"
//                   data-fancybox-group="gallery"
//                 >
//                   {" "}
//                 </Link>
//                 <Link
//                   href="assets/images/gallery/38th-Annual-Day/4.jpg"
//                   data-fancybox-group="gallery"
//                 >
//                   {" "}
//                 </Link>
//                 <Link
//                   href="assets/images/gallery/38th-Annual-Day/5.jpg"
//                   data-fancybox-group="gallery"
//                 >
//                   {" "}
//                 </Link>
//                 <Link
//                   href="assets/images/gallery/38th-Annual-Day/6.jpg"
//                   data-fancybox-group="gallery"
//                 >
//                   {" "}
//                 </Link>
//                 <Link
//                   href="assets/images/gallery/38th-Annual-Day/7.jpg"
//                   data-fancybox-group="gallery"
//                 >
//                   {" "}
//                 </Link>
//                 <Link
//                   href="assets/images/gallery/38th-Annual-Day/8.jpg"
//                   data-fancybox-group="gallery"
//                 >
//                   {" "}
//                 </Link>
//                 <Link
//                   href="assets/images/gallery/38th-Annual-Day/9.jpg"
//                   data-fancybox-group="gallery"
//                 >
//                   {" "}
//                 </Link>
//                 <Link
//                   href="assets/images/gallery/38th-Annual-Day/10.jpg"
//                   data-fancybox-group="gallery"
//                 >
//                   {" "}
//                 </Link>
//                 <Link
//                   href="assets/images/gallery/38th-Annual-Day/11.jpg"
//                   data-fancybox-group="gallery"
//                 >
//                   {" "}
//                 </Link>
//                 <Link
//                   href="assets/images/gallery/38th-Annual-Day/12.jpg"
//                   data-fancybox-group="gallery"
//                 >
//                   {" "}
//                 </Link>
//                 <Link
//                   href="assets/images/gallery/38th-Annual-Day/13.jpg"
//                   data-fancybox-group="gallery"
//                 >
//                   {" "}
//                 </Link>
//                 <Link
//                   href="assets/images/gallery/38th-Annual-Day/14.jpg"
//                   data-fancybox-group="gallery"
//                 >
//                   {" "}
//                 </Link>
//                 <Link
//                   href="assets/images/gallery/38th-Annual-Day/15.jpg"
//                   data-fancybox-group="gallery"
//                 >
//                   {" "}
//                 </Link>
//                 <Link
//                   href="assets/images/gallery/38th-Annual-Day/16.jpg"
//                   data-fancybox-group="gallery"
//                 >
//                   {" "}
//                 </Link>
//                 <Link
//                   href="assets/images/gallery/38th-Annual-Day/17.jpg"
//                   data-fancybox-group="gallery"
//                 >
//                   {" "}
//                 </Link>
//                 <Link
//                   href="assets/images/gallery/38th-Annual-Day/18.jpg"
//                   data-fancybox-group="gallery"
//                 >
//                   {" "}
//                 </Link>
//                 <Link
//                   href="assets/images/gallery/38th-Annual-Day/19.jpg"
//                   data-fancybox-group="gallery"
//                 >
//                   {" "}
//                 </Link>
//                 <Link
//                   href="assets/images/gallery/38th-Annual-Day/20.jpg"
//                   data-fancybox-group="gallery"
//                 >
//                   {" "}
//                 </Link>
//                 <Link
//                   href="assets/images/gallery/38th-Annual-Day/21.jpg"
//                   data-fancybox-group="gallery"
//                 >
//                   {" "}
//                 </Link>
//                 <Link
//                   href="assets/images/gallery/38th-Annual-Day/22.jpg"
//                   data-fancybox-group="gallery"
//                 >
//                   {" "}
//                 </Link>
//                 <Link
//                   href="assets/images/gallery/38th-Annual-Day/23.jpg"
//                   data-fancybox-group="gallery"
//                 >
//                   {" "}
//                 </Link>
//                 <Link
//                   href="assets/images/gallery/38th-Annual-Day/24.jpg"
//                   data-fancybox-group="gallery"
//                 >
//                   {" "}
//                 </Link>
//               </figure> */}
//               <ImageSlider images={[
//                     `http://localhost:1337`+ content[3]?.attributes?.image_slider?.data[0]?.attributes?.url,
//                     `http://localhost:1337`+ content[3]?.attributes?.image_slider?.data[1]?.attributes?.url,
//                     `http://localhost:1337`+ content[3]?.attributes?.image_slider?.data[2]?.attributes?.url,
//                     `http://localhost:1337`+ content[3]?.attributes?.image_slider?.data[3]?.attributes?.url,
//                     `http://localhost:1337`+ content[3]?.attributes?.image_slider?.data[4]?.attributes?.url,
//                     `http://localhost:1337`+ content[3]?.attributes?.image_slider?.data[5]?.attributes?.url,
//                     `http://localhost:1337`+ content[3]?.attributes?.image_slider?.data[6]?.attributes?.url,
//                     `http://localhost:1337`+ content[3]?.attributes?.image_slider?.data[7]?.attributes?.url,
//                     `http://localhost:1337`+ content[3]?.attributes?.image_slider?.data[8]?.attributes?.url
//                   ]} />
//               <h4>38th Annual Day </h4>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// </section>

//       </>
//     );
//   }
  
//   export default Gallery;

import React, { useEffect, useState } from "react";
import './index.css';
import ImageSlider from "./ImageSlider";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { HOST, HOST_API } from "./utilities";

function Gallery() {
  const [content, setContent] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(HOST_API+"/galleries?populate=*");
      const json = await response.json();
      setContent(json.data);
      console.log(content)
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  return (
    <section className="team-details">
      <div className="container">
        <div className="">
          <div className="row">
            <div className="col-xl-12 col-lg-12">
              <div className="gallery-list">
                {content.map((item, index) => (
                  <div className="gallery-box" key={index}>
                    <ImageSlider images={item.attributes.image_slider.data.map(img => `${HOST}${img.attributes.url}`)} />
                    <h4>{item.attributes.image_caption}</h4>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Gallery;
