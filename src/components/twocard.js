import React from "react";

// importing images
import img1 from "../images2/HERO/HOME PAGE/website/img1.png";
import img2 from "../images2/HERO/HOME PAGE/website/img2.jpg";

function Twocard(props) {

  return (
    <div className="secondary-homepage-content">
     
      <div className="secondary-homepage-content-tile1">
        <div className="html-slot-container">
          <a href="/productsgallery">
            <img className="home-main" 
             src={`https://strapi.ris.co${props.dataToRender[0].twoimages[0].url}`} 
            alt="Fabric and Wallpaper" />
          </a>
        </div>
      </div>
      <div className="secondary-homepage-content-tile2">
        <div className="html-slot-container">
          <a href="/productsgallery">

            <img className="home-main" 
             src={`https://strapi.ris.co${props.dataToRender[0].twoimages[1].url}`} 
             alt="Tile" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Twocard;
