import React from "react";

// importing sections here
import Footer from "../components/footer";
import Navmain from "../sections/navmain";
import Interiorstable from '../sections/interiorstable'

import loader from '../images2/HERO/loader.gif'

//importing custom hoc here
import useDataFetching from '../containers/useDataFetching'

import Loader from '../components/loader'

function Interiors() {

   const { loading, results, error } = useDataFetching("https://strapi.ris.co/porfolio-categories");





   

  let component ;
  if (loading  || results[0]== undefined  ) {
     return  <Loader />
  }else {
    component = <Interiorstable  residentialData={results[1]} commercialData={results[0]} />

    


  
    
  }



  return (
    <React.Fragment>
     
     <div  style={{marginTop:40}}>
      {/* <div
       
       
       
      >
       
        <div id="primary" class="primary-content">
        <section>
        <div class="content-asset">
        <div id="projects-landing"> */}
         {component}
          {/* </div>


          </div>

        </section>



        </div>
      </div> */}
      <Footer />
      </div>
    </React.Fragment>
  );
}

export default Interiors;
