import React, { useState } from "react";

import { NavLink, Redirect } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

import Footer from "../components/footer";

const axios = require("axios");

function Signup() {
  // all toasts will comer here
  const success = () =>
    toast.success("Your account has been created successfully!");

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [redirect, setRedirect] = useState(false);

  function handleChange(e) {
    switch (e.target.name) {
      case "firstname":
        setFirstName(e.target.value);
        break;
      case "lastname":
        setLastName(e.target.value);
        break;
      case "email":
        setEmail(e.target.value);
        break;

      case "password":
        setPassword(e.target.value);
        break;
      case "password2":
        setPassword2(e.target.value);

        break;
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("ready to submit bawa g");

    if (password == password2) {
      axios({
        method: "post",
        url: "https://node.ris.co/customer/create",
        data: {
          firstName: firstName,
          lastName: lastName,
          email: email,
          password: password,
        },
      })
        .then((response) => {
          console.log(response);

          if (response.status == 200) {
            success();
            setFirstName("");
            setLastName("");
            setEmail("");
            setPassword("");
            setPassword2("");
            setRedirect(true);
          }
        })
        .catch((err) => {
          console.log(err.response.data.message[0].messages[0].message);

          toast.error(`${err.response.data.message[0].messages[0].message}`);
        });
    } else {
      toast.error(
        "Please make sure you write password carefully in both fields!"
      );
    }

    // this is the functions bracker
  }

  if (redirect) {
    return <Redirect to={"/login"} />;
  }

  return (
    <div id="wrapper" className="pt_cart">
      <div id="main" role="main" className="primary-focus clearfix">
        <div id="primary" className="primary-content">
          <div class="login-content">
            <div style={{ display: "flex", justifyContent: "space-around" }}>
              {/* new customer starts */}

              <div class="login-box">
                <h2 class="section-header">Already a customer ?</h2>
                <div class="login-create-account">
                  <p>
                    <NavLink to={"/login"}>
                      <button
                        type="submit"
                        value="Register An Account"
                        name="dwfrm_login_register"
                      >
                        {" "}
                        Login
                      </button>
                    </NavLink>
                  </p>
                </div>
              </div>
              <div class="line-separator mobile-only"></div>

              {/* new customer ends */}

              {/* login starts  */}
              <div>
                <div className="login-box login-account ">
                  <h2
                    className="section-header"
                    style={{ fontFamily: "brandon-grotesque , sans-serif" }}
                  >
                    Create an account
                    <div className="dialog-required">
                      {" "}
                      <span className="required-indicator">
                        • <em>required</em>
                      </span>
                    </div>
                  </h2>

                  <div className="login-box-content returning-customers clearfix">
                    <p>
                      Please provide us the following information to create
                      account.
                    </p>
                    <form className="clearfix" id="dwfrm_login">
                      <fieldset>
                        <div id="namewaliflex" style={{ display: "flex" }}>
                          <div
                            className="form-row   required "
                            data-required-text="Please enter your email address"
                          >
                            <label htmlFor="dwfrm_login_username_d0vznwthebci">
                              <span className="required-indicator">•</span>
                              <span>First Name</span>
                            </label>
                            <input
                              onChange={handleChange}
                              className="input-text  required"
                              id=""
                              value={firstName}
                              type="text"
                              name="firstname"
                              placeholder="FirstName"
                            />
                          </div>
                          <div
                            className="form-row   required "
                            data-required-text="Please enter your email address"
                          >
                            <label htmlFor="dwfrm_login_username_d0vznwthebci">
                              <span className="required-indicator">•</span>
                              <span>Last Name</span>
                            </label>
                            <input
                              onChange={handleChange}
                              className="input-text email-input required"
                              value={lastName}
                              id=""
                              type="text"
                              name="lastname"
                              placeholder="LastName"
                            />
                          </div>
                        </div>
                        {/* row name ends */}

                        <div
                          className="form-row   required "
                          data-required-text="Please enter your email address"
                        >
                          <label htmlFor="dwfrm_login_username_d0vznwthebci">
                            <span className="required-indicator">•</span>
                            <span>Email Address</span>
                          </label>
                          <input
                            onChange={handleChange}
                            className="input-text email-input required"
                            id=""
                            type="text"
                            name="email"
                            placeholder="Email Address"
                            value={email}
                          />
                        </div>

                        {/* <div className="form-row   required " data-required-text="Please enter your email address">
                                                    <label htmlFor="dwfrm_login_username_d0vznwthebci">
                                                        <span className="required-indicator">•</span>
                                                        <span>
                                                            Username
</span>
                                                    </label>
                                                    <input onChange={handleChange} className="input-text email-input required" id="" type="text" name="username" placeholder="Username" value={username} />

                                                </div> */}

                        {/* row email ends */}
                        <div style={{ display: "flex" }}>
                          <div
                            className="form-row   required "
                            data-required-text="Please enter your password"
                          >
                            <label htmlFor="dwfrm_login_password">
                              <span className="required-indicator">•</span>
                              <span>Password</span>
                            </label>
                            <input
                              onChange={handleChange}
                              className="input-text-pw password-input required"
                              id=""
                              type="password"
                              name="password"
                              placeholder="Password"
                              value={password}
                            />
                          </div>

                          <div
                            className="form-row   required "
                            data-required-text="Please enter your password"
                          >
                            <label htmlFor="dwfrm_login_password">
                              <span className="required-indicator">•</span>
                              <span>Password</span>
                            </label>
                            <input
                              onChange={handleChange}
                              className="input-text-pw password-input required"
                              id=""
                              type="password"
                              value={password2}
                              name="password2"
                              placeholder="Confirm Password"
                            />
                          </div>
                        </div>

                        <div className="form-row form-row-button">
                          <button
                            type="submit"
                            onClick={handleSubmit}
                            className="btn"
                            value="Log-In"
                            name="dwfrm_login_login"
                          >
                            Create Account
                          </button>
                        </div>
                        <input
                          type="hidden"
                          name="password2"
                          defaultValue={1140970756}
                        />
                      </fieldset>
                    </form>
                  </div>
                </div>
                <div className="line-separator mobile-only" />
              </div>

              {/* login ends */}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Signup;
