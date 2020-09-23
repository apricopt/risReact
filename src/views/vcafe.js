import React from "react";

// importing sections here
import Footer from "../components/footer";
import Navmain from "../sections/navmain";

import Philosophynav from "../components/microcomponents/philosophynav";

function Vcafe() {
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
                <Philosophynav />
                <div>
                  <h1> i am the V cafe page</h1>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Vcafe;
