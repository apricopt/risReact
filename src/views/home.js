import React from "react";

import TopBlackBanner from "../components/topblackbanner";

import Hero from "../components/hero";
import Footer from "../components/footer";

// importing sections here

import Homecontentnormal from "../sections/homecontentnormal"
import Homecontentmobile from "../sections/homecontentmobile"






import useDataFetching from '../containers/useDataFetching'

import Loader from '../components/loader'
 
function Home(props) {

  const { loading, results, error } = useDataFetching("https://strapi.ris.co/homepages");

  let component ;

  if (loading || results[0]== undefined) {
   return <Loader />
  }else {
    component = 
    <div id="main" role="main">
    <Homecontentnormal dataToRender={results} />
    <Homecontentmobile dataToRender={results} />



    </div>
    
  }



  return (
    <React.Fragment>
     <div className="homeBanner">
        <div className="html-slot-container">
          
          <div id="wrapper" class="pt_storefront">
          
          {component}
              
              <Footer />
            </div>
          </div>
          </div>
      
      
    </React.Fragment>
  );
}

export default Home;