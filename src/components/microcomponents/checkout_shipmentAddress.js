import React from 'react'

function Checkout_shipmentAddress() {
    return (
        <div>
                <legend className="shipping">Shipping</legend>
                <fieldset className="shipping-form-address">
                  <div className="form-row   required ">
                    <label htmlFor="dwfrm_onepagecheckout_shippingAddress_addressFields_firstName">
                      <span className="required-indicator">•</span>
                      <span>First Name</span>
                    </label>
                    <input
                      className="input-text required"
                      id="dwfrm_onepagecheckout_shippingAddress_addressFields_firstName"
                      type="text"
                      name="dwfrm_onepagecheckout_shippingAddress_addressFields_firstName"
                      placeholder="First Name *"
                    />
                  </div>
                  <div className="form-row   required ">
                    <label htmlFor="dwfrm_onepagecheckout_shippingAddress_addressFields_lastName">
                      <span className="required-indicator">•</span>
                      <span>Last Name</span>
                    </label>
                    <input
                      className="input-text required"
                      id="dwfrm_onepagecheckout_shippingAddress_addressFields_lastName"
                      type="text"
                      name="dwfrm_onepagecheckout_shippingAddress_addressFields_lastName"
                      placeholder="Last Name *"
                    />
                  </div>
                  <div className="form-row   required ">
                    <label htmlFor="dwfrm_onepagecheckout_shippingAddress_addressFields_address1">
                      <span className="required-indicator">•</span>
                      <span>Address 1</span>
                    </label>
                    <input
                      className="input-text required"
                      id="dwfrm_onepagecheckout_shippingAddress_addressFields_address1"
                      type="text"
                      name="dwfrm_onepagecheckout_shippingAddress_addressFields_address1"
                      placeholder="Address 1 *"
                    />
                  </div>
                  <div className="form-row   ">
                    <label htmlFor="dwfrm_onepagecheckout_shippingAddress_addressFields_address2">
                      <span>Address 2</span>
                    </label>
                    <input
                      className="input-text"
                      id="dwfrm_onepagecheckout_shippingAddress_addressFields_address2"
                      type="text"
                      name="dwfrm_onepagecheckout_shippingAddress_addressFields_address2"
                      placeholder="Address 2"
                    />
                  </div>
                  <div className="form-row   required ">
                    <label htmlFor="dwfrm_onepagecheckout_shippingAddress_addressFields_city">
                      <span className="required-indicator">•</span>
                      <span>City</span>
                    </label>
                    <input
                      className="input-text required"
                      id="dwfrm_onepagecheckout_shippingAddress_addressFields_city"
                      type="text"
                      name="dwfrm_onepagecheckout_shippingAddress_addressFields_city"
                      placeholder="City *"
                    />
                  </div>
                  <div className="form-row  form-zip  required ">
                    <label htmlFor="dwfrm_onepagecheckout_shippingAddress_addressFields_zip">
                      <span className="required-indicator">•</span>
                      <span>Zip Code</span>
                    </label>
                    <input
                      className="input-text required"
                      id="dwfrm_onepagecheckout_shippingAddress_addressFields_zip"
                      type="text"
                      name="dwfrm_onepagecheckout_shippingAddress_addressFields_zip"
                      placeholder="Zip Code *"
                    />
                  </div>
                  <div className="form-row  form-country  required ">
                    <label htmlFor="dwfrm_onepagecheckout_shippingAddress_addressFields_country">
                      <span className="required-indicator">•</span>
                      <span>Country *</span>
                    </label>
                    <select
                      className="input-select  country required"
                      id="dwfrm_onepagecheckout_shippingAddress_addressFields_country"
                      name="dwfrm_onepagecheckout_shippingAddress_addressFields_country"
                    >
                      <option className="select-option" label="Country *" value>
                        Country *
                      </option>
                      <option
                        className="select-option"
                        label="United States of America"
                        value="US"
                      >
                        United States of America
                      </option>
                      <option
                        className="select-option"
                        label="Albania"
                        value="AL"
                      >
                        Albania
                      </option>
                      <option
                        className="select-option"
                        label="Algeria"
                        value="DZ"
                      >
                        Algeria
                      </option>
                      <option
                        className="select-option"
                        label="Argentina"
                        value="AR"
                      >
                        Argentina
                      </option>
                      <option
                        className="select-option"
                        label="Armenia"
                        value="AM"
                      >
                        Armenia
                      </option>
                      <option
                        className="select-option"
                        label="Australia"
                        value="AU"
                      >
                        Australia
                      </option>
                      <option
                        className="select-option"
                        label="Austria"
                        value="AT"
                      >
                        Austria
                      </option>
                      <option
                        className="select-option"
                        label="Azerbaijan"
                        value="AZ"
                      >
                        Azerbaijan
                      </option>
                      <option
                        className="select-option"
                        label="Bahamas"
                        value="BS"
                      >
                        Bahamas
                      </option>
                      <option
                        className="select-option"
                        label="Bahrain"
                        value="BH"
                      >
                        Bahrain
                      </option>
                      <option
                        className="select-option"
                        label="Barbados"
                        value="BB"
                      >
                        Barbados
                      </option>
                      <option
                        className="select-option"
                        label="Belarus"
                        value="BY"
                      >
                        Belarus
                      </option>
                      <option
                        className="select-option"
                        label="Belgium"
                        value="BE"
                      >
                        Belgium
                      </option>
                      <option
                        className="select-option"
                        label="Belize"
                        value="BZ"
                      >
                        Belize
                      </option>
                      <option
                        className="select-option"
                        label="Brazil"
                        value="BR"
                      >
                        Brazil
                      </option>
                      <option
                        className="select-option"
                        label="Bulgaria"
                        value="BG"
                      >
                        Bulgaria
                      </option>
                      <option
                        className="select-option"
                        label="Canada"
                        value="CA"
                      >
                        Canada
                      </option>
                      <option
                        className="select-option"
                        label="China"
                        value="CN"
                      >
                        China
                      </option>
                      <option
                        className="select-option"
                        label="Colombia"
                        value="CO"
                      >
                        Colombia
                      </option>
                      <option
                        className="select-option"
                        label="Costa Rica"
                        value="CR"
                      >
                        Costa Rica
                      </option>
                      <option
                        className="select-option"
                        label="Denmark"
                        value="DK"
                      >
                        Denmark
                      </option>
                      <option
                        className="select-option"
                        label="Dominican Republic"
                        value="DO"
                      >
                        Dominican Republic
                      </option>
                      <option
                        className="select-option"
                        label="Ecuador"
                        value="EC"
                      >
                        Ecuador
                      </option>
                      <option
                        className="select-option"
                        label="Egypt"
                        value="EG"
                      >
                        Egypt
                      </option>
                      <option
                        className="select-option"
                        label="El Salvador"
                        value="SV"
                      >
                        El Salvador
                      </option>
                      <option
                        className="select-option"
                        label="Estonia"
                        value="EE"
                      >
                        Estonia
                      </option>
                      <option className="select-option" label="Fiji" value="FJ">
                        Fiji
                      </option>
                      <option
                        className="select-option"
                        label="Finland"
                        value="FI"
                      >
                        Finland
                      </option>
                      <option
                        className="select-option"
                        label="France"
                        value="FR"
                      >
                        France
                      </option>
                      <option
                        className="select-option"
                        label="Georgia"
                        value="GE"
                      >
                        Georgia
                      </option>
                      <option
                        className="select-option"
                        label="Germany"
                        value="DE"
                      >
                        Germany
                      </option>
                      <option
                        className="select-option"
                        label="Greece"
                        value="EL"
                      >
                        Greece
                      </option>
                      <option
                        className="select-option"
                        label="Grenada"
                        value="GD"
                      >
                        Grenada
                      </option>
                      <option
                        className="select-option"
                        label="Guatemala"
                        value="GT"
                      >
                        Guatemala
                      </option>
                      <option
                        className="select-option"
                        label="Guyana"
                        value="GY"
                      >
                        Guyana
                      </option>
                      <option
                        className="select-option"
                        label="Hong Kong"
                        value="HK"
                      >
                        Hong Kong
                      </option>
                      <option
                        className="select-option"
                        label="India"
                        value="IN"
                      >
                        India
                      </option>
                      <option
                        className="select-option"
                        label="Indonesia"
                        value="ID"
                      >
                        Indonesia
                      </option>
                      <option
                        className="select-option"
                        label="Ireland"
                        value="IE"
                      >
                        Ireland
                      </option>
                      <option
                        className="select-option"
                        label="Israel"
                        value="IL"
                      >
                        Israel
                      </option>
                      <option
                        className="select-option"
                        label="Italy"
                        value="IT"
                      >
                        Italy
                      </option>
                      <option
                        className="select-option"
                        label="Japan"
                        value="JP"
                      >
                        Japan
                      </option>
                      <option
                        className="select-option"
                        label="Jordan"
                        value="JO"
                      >
                        Jordan
                      </option>
                      <option
                        className="select-option"
                        label="Kuwait"
                        value="KW"
                      >
                        Kuwait
                      </option>
                      <option
                        className="select-option"
                        label="Kyrgyzstan"
                        value="KG"
                      >
                        Kyrgyzstan
                      </option>
                      <option
                        className="select-option"
                        label="Latvia"
                        value="LV"
                      >
                        Latvia
                      </option>
                      <option
                        className="select-option"
                        label="Lebanon"
                        value="LB"
                      >
                        Lebanon
                      </option>
                      <option
                        className="select-option"
                        label="Liechtenstein"
                        value="LI"
                      >
                        Liechtenstein
                      </option>
                      <option
                        className="select-option"
                        label="Lithuania"
                        value="LT"
                      >
                        Lithuania
                      </option>
                      <option
                        className="select-option"
                        label="Luxembourg"
                        value="LU"
                      >
                        Luxembourg
                      </option>
                      <option
                        className="select-option"
                        label="Macedonia"
                        value="MK"
                      >
                        Macedonia
                      </option>
                      <option
                        className="select-option"
                        label="Malaysia"
                        value="MY"
                      >
                        Malaysia
                      </option>
                      <option
                        className="select-option"
                        label="Maldives"
                        value="MV"
                      >
                        Maldives
                      </option>
                      <option
                        className="select-option"
                        label="Malta"
                        value="MT"
                      >
                        Malta
                      </option>
                      <option
                        className="select-option"
                        label="Mexico"
                        value="MX"
                      >
                        Mexico
                      </option>
                      <option
                        className="select-option"
                        label="Monaco"
                        value="MC"
                      >
                        Monaco
                      </option>
                      <option
                        className="select-option"
                        label="Montenegro"
                        value="ME"
                      >
                        Montenegro
                      </option>
                      <option
                        className="select-option"
                        label="Morocco"
                        value="MA"
                      >
                        Morocco
                      </option>
                      <option
                        className="select-option"
                        label="Nepal"
                        value="NP"
                      >
                        Nepal
                      </option>
                      <option
                        className="select-option"
                        label="Netherlands"
                        value="NL"
                      >
                        Netherlands
                      </option>
                      <option
                        className="select-option"
                        label="New Zealand"
                        value="NZ"
                      >
                        New Zealand
                      </option>
                      <option
                        className="select-option"
                        label="Norway"
                        value="NO"
                      >
                        Norway
                      </option>
                      <option className="select-option" label="Oman" value="OM">
                        Oman
                      </option>
                      <option
                        className="select-option"
                        label="Panama"
                        value="PA"
                      >
                        Panama
                      </option>
                      <option
                        className="select-option"
                        label="Paraguay"
                        value="PY"
                      >
                        Paraguay
                      </option>
                      <option className="select-option" label="Peru" value="PE">
                        Peru
                      </option>
                      <option
                        className="select-option"
                        label="Philippines"
                        value="PH"
                      >
                        Philippines
                      </option>
                      <option
                        className="select-option"
                        label="Poland"
                        value="PL"
                      >
                        Poland
                      </option>
                      <option
                        className="select-option"
                        label="Portugal"
                        value="PT"
                      >
                        Portugal
                      </option>
                      <option
                        className="select-option"
                        label="Qatar"
                        value="QA"
                      >
                        Qatar
                      </option>
                      <option
                        className="select-option"
                        label="Romania"
                        value="RO"
                      >
                        Romania
                      </option>
                      <option
                        className="select-option"
                        label="Russia"
                        value="RU"
                      >
                        Russia
                      </option>
                      <option
                        className="select-option"
                        label="San Marino"
                        value="SM"
                      >
                        San Marino
                      </option>
                      <option
                        className="select-option"
                        label="Saudi Arabia"
                        selected
                        value="SA"
                      >
                        Saudi Arabia
                      </option>
                      <option
                        className="select-option"
                        label="Seychelles"
                        value="SC"
                      >
                        Seychelles
                      </option>
                      <option
                        className="select-option"
                        label="Singapore"
                        value="SG"
                      >
                        Singapore
                      </option>
                      <option
                        className="select-option"
                        label="Slovakia"
                        value="SK"
                      >
                        Slovakia
                      </option>
                      <option
                        className="select-option"
                        label="Slovenia"
                        value="SI"
                      >
                        Slovenia
                      </option>
                      <option
                        className="select-option"
                        label="Solomon Islands"
                        value="SB"
                      >
                        Solomon Islands
                      </option>
                      <option
                        className="select-option"
                        label="South Africa"
                        value="ZA"
                      >
                        South Africa
                      </option>
                      <option
                        className="select-option"
                        label="South Korea"
                        value="KR"
                      >
                        South Korea
                      </option>
                      <option
                        className="select-option"
                        label="Spain"
                        value="ES"
                      >
                        Spain
                      </option>
                      <option
                        className="select-option"
                        label="Sri Lanka"
                        value="LK"
                      >
                        Sri Lanka
                      </option>
                      <option
                        className="select-option"
                        label="Sweden"
                        value="SE"
                      >
                        Sweden
                      </option>
                      <option
                        className="select-option"
                        label="Switzerland"
                        value="CH"
                      >
                        Switzerland
                      </option>
                      <option
                        className="select-option"
                        label="Taiwan"
                        value="TW"
                      >
                        Taiwan
                      </option>
                      <option
                        className="select-option"
                        label="Tajikistan"
                        value="TJ"
                      >
                        Tajikistan
                      </option>
                      <option
                        className="select-option"
                        label="Tanzania"
                        value="TZ"
                      >
                        Tanzania
                      </option>
                      <option
                        className="select-option"
                        label="Thailand"
                        value="TH"
                      >
                        Thailand
                      </option>
                      <option
                        className="select-option"
                        label="Trinidad and Tobago"
                        value="TT"
                      >
                        Trinidad and Tobago
                      </option>
                      <option
                        className="select-option"
                        label="Tunisia"
                        value="TN"
                      >
                        Tunisia
                      </option>
                      <option
                        className="select-option"
                        label="Turkey"
                        value="TR"
                      >
                        Turkey
                      </option>
                      <option
                        className="select-option"
                        label="Turkmenistan"
                        value="TM"
                      >
                        Turkmenistan
                      </option>
                      <option
                        className="select-option"
                        label="United Arab Emirates"
                        value="AE"
                      >
                        United Arab Emirates
                      </option>
                      <option
                        className="select-option"
                        label="United Kingdom"
                        value="UK"
                      >
                        United Kingdom
                      </option>
                      <option
                        className="select-option"
                        label="Uruguay"
                        value="UY"
                      >
                        Uruguay
                      </option>
                      <option
                        className="select-option"
                        label="Uzbekistan"
                        value="UZ"
                      >
                        Uzbekistan
                      </option>
                      <option
                        className="select-option"
                        label="Venezuela"
                        value="VE"
                      >
                        Venezuela
                      </option>
                      <option
                        className="select-option"
                        label="Vietnam"
                        value="VN"
                      >
                        Vietnam
                      </option>
                    </select>
                  </div>
                  <div className="form-row  form-state  ">
                    <label htmlFor="dwfrm_onepagecheckout_shippingAddress_addressFields_states_state">
                      <span>State</span>
                    </label>
                    {/* <select className="input-select " id="dwfrm_onepagecheckout_shippingAddress_addressFields_states_state" name="dwfrm_onepagecheckout_shippingAddress_addressFields_states_state">
                                        <option className="select-option" label="State" value>State</option>
                                        <option className="select-option" label="Alabama" value="AL">Alabama</option>
                                        <option className="select-option" label="Alaska" value="AK">Alaska</option>
                                        <option className="select-option" label="American Samoa" value="AS">American Samoa</option>
                                        <option className="select-option" label="Arizona" value="AZ">Arizona</option>
                                        <option className="select-option" label="Arkansas" value="AR">Arkansas</option>
                                        <option className="select-option" label="California" value="CA">California</option>
                                        <option className="select-option" label="Colorado" value="CO">Colorado</option>
                                        <option className="select-option" label="Connecticut" value="CT">Connecticut</option>
                                        <option className="select-option" label="Delaware" value="DE">Delaware</option>
                                        <option className="select-option" label="District of Columbia" value="DC">District of Columbia</option>
                                        <option className="select-option" label="Florida" value="FL">Florida</option>
                                        <option className="select-option" label="Georgia" value="GA">Georgia</option>
                                        <option className="select-option" label="Guam" value="GU">Guam</option>
                                        <option className="select-option" label="Hawaii" value="HI">Hawaii</option>
                                        <option className="select-option" label="Idaho" value="ID">Idaho</option>
                                        <option className="select-option" label="Illinois" value="IL">Illinois</option>
                                        <option className="select-option" label="Indiana" value="IN">Indiana</option>
                                        <option className="select-option" label="Iowa" value="IA">Iowa</option>
                                        <option className="select-option" label="Kansas" value="KS">Kansas</option>
                                        <option className="select-option" label="Kentucky" value="KY">Kentucky</option>
                                        <option className="select-option" label="Louisiana" value="LA">Louisiana</option>
                                        <option className="select-option" label="Maine" value="ME">Maine</option>
                                        <option className="select-option" label="Maryland" value="MD">Maryland</option>
                                        <option className="select-option" label="Massachusetts" value="MA">Massachusetts</option>
                                        <option className="select-option" label="Michigan" value="MI">Michigan</option>
                                        <option className="select-option" label="Minnesota" value="MN">Minnesota</option>
                                        <option className="select-option" label="Mississippi" value="MS">Mississippi</option>
                                        <option className="select-option" label="Missouri" value="MO">Missouri</option>
                                        <option className="select-option" label="Montana" value="MT">Montana</option>
                                        <option className="select-option" label="Nebraska" value="NE">Nebraska</option>
                                        <option className="select-option" label="Nevada" value="NV">Nevada</option>
                                        <option className="select-option" label="New Hampshire" value="NH">New Hampshire</option>
                                        <option className="select-option" label="New Jersey" value="NJ">New Jersey</option>
                                        <option className="select-option" label="New Mexico" value="NM">New Mexico</option>
                                        <option className="select-option" label="New York" value="NY">New York</option>
                                        <option className="select-option" label="North Carolina" value="NC">North Carolina</option>
                                        <option className="select-option" label="North Dakota" value="ND">North Dakota</option>
                                        <option className="select-option" label="Ohio" value="OH">Ohio</option>
                                        <option className="select-option" label="Oklahoma" value="OK">Oklahoma</option>
                                        <option className="select-option" label="Oregon" value="OR">Oregon</option>
                                        <option className="select-option" label="Pennsylvania" value="PA">Pennsylvania</option>
                                        <option className="select-option" label="Puerto Rico" value="PR">Puerto Rico</option>
                                        <option className="select-option" label="Rhode Island" value="RI">Rhode Island</option>
                                        <option className="select-option" label="South Carolina" value="SC">South Carolina</option>
                                        <option className="select-option" label="South Dakota" value="SD">South Dakota</option>
                                        <option className="select-option" label="Tennessee" value="TN">Tennessee</option>
                                        <option className="select-option" label="Texas" value="TX">Texas</option>
                                        <option className="select-option" label="Utah" value="UT">Utah</option>
                                        <option className="select-option" label="Vermont" value="VT">Vermont</option>
                                        <option className="select-option" label="Virgin Islands" value="VI">Virgin Islands</option>
                                        <option className="select-option" label="Virginia" value="VA">Virginia</option>
                                        <option className="select-option" label="Washington" value="WA">Washington</option>
                                        <option className="select-option" label="West Virginia" value="WV">West Virginia</option>
                                        <option className="select-option" label="Wisconsin" value="WI">Wisconsin</option>
                                        <option className="select-option" label="Wyoming" value="WY">Wyoming</option>
                                        <option className="select-option" label="Armed Forces Africa" value="AE">Armed Forces Africa</option>
                                        <option className="select-option" label="Armed Forces America (exc. Canada)" value="AA">Armed Forces America (exc. Canada)</option>
                                        <option className="select-option" label="Armed Forces Canada" value="AE">Armed Forces Canada</option>
                                        <option className="select-option" label="Armed Forces Europe" value="AE">Armed Forces Europe</option>
                                        <option className="select-option" label="Armed Forces Middle East" value="AE">Armed Forces Middle East</option>
                                        <option className="select-option" label="Armed Forces Pacific" value="AP">Armed Forces Pacific</option>
                                        <option className="select-option" label="Alberta" value="AB">Alberta</option>
                                        <option className="select-option" label="British Columbia" value="BC">British Columbia</option>
                                        <option className="select-option" label="Manitoba" value="MB">Manitoba</option>
                                        <option className="select-option" label="New Brunswick" value="NB">New Brunswick</option>
                                        <option className="select-option" label="Newfoundland and Labrador" value="NL">Newfoundland and Labrador</option>
                                        <option className="select-option" label="Northwest Territories" value="NT">Northwest Territories</option>
                                        <option className="select-option" label="Nova Scotia" value="NS">Nova Scotia</option>
                                        <option className="select-option" label="Nunavut" value="NU">Nunavut</option>
                                        <option className="select-option" label="Ontario" value="ON">Ontario</option>
                                        <option className="select-option" label="Prince Edward Island" value="PE">Prince Edward Island</option>
                                        <option className="select-option" label="Quebec" value="QC">Quebec</option>
                                        <option className="select-option" label="Saskatchewan" value="SK">Saskatchewan</option>
                                        <option className="select-option" label="Yukon" value="YT">Yukon</option>
                                        <option className="select-option" label="Australian Capital Territory" value="ACT">Australian Capital Territory</option>
                                        <option className="select-option" label="New South Wales" value="NSW">New South Wales</option>
                                        <option className="select-option" label="Northern Territory" value="NT">Northern Territory</option>
                                        <option className="select-option" label="Queensland" value="QLD">Queensland</option>
                                        <option className="select-option" label="South Australia" value="SA">South Australia</option>
                                        <option className="select-option" label="Tasmania" value="TAS">Tasmania</option>
                                        <option className="select-option" label="Victoria" value="VIC">Victoria</option>
                                        <option className="select-option" label="Western Australia" value="WA">Western Australia</option>
                                        <option className="select-option" label="Non-US/Other" value="OTHER">Non-US/Other</option>
                                    </select> */}
                  </div>
                  {/* <div className="form-row  form-state input  ">
                                    <label htmlFor="dwfrm_onepagecheckout_shippingAddress_addressFields_stateField">
                                        <span>
                                            State
              </span>
                                    </label>
                                    <input className="input-text" id="dwfrm_onepagecheckout_shippingAddress_addressFields_stateField" type="text" name="dwfrm_onepagecheckout_shippingAddress_addressFields_stateField"  placeholder="State" />
                                </div> */}
                  <div className="form-row  form-phone  required ">
                    <label htmlFor="dwfrm_onepagecheckout_shippingAddress_addressFields_phone">
                      <span className="required-indicator">•</span>
                      <span>Phone</span>
                    </label>
                    <input
                      className="input-text phone required"
                      id="dwfrm_onepagecheckout_shippingAddress_addressFields_phone"
                      type="text"
                      name="dwfrm_onepagecheckout_shippingAddress_addressFields_phone"
                      placeholder="Phone *"
                    />
                  </div>
                  <div className="form-row  form-check saveAdd  ">
                    {/* <label htmlFor="dwfrm_onepagecheckout_shippingAddress_addToAddressBook">Save Address</label>
                                <input className="input-checkbox" type="checkbox" name="dwfrm_onepagecheckout_shippingAddress_addToAddressBook" id="dwfrm_onepagecheckout_shippingAddress_addToAddressBook" defaultValue="true" /> */}
                  </div>
                  <div className="form-row  form-check  ">
                    {/* <label htmlFor="dwfrm_onepagecheckout_shippingAddress_useAsBillingAddress">Use same address for billing</label>
                                    <input className="input-checkbox" type="checkbox" name="dwfrm_onepagecheckout_shippingAddress_useAsBillingAddress" id="dwfrm_onepagecheckout_shippingAddress_useAsBillingAddress" defaultValue="true" /> */}
                  </div>
                </fieldset>
              </div>
    )
}

export default Checkout_shipmentAddress
