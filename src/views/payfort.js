import React, { useState } from "react";

const sha256 = require("js-sha256");

// const [tokendetail , setTokendetail];

function Payfort() {
  let object;

  function handleMerchantReference() {
    let r = Math.random().toString(36).substring(7);

    return r;
  }

  function handleSignature() {
    object = {
      access_code: "Yib4oYb1xy0NAfRQ3zqo",
      language: "en",
      merchant_identifier: "4b9b597e",
      merchant_reference: `XYZ9229-${handleMerchantReference()}`,
      service_command: "TOKENIZATION",
    };

    // console.log("yeh aya merchant reference", object.merchant_reference);
    const passphrase = "39ljNXDVFkPlAohbTOlxaf]@";
    let stringToCode = `${passphrase}access_code=${object.access_code}language=${object.language}merchant_identifier=${object.merchant_identifier}merchant_reference=${object.merchant_reference}service_command=${object.service_command}${passphrase}`;

    const hashedString = sha256(stringToCode);
    object.signature = hashedString;
  }
  handleSignature();
  return (
    <React.Fragment>
      <form
        action="https://sbcheckout.PayFort.com/FortAPI/paymentPage"
        method="POST"
      >
        {/* <form action="https://node.ris.co/debugging" method="POST"> */}
        <h1>This is the form for the tokenization</h1>
        <input
          type="hidden"
          name="service_command"
          value={object.service_command}
        />
        <input type="hidden" name="access_code" value={object.access_code} />
        <input
          type="hidden"
          name="merchant_identifier"
          value={object.merchant_identifier}
        />
        <input type="hidden" name="signature" value={object.signature} />
        {/* <input type="hidden" name="customer_email" value="apricopt@gmail.com" /> */}
        <input type="hidden" name="language" value={object.language} />
        <input
          type="hidden"
          name="merchant_reference"
          value={object.merchant_reference}
        />
        <input type="number" name="card_number" value="4005550000000001" />
        <input type="number" name="card_security_code" value="123" />
        <input type="text" name="card_holder_name"  />
        <input type="number" name="expiry_date" value="2105" />

        {/*  */}

        <input type="submit" />
      </form>
      <button onClick={handleSignature}>Signature Test</button>
    </React.Fragment>
  );
}

export default Payfort;
