import React from "react";

function Payfort() {
  return (
    <React.Fragment>
      <form
        action="https://sbcheckout.PayFort.com/FortAPI/paymentPage"
        method="POST"
      >
        <h1>This is the form for the tokenization</h1>
        <input type="hidden" name="service_command" value="TOKENIZATION" />
        <input type="hidden" name="access_code" value="Yib4oYb1xy0NAfRQ3zqo" />
        <input type="hidden" name="merchant_identifier" value="4b9b597e" />
        <input
          type="hidden"
          name="signature"
          value="4f12a4a0c83f56f0d466981bf0feac83d583211d7b8bddbb16c9c60c15f47939"
        />
        <input type="hidden" name="customer_email" value="apricopt@gmail.com" />
        <input type="hidden" name="language" value="en" />
        <input type="hidden" name="merchant_reference" value="XYZ9239-yu898" />
        {/* <input type="hidden" name="card_number" value="4005550000000001" />
        <input type="hidden" name="card_security_code" value="123" />
        <input type="hidden" name="expiry_date" value="05/21" /> */}

        {/*  */}

        <input type="submit" />
      </form>
    </React.Fragment>
  );
}

export default Payfort;
