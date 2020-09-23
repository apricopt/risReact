import React from "react";

import { NavLink } from 'react-router-dom'

import img1 from '../images2/HERO/HOME PAGE/website/main page.jpg'




function Hero(props) {








  return (


    <div className="hero">
      {/* <h1 style={{ fontFamily: "brandon-grotesque, san-serif" }}>Loading with the general adobe font</h1> */}
      {console.log(props.dataToRender)}
      <div className="html-slot-container">
        <div className="content-asset">
          {/* dwMarker="content" dwContentID="bcbLAiaagu6iEaaadgMUwxmhLq" dwContentName="141001-homepage-hero" */}
          <NavLink to={"/interiors"}>
            <img
              className="imgGreying"
              src={`https://strapi.ris.co${props.dataToRender[0].Header.url}`}
              alt="Interior"
            />
          </NavLink>
        </div>{" "}
        {/* End content-asset */}
      </div>
    </div>
  );
}

export default Hero;
