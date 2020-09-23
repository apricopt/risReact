import React from "react";

// importing images here
import img1 from "../images2/HERO/HOME PAGE/website/img3.png";
import img2 from "../images2/HERO/HOME PAGE/website/img4.jpg";
import img3 from "../images2/HERO/HOME PAGE/website/img5.jpg";

function Threecards(props) {
  return (
    <div className="bottom-homepage-content">
      <div className="bottom-homepage-content-tile1">
        <div className="html-slot-container">
          <a href="/productsgallery">
            <img className="home-main"
             src={`https://strapi.ris.co${props.dataToRender[0].threeimages[0].url}`}
              alt="New Book" />
          </a>
        </div>
      </div>
      <div className="bottom-homepage-content-tile2">
        <div className="html-slot-container">
          <a href="/productsgallery">
            <img className="home-main" 
           src={`https://strapi.ris.co${props.dataToRender[0].threeimages[1].url}`}
            alt="Home Decor" />
          </a>
        </div>
      </div>
      <div className="bottom-homepage-content-tile3">
        <div className="html-slot-container">
          <a href="/productsgallery">
            <img className="home-main"
            src={`https://strapi.ris.co${props.dataToRender[0].threeimages[2].url}`}
              alt="In Stock Furniture" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Threecards;
