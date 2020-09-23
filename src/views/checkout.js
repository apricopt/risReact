import React, { useEffect, useState, useContext } from 'react'


import { CartContext } from '../contexts/cartcontext';
import { LoginContext } from '../contexts/logincontext';
import { Redirect } from 'react-router-dom'

import { ToastContainer, toast } from 'react-toastify';

import Footer from '../components/footer';



const axios = require('axios');
var qs = require('qs');

function Checkout(props) {

    const [shippingMethod, setShippingMethod] = useState(true);

    const [login, setLogin] = useContext(LoginContext);





    // useEffect(() => {

    //     axios({
    //         method: 'post',
    //         url: 'https://sbcheckout.PayFort.com/FortAPI/paymentPage',
    //         data: {
    //             service_command: "TOKENIZATION",
    //             access_code: "Yib4oYb1xy0NAfRQ3zqo",
    //             merchant_identifier: "4b9b597e",
    //             merchant_reference: "XYZ9_29-yu5a98",
    //             language: "en",
    //             expiry_date: 1521,
    //             card_number: 5123456789012346,
    //             signature: "39ljNXDVFkPlAohbTOlxaf]@"
    //         }
    //     }).then(response => {
    //         console.log(response);
    //     }).catch((err) => console.log(err))

    // }, [])


    function handleChange(e) {


        switch (e.target.name) {
            case "shippingMethod": setShippingMethod((prev) => !prev);
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



    useEffect(() => {






        // check status start

        if (true) {
            const paymentid = qs.parse(props.location.search, { ignoreQueryPrefix: true }).id;
            const paymentStatus = qs.parse(props.location.search, { ignoreQueryPrefix: true }).status;
            const paymentAmount = qs.parse(props.location.search, { ignoreQueryPrefix: true }).amount;
            const payementMessage = qs.parse(props.location.search, { ignoreQueryPrefix: true }).message;


            axios({
                method: 'post',
                url: 'https://node.ris.co/checkstatus',
                data: {
                    id: paymentid,


                }
            }).then((response) => {
                if (response.data.status == "paid") {
                    toast.success("Your payment has been successfully made!");
                    // order will start processing here









                    // order processing ends here
                } else if (response.data.status == "failed") {
                    toast.error(payementMessage);
                }




            }).catch(err => console.log(err))


        }

        // check status ends






    }, [])




    if (!login.status) {
        return (
            <Redirect to={'/'} />
        )
    }



    return (

        // <div>



        //     <form
        //         method="post"
        //         action="https://api.moyasar.com/v1/payments.html"
        //         id="“form1”"
        //         name="“form1”"
        //     >



        //         <input type="hidden" name="callback_url" value="https://ris.co/checkout" />

        //         <input type="hidden" name="publishable_api_key" value="pk_test_LkqMbzAojadPcvXc8oC4v3WJB2W8ZvTD1Hn7sjfP" />
        //         <input type="hidden" name="amount" value="100" />
        //         <input type="hidden" name="source[type]" value="creditcard" />
        //         <input type="text" name="source[name]" placeholder="name" />
        //         <input type="number" name="source[number]" placeholder="card number" />
        //         <input type="number" name="source[month]" placeholder="month" />
        //         <input type="number" name="source[year]" placeholder="year" />
        //         <input type="number" name="source[cvc]" placeholder="cvc" />


        //         <input type="submit" />




        //     </form>


        // </div>

        <div id="wrapper" className="pt_checkout">
            <div id="main" role="main" className="primary-focus clearfix">
                <div id="primary" className="primary-content">
                    <h1>Checkout</h1>
                    {/* account holder information */}
                    <div class="account-holder">
                        <a href="">
                            {login.firstName}
                        </a>
                        <span class="logout">
                            <a title="Logout" onClick={() => {
                                toast(`Goodbye! ${login.firstName}`)
                                setLogin({})
                            }
                            }

                            >
                                (Logout)
         		</a>
                        </span>
                    </div>
                    {/* account holder info ends */}



                    {/* form starts */}
                    <form id="dwfrm_onepagecheckout" className="checkout-form">

                        {/* shipment price */}
                        <legend className="ship-method">Shipping Method</legend>
                        <fieldset className="shipping-method-form">
                            <div id="shipping-method-list">
                                <div className="form-row form-ship" style={{ display: "flex" }}>
                                    <div>
                                        <label htmlFor="shipping-method-001">Ground</label>
                                        <input className="input-radio" value={shippingMethod} type="radio" name="shippingMethod" defaultChecked="checked" onChange={handleChange} />
                                        <div className="form-caption">
                                            <span>Price will come here</span>
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="shipping-method-001">Pick up from the store</label>
                                        <input className="input-radio" type="radio" onChange={handleChange} name="shippingMethod" id="shipping-method-001" value={shippingMethod} />
                                        <div className="form-caption">
                                            <span>Free</span>
                                        </div>
                                    </div>

                                </div>{/* END: shippingmethod */}
                            </div>
                        </fieldset>
                        {/* shipment price ends */}








                        {/* shipment address */}

                        {shippingMethod ? <div>
                            <legend className="shipping">Shipping</legend>
                            <fieldset className="shipping-form-address">
                                <div className="form-row   required ">
                                    <label htmlFor="dwfrm_onepagecheckout_shippingAddress_addressFields_firstName">
                                        <span className="required-indicator">•</span>
                                        <span>
                                            First Name
              </span>
                                    </label>
                                    <input className="input-text required" id="dwfrm_onepagecheckout_shippingAddress_addressFields_firstName" type="text" name="dwfrm_onepagecheckout_shippingAddress_addressFields_firstName" placeholder="First Name *" />
                                </div>
                                <div className="form-row   required ">
                                    <label htmlFor="dwfrm_onepagecheckout_shippingAddress_addressFields_lastName">
                                        <span className="required-indicator">•</span>
                                        <span>
                                            Last Name
              </span>
                                    </label>
                                    <input className="input-text required" id="dwfrm_onepagecheckout_shippingAddress_addressFields_lastName" type="text" name="dwfrm_onepagecheckout_shippingAddress_addressFields_lastName" placeholder="Last Name *" />
                                </div>
                                <div className="form-row   required ">
                                    <label htmlFor="dwfrm_onepagecheckout_shippingAddress_addressFields_address1">
                                        <span className="required-indicator">•</span>
                                        <span>
                                            Address 1
              </span>
                                    </label>
                                    <input className="input-text required" id="dwfrm_onepagecheckout_shippingAddress_addressFields_address1" type="text" name="dwfrm_onepagecheckout_shippingAddress_addressFields_address1" placeholder="Address 1 *" />
                                </div>
                                <div className="form-row   ">
                                    <label htmlFor="dwfrm_onepagecheckout_shippingAddress_addressFields_address2">
                                        <span>
                                            Address 2
              </span>
                                    </label>
                                    <input className="input-text" id="dwfrm_onepagecheckout_shippingAddress_addressFields_address2" type="text" name="dwfrm_onepagecheckout_shippingAddress_addressFields_address2" placeholder="Address 2" />
                                </div>
                                <div className="form-row   required ">
                                    <label htmlFor="dwfrm_onepagecheckout_shippingAddress_addressFields_city">
                                        <span className="required-indicator">•</span>
                                        <span>
                                            City
              </span>
                                    </label>
                                    <input className="input-text required" id="dwfrm_onepagecheckout_shippingAddress_addressFields_city" type="text" name="dwfrm_onepagecheckout_shippingAddress_addressFields_city" placeholder="City *" />
                                </div>
                                <div className="form-row  form-zip  required ">
                                    <label htmlFor="dwfrm_onepagecheckout_shippingAddress_addressFields_zip">
                                        <span className="required-indicator">•</span>
                                        <span>
                                            Zip Code
              </span>
                                    </label>
                                    <input className="input-text required" id="dwfrm_onepagecheckout_shippingAddress_addressFields_zip" type="text" name="dwfrm_onepagecheckout_shippingAddress_addressFields_zip" placeholder="Zip Code *" />
                                </div>
                                <div className="form-row  form-country  required ">
                                    <label htmlFor="dwfrm_onepagecheckout_shippingAddress_addressFields_country">
                                        <span className="required-indicator">•</span>
                                        <span>
                                            Country *
              </span>
                                    </label>
                                    <select className="input-select  country required" id="dwfrm_onepagecheckout_shippingAddress_addressFields_country" name="dwfrm_onepagecheckout_shippingAddress_addressFields_country">
                                        <option className="select-option" label="Country *" value>Country *</option>
                                        <option className="select-option" label="United States of America" value="US">United States of America</option>
                                        <option className="select-option" label="Albania" value="AL">Albania</option>
                                        <option className="select-option" label="Algeria" value="DZ">Algeria</option>
                                        <option className="select-option" label="Argentina" value="AR">Argentina</option>
                                        <option className="select-option" label="Armenia" value="AM">Armenia</option>
                                        <option className="select-option" label="Australia" value="AU">Australia</option>
                                        <option className="select-option" label="Austria" value="AT">Austria</option>
                                        <option className="select-option" label="Azerbaijan" value="AZ">Azerbaijan</option>
                                        <option className="select-option" label="Bahamas" value="BS">Bahamas</option>
                                        <option className="select-option" label="Bahrain" value="BH">Bahrain</option>
                                        <option className="select-option" label="Barbados" value="BB">Barbados</option>
                                        <option className="select-option" label="Belarus" value="BY">Belarus</option>
                                        <option className="select-option" label="Belgium" value="BE">Belgium</option>
                                        <option className="select-option" label="Belize" value="BZ">Belize</option>
                                        <option className="select-option" label="Brazil" value="BR">Brazil</option>
                                        <option className="select-option" label="Bulgaria" value="BG">Bulgaria</option>
                                        <option className="select-option" label="Canada" value="CA">Canada</option>
                                        <option className="select-option" label="China" value="CN">China</option>
                                        <option className="select-option" label="Colombia" value="CO">Colombia</option>
                                        <option className="select-option" label="Costa Rica" value="CR">Costa Rica</option>
                                        <option className="select-option" label="Denmark" value="DK">Denmark</option>
                                        <option className="select-option" label="Dominican Republic" value="DO">Dominican Republic</option>
                                        <option className="select-option" label="Ecuador" value="EC">Ecuador</option>
                                        <option className="select-option" label="Egypt" value="EG">Egypt</option>
                                        <option className="select-option" label="El Salvador" value="SV">El Salvador</option>
                                        <option className="select-option" label="Estonia" value="EE">Estonia</option>
                                        <option className="select-option" label="Fiji" value="FJ">Fiji</option>
                                        <option className="select-option" label="Finland" value="FI">Finland</option>
                                        <option className="select-option" label="France" value="FR">France</option>
                                        <option className="select-option" label="Georgia" value="GE">Georgia</option>
                                        <option className="select-option" label="Germany" value="DE">Germany</option>
                                        <option className="select-option" label="Greece" value="EL">Greece</option>
                                        <option className="select-option" label="Grenada" value="GD">Grenada</option>
                                        <option className="select-option" label="Guatemala" value="GT">Guatemala</option>
                                        <option className="select-option" label="Guyana" value="GY">Guyana</option>
                                        <option className="select-option" label="Hong Kong" value="HK">Hong Kong</option>
                                        <option className="select-option" label="India" value="IN">India</option>
                                        <option className="select-option" label="Indonesia" value="ID">Indonesia</option>
                                        <option className="select-option" label="Ireland" value="IE">Ireland</option>
                                        <option className="select-option" label="Israel" value="IL">Israel</option>
                                        <option className="select-option" label="Italy" value="IT">Italy</option>
                                        <option className="select-option" label="Japan" value="JP">Japan</option>
                                        <option className="select-option" label="Jordan" value="JO">Jordan</option>
                                        <option className="select-option" label="Kuwait" value="KW">Kuwait</option>
                                        <option className="select-option" label="Kyrgyzstan" value="KG">Kyrgyzstan</option>
                                        <option className="select-option" label="Latvia" value="LV">Latvia</option>
                                        <option className="select-option" label="Lebanon" value="LB">Lebanon</option>
                                        <option className="select-option" label="Liechtenstein" value="LI">Liechtenstein</option>
                                        <option className="select-option" label="Lithuania" value="LT">Lithuania</option>
                                        <option className="select-option" label="Luxembourg" value="LU">Luxembourg</option>
                                        <option className="select-option" label="Macedonia" value="MK">Macedonia</option>
                                        <option className="select-option" label="Malaysia" value="MY">Malaysia</option>
                                        <option className="select-option" label="Maldives" value="MV">Maldives</option>
                                        <option className="select-option" label="Malta" value="MT">Malta</option>
                                        <option className="select-option" label="Mexico" value="MX">Mexico</option>
                                        <option className="select-option" label="Monaco" value="MC">Monaco</option>
                                        <option className="select-option" label="Montenegro" value="ME">Montenegro</option>
                                        <option className="select-option" label="Morocco" value="MA">Morocco</option>
                                        <option className="select-option" label="Nepal" value="NP">Nepal</option>
                                        <option className="select-option" label="Netherlands" value="NL">Netherlands</option>
                                        <option className="select-option" label="New Zealand" value="NZ">New Zealand</option>
                                        <option className="select-option" label="Norway" value="NO">Norway</option>
                                        <option className="select-option" label="Oman" value="OM">Oman</option>
                                        <option className="select-option" label="Panama" value="PA">Panama</option>
                                        <option className="select-option" label="Paraguay" value="PY">Paraguay</option>
                                        <option className="select-option" label="Peru" value="PE">Peru</option>
                                        <option className="select-option" label="Philippines" value="PH">Philippines</option>
                                        <option className="select-option" label="Poland" value="PL">Poland</option>
                                        <option className="select-option" label="Portugal" value="PT">Portugal</option>
                                        <option className="select-option" label="Qatar" value="QA">Qatar</option>
                                        <option className="select-option" label="Romania" value="RO">Romania</option>
                                        <option className="select-option" label="Russia" value="RU">Russia</option>
                                        <option className="select-option" label="San Marino" value="SM">San Marino</option>
                                        <option className="select-option" label="Saudi Arabia" selected value="SA">Saudi Arabia</option>
                                        <option className="select-option" label="Seychelles" value="SC">Seychelles</option>
                                        <option className="select-option" label="Singapore" value="SG">Singapore</option>
                                        <option className="select-option" label="Slovakia" value="SK">Slovakia</option>
                                        <option className="select-option" label="Slovenia" value="SI">Slovenia</option>
                                        <option className="select-option" label="Solomon Islands" value="SB">Solomon Islands</option>
                                        <option className="select-option" label="South Africa" value="ZA">South Africa</option>
                                        <option className="select-option" label="South Korea" value="KR">South Korea</option>
                                        <option className="select-option" label="Spain" value="ES">Spain</option>
                                        <option className="select-option" label="Sri Lanka" value="LK">Sri Lanka</option>
                                        <option className="select-option" label="Sweden" value="SE">Sweden</option>
                                        <option className="select-option" label="Switzerland" value="CH">Switzerland</option>
                                        <option className="select-option" label="Taiwan" value="TW">Taiwan</option>
                                        <option className="select-option" label="Tajikistan" value="TJ">Tajikistan</option>
                                        <option className="select-option" label="Tanzania" value="TZ">Tanzania</option>
                                        <option className="select-option" label="Thailand" value="TH">Thailand</option>
                                        <option className="select-option" label="Trinidad and Tobago" value="TT">Trinidad and Tobago</option>
                                        <option className="select-option" label="Tunisia" value="TN">Tunisia</option>
                                        <option className="select-option" label="Turkey" value="TR">Turkey</option>
                                        <option className="select-option" label="Turkmenistan" value="TM">Turkmenistan</option>
                                        <option className="select-option" label="United Arab Emirates" value="AE">United Arab Emirates</option>
                                        <option className="select-option" label="United Kingdom" value="UK">United Kingdom</option>
                                        <option className="select-option" label="Uruguay" value="UY">Uruguay</option>
                                        <option className="select-option" label="Uzbekistan" value="UZ">Uzbekistan</option>
                                        <option className="select-option" label="Venezuela" value="VE">Venezuela</option>
                                        <option className="select-option" label="Vietnam" value="VN">Vietnam</option>
                                    </select>
                                </div>
                                <div className="form-row  form-state  ">
                                    <label htmlFor="dwfrm_onepagecheckout_shippingAddress_addressFields_states_state">
                                        <span>
                                            State
              </span>
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
                                        <span>
                                            Phone
              </span>
                                    </label>
                                    <input className="input-text phone required" id="dwfrm_onepagecheckout_shippingAddress_addressFields_phone" type="text" name="dwfrm_onepagecheckout_shippingAddress_addressFields_phone" placeholder="Phone *" />
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

                        </div> : <> </>}

                        {/* shipment form ends */}








                        {/* <div className="summary" />
                        <div className="submit-form">
                            <button className="btn" type="submit" name="dwfrm_onepagecheckout_save" value="Submit Order"><span>Submit Order</span></button>
                        </div> */}







                    </form>




                    {/* <form
                method="post"
                action="https://api.moyasar.com/v1/payments.html"
                id="“form1”"
                name="“form1”"
            >



        //         <input type="hidden" name="callback_url" value="https://node.ris.co/paymentmade" />

        //         <input type="hidden" name="publishable_api_key" value="pk_test_LkqMbzAojadPcvXc8oC4v3WJB2W8ZvTD1Hn7sjfP" />
        //         <input type="hidden" name="amount" value="100" />
        //         <input type="hidden" name="source[type]" value="creditcard" />
        //         <input type="text" name="source[name]" placeholder="name" />
        //         <input type="number" name="source[number]" placeholder="card number" />
        //         <input type="number" name="source[month]" placeholder="month" />
        //         <input type="number" name="source[year]" placeholder="year" />
        //         <input type="number" name="source[cvc]" placeholder="cvc" />


        //         <input type="submit" />




        //     </form> */}


                    {/* form ends */}

                    {/* payment form starts */}

                    <form className="checkout-form"
                        id="“form1”"
                        name="“form1”"
                        action="https://api.moyasar.com/v1/payments.html"
                    >


                        <legend className="payment-header">Payment Method</legend>
                        <fieldset className="payment-method-form">
                            <div id="PaymentMethod_CREDIT_CARD" className="payment-method payment-method-expanded">
                                <div className="form-row   required ">
                                    <label htmlFor="dwfrm_onepagecheckout_paymentMethods_creditCard_number">
                                        <span className="required-indicator">•</span>
                                        <span>
                                            Number *
                </span>
                                    </label>
                                    <input className="input-text required" id="dwfrm_onepagecheckout_paymentMethods_creditCard_number" type="text" name="source[number]" autoComplete="off" placeholder="Number *" />
                                </div>
                                <div className="form-row   required ">
                                    <label htmlFor="dwfrm_onepagecheckout_paymentMethods_creditCard_owner">
                                        <span className="required-indicator">•</span>
                                        <span>
                                            Name on Card *
                </span>
                                    </label>
                                    <input className="input-text required" id="dwfrm_onepagecheckout_paymentMethods_creditCard_owner" type="text" name="source[name]" autoComplete="off" placeholder="Name on Card *" />
                                </div>
                                <div className="form-row  cc type  required ">
                                    <label htmlFor="dwfrm_onepagecheckout_paymentMethods_creditCard_type">
                                        <span className="required-indicator">•</span>
                                        <span>
                                            Card Type
                </span>
                                    </label>
                                    <select className="input-select  required" id="dwfrm_onepagecheckout_paymentMethods_creditCard_type" name="source[type]" >
                                        <option className="select-option" label="creditcard" value="creditcard">Visa</option>
                                        <option className="select-option" label="Sadad" value="Sadad">Sadad</option>
                                        <option className="select-option" label="creditcard" value="creditcard">MasterCard</option>

                                    </select>
                                </div>
                                <div className="form-row  cc month  required ">
                                    <label htmlFor="dwfrm_onepagecheckout_paymentMethods_creditCard_month">
                                        <span className="required-indicator">•</span>
                                        <span>
                                            Month
                </span>
                                    </label>
                                    <select className="input-select  required" id="dwfrm_onepagecheckout_paymentMethods_creditCard_month" name="source[month]">
                                        <option className="select-option" label="January" value={1}>January</option>
                                        <option className="select-option" label="February" value={2}>February</option>
                                        <option className="select-option" label="March" value={3}>March</option>
                                        <option className="select-option" label="April" value={4}>April</option>
                                        <option className="select-option" label="May" value={5}>May</option>
                                        <option className="select-option" label="June" value={6}>June</option>
                                        <option className="select-option" label="July" value={7}>July</option>
                                        <option className="select-option" label="August" value={8}>August</option>
                                        <option className="select-option" label="September" value={9}>September</option>
                                        <option className="select-option" label="October" value={10}>October</option>
                                        <option className="select-option" label="November" value={11}>November</option>
                                        <option className="select-option" label="December" value={12}>December</option>
                                    </select>
                                </div>
                                <div className="form-row  cc year  required ">
                                    <label htmlFor="dwfrm_onepagecheckout_paymentMethods_creditCard_year">
                                        <span className="required-indicator">•</span>
                                        <span>
                                            Year
                </span>
                                    </label>
                                    <select className="input-select  required" id="dwfrm_onepagecheckout_paymentMethods_creditCard_year" name="source[year]">
                                        <option className="select-option" label={2018} value={2018}>2018</option>
                                        <option className="select-option" label={2019} value={2019}>2019</option>
                                        <option className="select-option" label={2020} value={2020}>2020</option>
                                        <option className="select-option" label={2021} value={2021}>2021</option>
                                        <option className="select-option" label={2022} value={2022}>2022</option>
                                        <option className="select-option" label={2023} value={2023}>2023</option>
                                        <option className="select-option" label={2024} value={2024}>2024</option>
                                        <option className="select-option" label={2025} value={2025}>2025</option>
                                        <option className="select-option" label={2026} value={2026}>2026</option>
                                        <option className="select-option" label={2027} value={2027}>2027</option>
                                        <option className="select-option" label={2028} value={2028}>2028</option>
                                        <option className="select-option" label={2029} value={2029}>2029</option>
                                        <option className="select-option" label={2030} value={2030}>2030</option>
                                        <option className="select-option" label={2031} value={2031}>2031</option>
                                        <option className="select-option" label={2032} value={2032}>2032</option>
                                        <option className="select-option" label={2033} value={2033}>2033</option>
                                        <option className="select-option" label={2034} value={2034}>2034</option>
                                        <option className="select-option" label={2035} value={2035}>2035</option>
                                        <option className="select-option" label={2036} value={2036}>2036</option>
                                        <option className="select-option" label={2037} value={2037}>2037</option>
                                        <option className="select-option" label={2038} value={2038}>2038</option>
                                    </select>
                                </div>
                                <div className="form-row  cc cvn  required ">
                                    <label htmlFor="dwfrm_onepagecheckout_paymentMethods_creditCard_cvn">
                                        <span className="required-indicator">•</span>
                                        <span>
                                            Security Code
                </span>
                                    </label>
                                    <input className="input-text required" id="dwfrm_onepagecheckout_paymentMethods_creditCard_cvn" type="number" name="source[cvc]" autoComplete="off" placeholder="CVC" />
                                </div>
                                <div className="form-row  savecard  ">

                                    <input type="hidden" name="callback_url" value="https://ris.co/checkout" />
                                    <input type="hidden" name="publishable_api_key" value="pk_test_LkqMbzAojadPcvXc8oC4v3WJB2W8ZvTD1Hn7sjfP" />
                                    <input type="hidden" name="amount" value="100" />
                                </div>
                            </div>
                            <button type="submit">Process the payment</button>
                        </fieldset>

                    </form>
                    {/* payment form ends */}



                </div>
            </div >
            <Footer />
        </div >





    )
}

export default Checkout
