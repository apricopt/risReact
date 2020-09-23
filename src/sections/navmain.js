import React, { useState, useContext } from "react";

import NavBanner from "../components/navbanner";
import Navigation from "../components/navigation";

import TopBlackBanner from '../components/topblackbanner'
import { findAllByTestId } from "@testing-library/react";


import logomain from '../images2/HERO/RIS LOGO MAIN.jpg'
import homelogo from '../images2/HERO/RIS LOGO MAIN.jpg'



import { CartContext } from '../contexts/cartcontext';

function Navmain(props) {


  const [cart, setCart] = useContext(CartContext);




  function openNav() {
    document.getElementById('navigation').style.display = "block";
    console.log("bava g mai hogya call")
  }



  return (
    <React.Fragment>
      <div className="homeBanner">
        {/* {props.location.pathname == "/" ? <TopBlackBanner /> : <> </>} */}
        {props.location.pathname == "/" ? <></> : <> </>}

      </div>

      <div id="header" role="banner" >

        <Navigation openNav={openNav} cart={cart} logo={props.location.pathname == "/" ? homelogo : logomain} />
      </div>
    </React.Fragment>
  );
}

export default Navmain;
