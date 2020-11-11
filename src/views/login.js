import React, { useState, useContext } from "react";

import { NavLink, Redirect } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

import { LoginContext } from "../contexts/logincontext";

const axios = require("axios");

function Login() {
  const [login, setLogin] = useContext(LoginContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);

  function handleChange(e) {
    switch (e.target.name) {
      case "email":
        setEmail(e.target.value);
        break;
      case "password":
        setPassword(e.target.value);
        break;
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("ready to submit bawa g");

    axios({
      method: "post",
      url: "https://node.ris.co/customer/login",
      data: {
        identifier: email,
        password: password,
      },
    })
      .then((response) => {
        console.log(response);
        if (response.data == "failed") {
          toast.error(`One of the info provided was incorrect`);
        } else {
          localStorage.setItem(
            "logged",
            JSON.stringify({
              status: true,
              user_id: response.data[0].id,
              firstName: response.data[0].name,
            })
          );

          setLogin({
            status: true,
            user_id: response.data[0].id,
            firstName: response.data[0].name,
            favitems: response.data[0].x_studio_favouritesmany
          });

          toast(`Welcome ${response.data[0].name} `);
          setRedirect(true);
        }
      })
      .catch((err) => {
        console.log(err.response);
        toast.error(err.response.data.message[0].messages[0].message);
      });

    // function bracket is k neechay hen.
  }

  if (redirect || login.status) {
    return <Redirect to={"/"} />;
  }

  return (
    <div id="wrapper" className="pt_cart">
      <div id="main" role="main" className="primary-focus clearfix">
        <div id="primary" className="primary-content">
          <div class="login-content">
            <div style={{ display: "flex", justifyContent: "space-around" }}>
              {/* new customer starts */}

              <div class="login-box">
                <h2 class="section-header">New Customers ?</h2>
                <div class="login-create-account">
                  <p>
                    <NavLink to={"/signup"}>
                      <button
                        value="Register An Account"
                        name="dwfrm_login_register"
                      >
                        Register An Account
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
                  <h2 className="section-header">
                    Please Login
                    <div className="dialog-required">
                      {" "}
                      <span className="required-indicator">
                        • <em>required</em>
                      </span>
                    </div>
                  </h2>
                  <div className="login-box-content returning-customers clearfix">
                    <p>
                      If you are a registered user, please enter your email and
                      password.
                    </p>
                    <form className="clearfix" id="dwfrm_login">
                      <fieldset>
                        <div
                          className="form-row   required "
                          data-required-text="Please enter your email address"
                        >
                          <label htmlFor="dwfrm_login_username_d0vznwthebci">
                            <span className="required-indicator">•</span>
                            <span>Email Address</span>
                          </label>
                          <input
                            className="input-text email-input required"
                            id=""
                            type="text"
                            name="email"
                            onChange={handleChange}
                            value={email}
                            placeholder="Email Address"
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
                            className="input-text-pw password-input required"
                            id="dwfrm_login_password"
                            type="password"
                            name="password"
                            onChange={handleChange}
                            value={password}
                            defaultValue
                            maxLength={2147483647}
                            placeholder="Password"
                          />
                        </div>
                        <div className="form-row  label-inline  ">
                          <label htmlFor="dwfrm_login_rememberme">
                            Remember Me
                          </label>
                          <input
                            className="input-checkbox"
                            type="checkbox"
                            name="dwfrm_login_rememberme"
                            id="dwfrm_login_rememberme"
                            defaultValue="true"
                          />
                        </div>
                        <div className="form-row form-row-button">
                          <button
                            onClick={handleSubmit}
                            type="submit"
                            className="btn"
                            value="Log-In"
                            name=""
                          >
                            Log-In
                          </button>
                          {/* <a id="password-reset" href="on/demandware.store/Sites-KellyWearstler-Site/default/Account-PasswordResetDialog.html" data-dlg-options="{&quot;width&quot;:700,&quot;height&quot;:250,&quot;dialogClass&quot;:&quot;password-reset&quot;}">
                                                        Forgot Password?
                  </a> */}
                        </div>
                        <input
                          type="hidden"
                          name="dwfrm_login_securekey"
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
    </div>
  );
}

export default Login;
