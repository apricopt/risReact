import React, { useEffect, useState, useContext } from "react";

import { CartContext } from "../contexts/cartcontext";
import { LoginContext } from "../contexts/logincontext";
import { Redirect } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";

import Footer from "../components/footer";

// all the mini components for step are below
import Checkout_contactinfo from "../components/microcomponents/checkout_contactinfo";
import Checkout_shipmentoverall from "../components/microcomponents/checkout_shipmentoverall";
import Checkout_billing from "../components/microcomponents/checkout_billing";
import Checkout_payment from "../components/microcomponents/checkout_payment";
import Multistep from "react-multistep";

const axios = require("axios");
var qs = require("qs");

function Checkout(props) {
  const [login, setLogin] = useContext(LoginContext);

  const steps = [
    { name: "Contact info", component: <Checkout_contactinfo /> },
    { name: "ShipmentAddress", component: <Checkout_shipmentoverall /> },
    { name: "Billing", component: <Checkout_billing /> },
    { name: "Payment", component: <Checkout_payment /> },
  ];

  return (
    <div id="wrapper" className="pt_checkout">
      <div id="main" role="main" className="primary-focus clearfix">
        <div id="primary" className="primary-content">
          <h1>Checkout</h1>
          {/* account holder information */}
          <div class="account-holder">
            <a href="">{login.firstName}</a>
            <span class="logout">
              <a
                title="Logout"
                onClick={() => {
                  toast(`Goodbye! ${login.firstName}`);
                  setLogin({});
                }}
              >
                (Logout)
              </a>
            </span>
          </div>
          {/* account holder info ends */}

          {/* form starts */}
          {/* <form id="dwfrm_onepagecheckout" className="checkout-form"> */}
          {/* contact info */}
          <Multistep showNavigation={true} steps={steps} />

          {/* </form> */}

          {/* payment form ends */}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Checkout;
