import React, { useState } from "react";

import Checkout_shipmentAddress from "./checkout_shipmentAddress";

function Checkout_shipmentoverall() {
  const [shippingMethod, setShippingMethod] = useState(true);
  function handleChange(e) {
    switch (e.target.name) {
      case "shippingMethod":
        setShippingMethod((prev) => !prev);
        break;
      //     case "lastname": setLastName(e.target.value);
      //         break;
      //     case "email": setEmail(e.target.value);
      //         break;

      //     case "password": setPassword(e.target.value);
      //         break;
      //     case "password2": setPassword2(e.target.value);

      //         break;
      //     case "username": setUsername(e.target.value);
      // }
    }
  }

  return (
    <React.Fragment>
      {/* shipment price */}
      <legend className="ship-method">Shipping Method</legend>
      <fieldset className="shipping-method-form">
        <div id="shipping-method-list">
          <div className="form-row form-ship" style={{ display: "flex" }}>
            <div>
              <label htmlFor="shipping-method-001">Ground</label>
              <input
                className="input-radio"
                value={shippingMethod}
                type="radio"
                name="shippingMethod"
                defaultChecked="checked"
                onChange={handleChange}
              />
              <div className="form-caption">
                <span>Price will come here</span>
              </div>
            </div>

            <div>
              <label htmlFor="shipping-method-001">
                Pick up from the store
              </label>
              <input
                className="input-radio"
                type="radio"
                onChange={handleChange}
                name="shippingMethod"
                id="shipping-method-001"
                value={shippingMethod}
              />
              <div className="form-caption">
                <span>Free</span>
              </div>
            </div>
          </div>
          {/* END: shippingmethod */}
        </div>
      </fieldset>
      {/* shipment price ends */}

      {shippingMethod ? <Checkout_shipmentAddress /> : <> </>}
    </React.Fragment>
  );
}

export default Checkout_shipmentoverall;
