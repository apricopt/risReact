import React from "react";

function Checkout_contactinfo() {
  return (
    <React.Fragment>
      <legend className="ship-method">Contact info</legend>
      <fieldset className="shipping-form-address">
        <div className="form-row   required ">
          <label htmlFor="dwfrm_onepagecheckout_shippingAddress_addressFields_firstName">
            <span className="required-indicator">•</span>
            <span>Email</span>
          </label>
          <input
            className="input-text required"
            id="dwfrm_onepagecheckout_shippingAddress_addressFields_firstName"
            type="text"
            name="emailAddress"
            placeholder="Email Address"
          />
        </div>
        {/* <div className="form-row   required ">
            <label htmlFor="dwfrm_onepagecheckout_shippingAddress_addressFields_lastName">
                <span className="required-indicator">•</span>
                <span>
                
</span>
            </label>
            <input className="input-text required" id="dwfrm_onepagecheckout_shippingAddress_addressFields_lastName" type="text" name="dwfrm_onepagecheckout_shippingAddress_addressFields_lastName" placeholder="Last Name *" />
        </div> */}
      </fieldset>
    </React.Fragment>
  );
}

export default Checkout_contactinfo;
