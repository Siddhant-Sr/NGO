import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { HOST, HOST_API } from "./utilities";


const Tile = ({ program }) => {
    {console.log(program.attributes.tile_image.data.attributes.url)}
  return (
   
    <div className="col-xl-4 col-md-6 wow fadeInUp" data-wow-delay="300ms">
      <div className="causes-one__single">
        <div className="causes-one__img">
          <img src={`${HOST}${program.attributes.tile_image.data.attributes.url}`} alt="" />
        </div>
        <div className="causes-one__content-box">
          <div className="causes-one__content">
            <h3 className="causes-one__title">
              <Link to={`/program/${program.id}`}>
                {program.attributes.tile_title} <span>{program.attributes.tile_subtitle}</span>{" "}
              </Link>
            </h3>
            <div className="causes-one__btn-box">
              <Link to={`/program/${program.id}`} className="causes-one__read-more">
                Read More <span className="icon-plus-sign" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tile;
// import React from "react";
// import { Link } from "react-router-dom";

// const Tile = ({ program }) => {
//   return (
//     <div className="tile" key={program.id}>
//       <Link to={`/program/${program.id}`}>
//         <img src={program.attributes.tile_image.data.attributes.url} alt={program.attributes.tile_title} />
//         <div className="tile-content">
//           <h2>{program.attributes.tile_title}</h2>
//           <p>{program.attributes.tile_subtitle}</p>
//         </div>
//       </Link>
//     </div>
//   );
// };

// export default Tile;
