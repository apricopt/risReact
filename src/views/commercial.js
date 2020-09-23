import React from "react";


import {NavLink} from 'react-router-dom'


// importing components here

import Interiortile from "../components/interiortile";

// importing sections here
import Navmain from "../sections/navmain";
import Footer from "../components/footer";

// importing images here
import img1 from "../images2/HERO/HOME PAGE/interior/commercial/aljo/thumbnail.jpg";
import img2 from "../images2/HERO/HOME PAGE/interior/commercial/mofa/thumbnail.jpg";
import img3 from "../images2/HERO/HOME PAGE/interior/commercial/mdc/thumbnail.jpg";



import useDataFetching from '../containers/useDataFetching'
import loader from '../images2/HERO/loader.gif'



function Commercial() {



  const { loading, results, error } = useDataFetching("https://strapi.ris.co/porfolio-categories/1");

    

  let component ;
 

  if (loading || results == undefined ) {
    // return loading ? "Loading..." : error.message;
    component = <img src={loader} style={{height:100 , width:100, margin :"70px 0px"}} />
  }else if( results['portfolios'] !== undefined) {
          const data = results['portfolios'];
    component = data.map(item => (
      <NavLink to={`/projectdetail/${item.id}`} >
  <Interiortile key={item.id} image={`https://strapi.ris.co${item.thumbnail.url}`} title={item.Name} city=""  /> 
  </NavLink>

  ))
    

  }















  return (
    <React.Fragment>
     

      <div id="wrapper" class="pt_customer-service">
        <div
          id="main"
          role="main"
          class="page-content clearfix page-interiors-residence"
        >
          <div id="primary" class="primary-content">
            <section>
              <div class="content-asset">
              {component}
              </div>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </React.Fragment>
  );
}

export default Commercial;
