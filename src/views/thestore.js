
import React from 'react'


// importing sections here
import Footer from "../components/footer";
import Navmain from "../sections/navmain";

import SimpleSlider from "../components/slider"

import Interiornav from "../components/microcomponents/thestudionav";

import img1 from '../images2/HERO/HOME PAGE/thestudio/slider1.jpg'


function Thestore() {
    return (
        <React.Fragment>
      <div id="wrapper" class="pt_customer-service">
    
        <div
          id="main"
          role="main"
          class="page-content clearfix page-kw_studio_page"
        >
          <div id="primary" class="primary-content">
            <section>
              <div class="content-asset">
                <Interiornav />
                <div>
                <SimpleSlider Background1={img1} Background2={img1} Background3={img1} />
                </div>
                <h1>waiting for instagram posts</h1>
              </div>
            </section>
          </div>
        </div>
      </div>
    </React.Fragment>
    )
}

export default Thestore
