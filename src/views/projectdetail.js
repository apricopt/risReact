import React , {useState} from "react";


import saradata from "../images2/HERO/Localdata/residentialprojects";
import commercialdata from "../images2/HERO/Localdata/commercialprojects"

import {SimpleSliderDynamic} from "../components/slider"

// importing sections here
import Footer from "../components/footer";
import Navmain from "../sections/navmain";

// importing images here

import img2 from "../images2/02_Interiors/detail_pages/residences/hillcrest2/mobile/title.jpg";

import img3 from "../images2/02_Interiors/detail_pages/residences/hillcrest2/screen-1.jpg";

import slide1 from "../images2/02_Interiors/detail_pages/residences/hillcrest2/slide1.jpg";

import img4 from "../images2/02_Interiors/detail_pages/residences/hillcrest2/screen-3.jpg";

import img5 from "../images2/02_Interiors/detail_pages/residences/hillcrest2/screen-4.jpg";

import img6 from "../images2/02_Interiors/detail_pages/residences/hillcrest2/screen-5.jpg";


import usedataFetching from '../containers/useDataFetching';
import Loader from '../components/loader';

function Projectdetail({match} , props) {

  const [data , setData] = useState({});

  const { loading, results, error } = usedataFetching(`https://strapi.ris.co/portfolios/${match.params.id}`);

  let component ;

  if (loading || results.header == undefined) {

   return  <Loader />
   
   
 
  }else {
   
    
  }







  return (
    <React.Fragment>
      <div id="wrapper" className="pt_project">
     
        <div id="main" role="main" class="full-width clearfix">
          <div id="primary" class="primary-content">
            <div class="content-asset">
              <div class="project-detail-page">
                {/* #TODO  section 1 */}
                <div id="project-title" className="desktop-only">
                  <img src={`https://strapi.ris.co${results.header.url}`} />  
                
            
                  <div className="project-inner-item">
                    <div className="item-table">
                      <div className="item-cell">
                     <div style={{display:"flex" , justifyContent:"center"}}>
                        <div style={{ textShadow: "0px 0px 9px black" , display: "table-caption" , wordSpacing: "9999rem" }}>{results.Name}</div>
                        </div>
                       
                        <p style={{ color: "null" }}></p>
                        <p style={{  textShadow: "0px 0px 9px black" }}>
                          {results.location}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* #TODO section 1 ends */}

                {/* #TODO section 1 mobile */}

                <div id="project-title" className="mobile-only">
                  <img src={results.headerMobile} alt="Hillcrest Residence" />
                  <div className="project-inner-item">
                    <div className="item-table">
                      <div className="item-cell">
                        <div>Hillcrest Residence</div>
                        <p>project: Residence</p>
                        <p>location: Beverly Hills, CA</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* #TODO section 1 mobile ends */}

                {/* #TODO section 3 starts  */}

                <div className="contentbody">
                  <div className="section1">
                    <table
                      className="project-item-table"
                      cellSpacing={0}
                      cellPadding={0}
                    >
                      <tbody>
                        <tr>
                          <td width="63%">
                            <img src={`https://strapi.ris.co${results.img1.url}`} alt={data.headertitle} />
                          </td>
                          <td>
                            <div className="project-desc">
                              <p>{results.text1}</p>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="section2">
                    <div className="flexslider" id="project-slider">
                      
                        
                         <SimpleSliderDynamic data={results.sliders3} />


                     
                    </div>
                  </div>
                  <div className="section3">
                    <table
                      className="project-item-table"
                      cellSpacing={0}
                      cellPadding={0}
                    >
                      <tbody>
                        <tr>
                          <td className="section2">
                            <div className="project-desc">
                              <p>{results.text2}</p>
                            </div>
                          </td>
                          <td width="44%">
                            <img src={`https://strapi.ris.co${results.img2.url}`} alt={results.Name} />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="section4">
                    <div className="project-frame">
                      <img src={`https://strapi.ris.co${results.lastImage[0].url}`} alt={results.Name} />
                    </div>
                  </div>
                  <div className="section5">
                    <table
                      className="project-item-table"
                      width="100%"
                      cellSpacing={0}
                      cellPadding={0}
                    >
                      <tbody>
                        {/* <tr>
                          <td style={{ padding: "15px 0 15px 15px" }}>
                            <img src={data.threeCardsImage} alt="hillcrest2" />
                          </td>
                        </tr> */}
                        <tr>
                          <td colSpan={2}>
                            <div className="project-desc">
                              <div className="item-table">
                                <div className="item-cell">
                                  <p>
                                    {results.lastText}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* #TODO section 3 ends */}
              </div>
            </div>

            <Footer />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Projectdetail;
