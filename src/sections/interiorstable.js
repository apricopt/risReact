import React from "react";

import { NavLink } from 'react-router-dom'

import Interiortile from '../components/interiortile'

import img1 from "../images2/HERO/HOME PAGE/interior/commercial/commercialmain.jpg";
import img2 from "../images2/HERO/HOME PAGE/interior/residential/residentialmain.jpg";

function Interiorstable(props) {
  return (
    <div id="wrapper" class="pt_customer-service">

<div id="main" role="main" class="page-content clearfix page-interiors-residence">
    <div id="primary" class="primary-content">
    <section>
            <div class="content-asset interiorstable" >

           <NavLink to={"/residential"} >
           
            
           <Interiortile image={`https://strapi.ris.co${props.residentialData.thumbnail.url}`} title={props.residentialData.Category} city="" style={{float:"left"}}  /> 
          
            </NavLink>

          
          <NavLink to={"/commercial"} >
          <Interiortile image={`https://strapi.ris.co${props.commercialData.thumbnail.url}`} title={props.commercialData.Category} city="" style={{float:"left"}} /> 
          </NavLink>
        
         
      </div>
      </section>
      </div>
      </div></div>
  );
}

export default Interiorstable;
