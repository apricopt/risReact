import React , {useState} from 'react'
import {NavLink} from "react-router-dom";
 

// importing components here

import Interiortile from '../components/interiortile';


// importing sections here
import Navmain from "../sections/navmain";
import Footer from "../components/footer";









// importing images here
import img1 from "../images2/HERO/HOME PAGE/interior/residential/privatepalaceAMS/thumbnail.jpg"
import img2 from "../images2/HERO/HOME PAGE/interior/residential/privatepenthouseAMK/thumbnail.jpg"
import img3 from "../images2/HERO/HOME PAGE/interior/residential/privatevillaABR/thumnail.jpg"
import img4 from "../images2/HERO/HOME PAGE/interior/residential/privatepenthouseSAK/thumnail.jpg"
import img5 from "../images2/HERO/HOME PAGE/interior/residential/privatevillaAND/thumbnail.jpg"
import img6 from "../images2/HERO/HOME PAGE/interior/residential/privatevillaDNS/thumbnail.jpg"
import img7 from "../images2/HERO/HOME PAGE/interior/residential/privatevillaFRH/thumbnail.jpg"
import img8 from "../images2/HERO/HOME PAGE/interior/residential/privatevillaFRR/thumbnail.jpg"
import img9 from "../images2/HERO/HOME PAGE/interior/residential/privatevillaLAJ/thumbnail.jpg"
import img10 from "../images2/HERO/HOME PAGE/interior/residential/privatevillaMSS/thmbnail.jpg"
import img11 from "../images2/HERO/HOME PAGE/interior/residential/privatevillaNRK/thumbnail.jpg"
import img12 from "../images2/HERO/HOME PAGE/interior/residential/privatevillaRAJ/thumbnail.jpg"
import img13 from "../images2/HERO/HOME PAGE/interior/residential/risvilla/thumbnail.jpg"



import useDataFetching from '../containers/useDataFetching'
import loader from '../images2/HERO/loader.gif'


function Residential() {





    const { loading, results, error } = useDataFetching("https://strapi.ris.co/porfolio-categories/2");

    

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
         
            


<div id="wrapper" class="pt_customer-service" style={{marginTop:40}}>

<div id="main" role="main" class="page-content clearfix page-interiors-residence">
			
			<div id="primary" class="primary-content">
				<section>
                <div class="content-asset">
                    {component}



                    
                   
                    {/* <NavLink to={'/projectdetail/res/2'}  >
                    <Interiortile image={img12} title="Private Villa RAj" city="" type="res" /> 
                    </NavLink>
                    

                    <NavLink to={'/projectdetail/res/3'}  >
                     <Interiortile image={img11} title="Private villa nrk" city="" type="res" /> 
                     </NavLink>
                     <NavLink to={'/projectdetail/res/4'}  >
                     <Interiortile image={img10} title="private villa mss" city="" type="res" /> 
                     </NavLink>
                     <NavLink to={'/projectdetail/res/5'}  >
                     <Interiortile image={img9} title="Private villa laj" city="" type="res" /> 
                     </NavLink>
                     <NavLink to={'/projectdetail/res/6'}  >
                     <Interiortile image={img8} title="private villa frr" city="" type="res" /> 
                     </NavLink>
                     <NavLink to={'/projectdetail/res/7'}  >
                     <Interiortile image={img7} title="private villa frh" city="" type="res" /> 
                     </NavLink>
                     <NavLink to={'/projectdetail/res/8'}  >
                     <Interiortile image={img6} title="private villa dns" city=""  type="res"/> 
                     </NavLink>
                     <NavLink to={'/projectdetail/res/9'}  >
                     <Interiortile image={img5} title="Private villa and" city="" type="res" /> 
                     </NavLink>
                     <NavLink to={'/projectdetail/res/10'}  >
                     <Interiortile image={img4} title="PRIVATE PENTHOUSE SAK" city="" type="res" /> 
                     </NavLink>
                     <NavLink to={'/projectdetail/res/11'}  >
                     <Interiortile image={img3} title="PRIVATE VILLA ABR" city="" type="res" /> 
                     </NavLink>
                     <NavLink to={'/projectdetail/res/12'}  >
                     <Interiortile image={img2} title="PRIVATE PENTHOUSE AMK" city="" type="res" /> 
                     </NavLink>
                     <NavLink to={'/projectdetail/res/13'}  >
                     <Interiortile image={img1} title="PRIVATE PENTHOUSE AMS" city=""  type="res"/> 
                     </NavLink> */}

                    </div>




                </section>

                </div>
                </div>



</div>

<Footer />


        </React.Fragment>
        
    )
}

export default Residential
