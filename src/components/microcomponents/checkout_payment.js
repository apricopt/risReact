import React from "react";

const sha256 = require("js-sha256");

function Checkout_payment() {
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
        <legend className="payment-header">Payment Method</legend>
        <fieldset className="payment-method-form">
          <div
            id="PaymentMethod_CREDIT_CARD"
            className="payment-method payment-method-expanded"
          >
            <div className="form-row   required ">
              <label htmlFor="dwfrm_onepagecheckout_paymentMethods_creditCard_number">
                <span className="required-indicator">•</span>
                <span>Number *</span>
              </label>
              <input
                className="input-text required"
                id="dwfrm_onepagecheckout_paymentMethods_creditCard_number"
                type="text"
                name="card_number"
                autoComplete="off"
                placeholder="Number *"
              />
            </div>
            <div className="form-row   required ">
              <label htmlFor="dwfrm_onepagecheckout_paymentMethods_creditCard_owner">
                <span className="required-indicator">•</span>
                <span>Name on Card *</span>
              </label>
              <input
                className="input-text required"
                id="dwfrm_onepagecheckout_paymentMethods_creditCard_owner"
                type="text"
                name="card_holder_name"
                autoComplete="off"
                placeholder="Name on Card *"
              />
            </div>
            {/* <div className="form-row  cc type  required ">
              <label htmlFor="dwfrm_onepagecheckout_paymentMethods_creditCard_type">
                <span className="required-indicator">•</span>
                <span>Card Type</span>
              </label>
              <select
                className="input-select  required"
                id="dwfrm_onepagecheckout_paymentMethods_creditCard_type"
                name="source[type]"
              >
                <option
                  className="select-option"
                  label="creditcard"
                  value="creditcard"
                >
                  Visa
                </option>
                <option className="select-option" label="Sadad" value="Sadad">
                  Sadad
                </option>
                <option
                  className="select-option"
                  label="creditcard"
                  value="creditcard"
                >
                  MasterCard
                </option>
              </select>
            </div> */}
            {/* <div className="form-row  cc month  required ">
                  <label htmlFor="dwfrm_onepagecheckout_paymentMethods_creditCard_month">
                    <span className="required-indicator">•</span>
                    <span>Month</span>
                  </label>
                  <select
                    className="input-select  required"
                    id="dwfrm_onepagecheckout_paymentMethods_creditCard_month"
                    name="expiry_date"
                  >
                    <option className="select-option" label="January" value={1}>
                      January
                    </option>
                    <option
                      className="select-option"
                      label="February"
                      value={2}
                    >
                      February
                    </option>
                    <option className="select-option" label="March" value={3}>
                      March
                    </option>
                    <option className="select-option" label="April" value={4}>
                      April
                    </option>
                    <option className="select-option" label="May" value={5}>
                      May
                    </option>
                    <option className="select-option" label="June" value={6}>
                      June
                    </option>
                    <option className="select-option" label="July" value={7}>
                      July
                    </option>
                    <option className="select-option" label="August" value={8}>
                      August
                    </option>
                    <option
                      className="select-option"
                      label="September"
                      value={9}
                    >
                      September
                    </option>
                    <option
                      className="select-option"
                      label="October"
                      value={10}
                    >
                      October
                    </option>
                    <option
                      className="select-option"
                      label="November"
                      value={11}
                    >
                      November
                    </option>
                    <option
                      className="select-option"
                      label="December"
                      value={12}
                    >
                      December
                    </option>
                  </select>
                </div>
                <div className="form-row  cc year  required ">
                  <label htmlFor="dwfrm_onepagecheckout_paymentMethods_creditCard_year">
                    <span className="required-indicator">•</span>
                    <span>Year</span>
                  </label>
                  <select
                    className="input-select  required"
                    id="dwfrm_onepagecheckout_paymentMethods_creditCard_year"
                    name="source[year]"
                  >
                    <option className="select-option" label={2018} value={2018}>
                      2018
                    </option>
                    <option className="select-option" label={2019} value={2019}>
                      2019
                    </option>
                    <option className="select-option" label={2020} value={2020}>
                      2020
                    </option>
                    <option className="select-option" label={2021} value={2021}>
                      2021
                    </option>
                    <option className="select-option" label={2022} value={2022}>
                      2022
                    </option>
                    <option className="select-option" label={2023} value={2023}>
                      2023
                    </option>
                    <option className="select-option" label={2024} value={2024}>
                      2024
                    </option>
                    <option className="select-option" label={2025} value={2025}>
                      2025
                    </option>
                    <option className="select-option" label={2026} value={2026}>
                      2026
                    </option>
                    <option className="select-option" label={2027} value={2027}>
                      2027
                    </option>
                    <option className="select-option" label={2028} value={2028}>
                      2028
                    </option>
                    <option className="select-option" label={2029} value={2029}>
                      2029
                    </option>
                    <option className="select-option" label={2030} value={2030}>
                      2030
                    </option>
                    <option className="select-option" label={2031} value={2031}>
                      2031
                    </option>
                    <option className="select-option" label={2032} value={2032}>
                      2032
                    </option>
                    <option className="select-option" label={2033} value={2033}>
                      2033
                    </option>
                    <option className="select-option" label={2034} value={2034}>
                      2034
                    </option>
                    <option className="select-option" label={2035} value={2035}>
                      2035
                    </option>
                    <option className="select-option" label={2036} value={2036}>
                      2036
                    </option>
                    <option className="select-option" label={2037} value={2037}>
                      2037
                    </option>
                    <option className="select-option" label={2038} value={2038}>
                      2038
                    </option>
                  </select>
                </div> */}
            <div className="form-row  cc cvn  required ">
              <label htmlFor="dwfrm_onepagecheckout_paymentMethods_creditCard_cvn">
                <span className="required-indicator">•</span>
                <span>Security Code</span>
              </label>
              <input
                className="input-text required"
                id="dwfrm_onepagecheckout_paymentMethods_creditCard_cvn"
                type="text"
                name="expiry_date"
                autoComplete="off"
                placeholder="YYMM"
              />
            </div>
            <div className="form-row  cc cvn  required ">
              <label htmlFor="dwfrm_onepagecheckout_paymentMethods_creditCard_cvn">
                <span className="required-indicator">•</span>
                <span>Security Code</span>
              </label>
              <input
                className="input-text required"
                id="dwfrm_onepagecheckout_paymentMethods_creditCard_cvn"
                type="text"
                name="card_security_code"
                autoComplete="off"
                placeholder="CVC"
              />
            </div>
            {/* <div className="form-row  savecard  ">
              <input
                type="hidden"
                name="callback_url"
                value="https://ris.co/checkout"
              />
              <input
                type="hidden"
                name="publishable_api_key"
                value="pk_test_LkqMbzAojadPcvXc8oC4v3WJB2W8ZvTD1Hn7sjfP"
              />
              <input type="hidden" name="amount" value="100" />
            </div> */}
          </div>
          <button type="submit">Process the payment</button>
        </fieldset>
      </form>
    </React.Fragment>
  );
}

export default Checkout_payment;
