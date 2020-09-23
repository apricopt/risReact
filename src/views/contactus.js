import React from 'react';
import Footer from '../components/footer'

function Contactus() {



    function handleChange(e) {


        // switch (e.target.name) {
        //     case "email": setEmail(e.target.value);
        //         break;
        //     case "password": setPassword(e.target.value);
        //         break

        // }
    }




    function handleSubmit(e) {
        e.preventDefault();



        // axios({
        //     method: 'post',
        //     url: 'https://strapi.ris.co/auth/local',
        //     data: {
        //         identifier: email,
        //         password: password
        //     }
        // }).then(response => {
        //     console.log(response);
        //     localStorage.setItem('logged', JSON.stringify({
        //         status: true,
        //         firstName: response.data.user.firstName,
        //         token: response.data.jwt
        //     }));

        //     setLogin({
        //         status: true,
        //         firstName: response.data.user.firstName,
        //         token: response.data.jwt
        //     });

        //     toast(`Welcome ${response.data.user.firstName}`);
        //     setRedirect(true);



        // }


        // ).catch(err => {
        //     console.log(err.response);
        //     toast.error(err.response.data.message[0].messages[0].message);

        // })




        // function bracket is k neechay hen.
    }

    return (


        <React.Fragment>
            <div className="container-fluid">
                {/* header row */}
                <div className="row" >

                    <div className="col-md-12 contact_header" style={{ height: 700 }}>


                    </div>



                </div>

                {/* header row ends */}

                <div className="row" >

                    <div className="col-md-6" style={{ height: 700, background: "green", padding: "40px 5px 20px 15px" }}>

                        <div className="contact_info_inner">
                            {/* Contact info Block Start Here */}
                            <div className="contact_info_add">
                                <h2>Contact Info</h2>
                                <div style={{ display: "flex", flexDirection: "column" }}>

                                    <span className="address"><i><img src="https://ris.co/wp-content/themes/ris/images/location-icon.svg" alt="" /></i> <p>3388 Al Rawdah District, Unit No.5, Jeddah 23433-7377,  Saudi Arabia</p></span>
                                    <span><i><img src="https://ris.co/wp-content/themes/ris/images/phone-icon.svg" alt="" /></i> +966 (12) 663 5561</span>
                                    <span className="telephone"><i><img src="https://ris.co/wp-content/themes/ris/images/telephone-icon.svg" alt="" /></i> +966 (12) 663 9015</span>
                                    <span><a href="https://www.facebook.com/RIS.Group/" target="_blank"><i><img src="https://ris.co/wp-content/themes/ris/images/fb-icon.svg" alt="" /></i> RIS Interiors</a></span>
                                    <span><a href="https://www.instagram.com/risinteriors/?hl=en" target="_blank"><i><img src="https://ris.co/wp-content/themes/ris/images/instagram_icon.svg" alt="" /></i> RIS Interiors</a></span>
                                </div>
                            </div>
                            {/* Contact info Block End Here */}
                            {/* Ris Working Hour Block Start Here*/}
                            <div className="ris_working_hrs">
                                <h2>Office working hours</h2>
                                <ul>
                                    <li>Sunday - Thursday</li>
                                    <li>9:00am - 7:00pm</li>
                                </ul>
                            </div>
                            {/* Ris Working Hour Block End Here*/}
                            {/* Ris Working Hour Block Start Here*/}
                            <div className="ris_working_hrs">
                                <h2>Showroom working hours</h2>
                                <ul>
                                    <li>Sunday - Thursday</li>
                                    <li>10:00am - 2:00pm</li>
                                    <li>Friday</li>
                                    <li>4:30pm - 10:00pm</li>
                                </ul>
                            </div>
                            {/* Ris Working Hour Block End Here*/}
                        </div>


                    </div>

                    <div className="col-md-6" style={{ height: 700, padding: "40px 5px 20px 15px" }}>
                        {/* form starts */}

                        <form className="clearfix" id="dwfrm_login">
                            <fieldset>
                                {/* row */}
                                <div className="form-row   required " data-required-text="Please enter your email address">
                                    <label htmlFor="dwfrm_login_username_d0vznwthebci">
                                        <span className="required-indicator">•</span>
                                        <span>
                                            Name
                    </span>
                                    </label>
                                    <input className="input-text email-input required" id="" type="text" name="name"
                                        onChange={handleChange} placeholder="Name" />

                                </div>
                                {/* row */}
                                {/* row */}
                                <div className="form-row   required " data-required-text="Please enter your email address">
                                    <label htmlFor="dwfrm_login_username_d0vznwthebci">
                                        <span className="required-indicator">•</span>
                                        <span>
                                            Email Address
                    </span>
                                    </label>
                                    <input className="input-text email-input required" id="" type="text" name="email"
                                        onChange={handleChange} placeholder="Email Address" />

                                </div>
                                {/* row */}
                                {/* row */}
                                <div className="form-row   required " data-required-text="Please enter your password">
                                    <label htmlFor="dwfrm_login_password">
                                        <span className="required-indicator">•</span>
                                        <span>
                                            Phone
                    </span>
                                    </label>
                                    <input className="input-text-pw password-input required" id="dwfrm_login_password" type="text" name="phone" onChange={handleChange} placeholder="Phone" />
                                </div>
                                {/* row */}

                                {/* row */}
                                <div className="form-row   required " data-required-text="Please enter your password">
                                    <label htmlFor="dwfrm_login_password">
                                        <span className="required-indicator">•</span>
                                        <span>
                                            Subject
                    </span>
                                    </label>
                                    <input className="input-text-pw password-input required" id="dwfrm_login_password" type="text" name="password" onChange={handleChange} placeholder="Subject" />
                                </div>
                                {/* row */}
                                {/* row */}
                                <div className="form-row   required " data-required-text="Please enter your password">
                                    {/* <label htmlFor="dwfrm_login_password">
                                        <span className="required-indicator">•</span>
                                        <span>
                                            Your inquiry
                    </span>
                                    </label> */}
                                    <textarea className="input-text-pw password-input required" id="dwfrm_login_password" type="text" name="password" onChange={handleChange} placeholder="Your Inquiry" />
                                </div>
                                {/* row */}
                                <div className="form-row  label-inline  ">
                                    <label htmlFor="dwfrm_login_rememberme">Upload Asset</label>
                                    <input className="input-checkbox" type="file" name="dwfrm_login_rememjberme" id="dwfrm_login_rememberme" />
                                </div>
                                <div className="form-row form-row-button">
                                    <button onClick={handleSubmit} type="submit" className="btn" value="Log-In" name="">
                                        Submit
                  </button>
                                    {/* <a id="password-reset" href="on/demandware.store/Sites-KellyWearstler-Site/default/Account-PasswordResetDialog.html" data-dlg-options="{&quot;width&quot;:700,&quot;height&quot;:250,&quot;dialogClass&quot;:&quot;password-reset&quot;}">
                                                        Forgot Password?
                  </a> */}
                                </div>
                                <input type="hidden" name="dwfrm_login_securekey" defaultValue={1140970756} />
                            </fieldset>
                        </form>



                        {/* form ends */}


                    </div>



                </div>

            </div>

            <Footer />




        </React.Fragment>

    )
}

export default Contactus
