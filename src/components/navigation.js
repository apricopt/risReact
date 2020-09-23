import React, { useState, useEffect, useRef, useContext } from "react";

import { NavLink } from "react-router-dom";

import { LoginContext } from "../contexts/logincontext";

import { CatContext } from "../contexts/catcontext";

import useDataFetching from "../containers/useDataFetching";
import loader from "../images2/HERO/loader.gif";
import { toast } from "react-toastify";

function Navigation(props) {
  const [login, setLogin] = useContext(LoginContext);
  const [cat, setCat] = useContext(CatContext);

  const dataAlready = useRef(false);
  const [loading, setLoading] = useState(true);
  const [results, setResults] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetch("https://node.ris.co/inventory/categories");
        const json = await data.json();

        if (json) {
          setLoading(false);
          setResults(json);
          setCat(json);
        }
      } catch (error) {
        setLoading(false);
        setError(error.message);
      }

      setLoading(false);
    }

    fetchData();
  }, []);

  let navsToRender;
  if (loading || results[0] == undefined) {
    return <> </>;
  } else {
    navsToRender = results.map((item) => (
      <li className="   cgid-new">
        <NavLink
          exact
          to={`/productsgallery/${item.id}`}
          activeClassName="active"
          className="level-1"
        >
          {item.name}
        </NavLink>

        <div className="level-2">
          <div className="menu-wrapper">
            <ul className="level-2">
              <li className="first">
                <NavLink
                  to={`/productsgallery/${item.id}/newarrivals`}
                  className="title"
                >
                  New Arrivals
                </NavLink>
              </li>

              {item.subcategories.map((subitem) => (
                <li className="microDada">
                  <NavLink
                    to={`/productsgallery/${item.id}/${subitem.id}`}
                    className="title microDad "
                  >
                    {subitem.name}
                  </NavLink>

                  {/* micro category comes here */}

                  {subitem.microcategories !== null ? (
                    <ul className="level-micro">
                      {" "}
                      <li>
                        {subitem.microcategories.map((microitem) => (
                          <NavLink
                            to={`/productsgallery/${item.id}/${subitem.id}/${microitem.id}`}
                            className="title"
                            style={{ color: "green !important" }}
                          >
                            {microitem.name}
                          </NavLink>
                        ))}
                      </li>{" "}
                    </ul>
                  ) : (
                    <div></div>
                  )}

                  {/* microcategory ends here */}
                </li>
              ))}

              <li className="">
                <NavLink to={`/productsgallery/${item.id}`} className="title">
                  <span style={{ color: "red" }}>on Sale</span>
                </NavLink>
              </li>

              <li className="last">
                <NavLink to={`/productsgallery/${item.id}`} className="title">
                  View all
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </li>
    ));
  }

  return (
    <React.Fragment>
      <header id="header-container" className="clearfix">
        <div className="header-banner"></div>
        <div
          className="menu-utility-user1"
          style={{ float: "left", fontSize: "14px" }}
        ></div>
        {/*  branding logo */}
        <div className="primary-logo2 desktop-only">
          <NavLink exact to={"/"}>
            <img
              src={props.logo}
              alt="RIS"
              style={{ width: 130, height: "auto" }}
            />
          </NavLink>

          <div id="account-menu" className="account-menu">
            {login.status || login == null ? (
              <a
                onClick={() => {
                  toast(`Goodbye!! ${login.firstName}`);
                  setLogin({});
                }}
                style={{ cursor: "pointer", lineHeight: "27px" }}
              >
                Log out
              </a>
            ) : (
              <NavLink exact to={"/login"} style={{ lineHeight: "27px" }}>
                Account
              </NavLink>
            )}
          </div>
        </div>
        <div className="primary-logo2 mobile-only">
          <a href="/underdevelopment">
            <img src={props.logo} alt="RIS" width="75%" height="75%" />
          </a>
        </div>

        {/*  utility user menu */}
        <div className="nav-toggle mobile-only" onClick={props.openNav}>
          <i className="fa fa-bars"></i>
        </div>

        {/* itno */}
        <div className="mobile-header-search-container mobile-only">
          <div className="search-toggle">
            <i className="fa fa-search" />
          </div>
          <div className="mini-cart">
            {/* Report any requested source code */}
            {/* Report the active source code */}
            <span className="mobile-only">
              <a
                href="/underdevelopment"
                title="View Cart"
                className="mini-cart-btn"
              />
            </span>
            <span className="hide-mobile">
              <NavLink to={"/cart"} exact>
                Cart {props.cart.length}
              </NavLink>
            </span>
          </div>
        </div>
        <div className="header-search hide-desktop hide-tablet">
          <form
            role="search"
            action="https://www.kellywearstler.com/search"
            method="get"
            name="simpleSearch"
          >
            <fieldset>
              <legend className="visually-hidden">Search Catalog</legend>
              <label className="visually-hidden" htmlFor="q">
                Search
              </label>
              <input type="text" id="q" name="q" defaultValue />
              <fieldset className="search-submit">
                <input type="submit" defaultValue />
              </fieldset>
            </fieldset>
          </form>
        </div>
        <div className="search-toggle-nonmob desktop-only">
          <i className="fa fa-search" />
          Search
        </div>
        <div className="header-search-expanded header-search-container desktop-only">
          <form
            role="search"
            action="https://www.kellywearstler.com/search"
            method="get"
            name="simpleSearch"
          >
            <fieldset>
              <legend className="visually-hidden">Search Catalog</legend>
              <label className="visually-hidden" htmlFor="q">
                Search
              </label>
              <input type="text" id="q" name="q" defaultValue />
              <fieldset className="search-submit">
                <input type="submit" defaultValue />
              </fieldset>
            </fieldset>
          </form>
        </div>
        {/* utno */}
      </header>

      {/* baaner ends */}

      <div id="navigation" role="navigation">
        <nav>
          {/*  category navigation */}
          <ul className="menu-category level-1 clearfix">
            <li className="first   cgid-interiors">
              <NavLink
                exact
                to={"/interiors"}
                activeClassName="active"
                className="level-1"
              >
                <font face="FuturaPT-Bold"> INTERIORS</font>
                <font
                  style={{ textTransform: "lowercase" }}
                  face="FuturaPT-Book"
                >
                  {" "}
                </font>{" "}
                <font face="FuturaPT-Bold"></font>
              </NavLink>
            </li>
            <li className="   cgid-kw_studio_page">
              <NavLink
                exact
                to={"/thestudio"}
                activeClassName="active"
                className="level-1"
              >
                <font
                  style={{ textTransform: "lowercase" }}
                  face="FuturaPT-book"
                >
                  the
                </font>{" "}
                <font face="FuturaPT-Bold">STUDIO</font>
              </NavLink>
              <div className="level-2 ">
                <div className="menu-wrapper">
                  <ul className="level-2">
                    <li className="first">
                      <NavLink
                        exact
                        to={"/thestudio"}
                        activeClassName="active"
                        className="title"
                      >
                        <font
                          style={{ textTransform: "lowercase" }}
                          face="FuturaPT-book"
                        >
                          the
                        </font>{" "}
                        <font face="FuturaPT-Bold">STUDIO</font>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        exact
                        to={"/thestore"}
                        activeClassName="active"
                        className="title"
                      >
                        <font
                          style={{ textTransform: "lowercase" }}
                          face="FuturaPT-book"
                        >
                          the
                        </font>{" "}
                        <font face="FuturaPT-Bold">store</font>
                      </NavLink>
                    </li>

                    <li className="last">
                      <NavLink
                        exact
                        to={"/about"}
                        activeClassName="active"
                        className="title"
                      >
                        <font
                          style={{ textTransform: "lowercase" }}
                          face="FuturaPT-book"
                        >
                          about
                        </font>{" "}
                        <font face="FuturaPT-Bold">Rawan</font>
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </li>

            {/* next navitem */}
            <li className="   cgid-kw_studio_page">
              <NavLink
                exact
                to={"/ourphilosophy"}
                activeClassName="active"
                className="level-1"
              >
                <font
                  style={{ textTransform: "lowercase" }}
                  face="FuturaPT-book"
                >
                  the
                </font>{" "}
                <font face="FuturaPT-Bold">philosophy</font>
              </NavLink>
              <div className="level-2 ">
                <div className="menu-wrapper">
                  <ul className="level-2">
                    <li className="first">
                      <NavLink
                        exact
                        to={"/ourphilosophy"}
                        activeClassName="active"
                        className="title"
                      >
                        <font
                          style={{ textTransform: "lowercase" }}
                          face="FuturaPT-book"
                        >
                          our
                        </font>{" "}
                        <font face="FuturaPT-Bold">philosophy</font>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        exact
                        to={"/vcafe"}
                        activeClassName="active"
                        className="title"
                      >
                        <font
                          style={{ textTransform: "lowercase" }}
                          face="FuturaPT-book"
                        >
                          V
                        </font>{" "}
                        <font face="FuturaPT-Bold">cafe</font>
                      </NavLink>
                    </li>

                    <li className="last">
                      <NavLink
                        exact
                        to={"/welnessroom"}
                        activeClassName="active"
                        className="title"
                      >
                        <font
                          style={{ textTransform: "lowercase" }}
                          face="FuturaPT-book"
                        >
                          Welness
                        </font>{" "}
                        <font face="FuturaPT-Bold">Room</font>
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </li>

            {navsToRender}

            {/* TODO starts here */}

            {/* TODO  dynamic navs ends here */}

            {/*  */}

            <li className="   cgid-kw_studio_page">
              <NavLink
                exact
                to={"/contact"}
                activeClassName="active"
                className="level-1"
              >
                <font face="FuturaPT-Bold">Contact Us</font>
              </NavLink>
            </li>
            {console.log(window.location.pathname)}

            <li className="mobile-nav-account-link mobile-only">
              <div className="account-link">
                <ul className="menu-utility-user">
                  <li>
                    <a
                      title="Log-In"
                      href="/underdevelopment"
                      className="user-login"
                    >
                      Log-In
                    </a>
                  </li>
                  <li>
                    <a
                      title="Register"
                      href="/underdevelopment"
                      className="user-register"
                    >
                      Register
                    </a>
                  </li>
                  <li>
                    <a
                      title="Gift Registry"
                      href="/underdevelopment"
                      className="user-register"
                    >
                      Gift Registry
                    </a>
                  </li>
                  <li>
                    <a href="/underdevelopment" title="Contact Us">
                      Contact Us
                    </a>
                  </li>
                  <li className="last">
                    <a href="/underdevelopment" title="FLAGSHIP BOUTIQUE">
                      FLAGSHIP BOUTIQUE
                    </a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>

          {/* nav normal */}

          <div className="header-search-container">
            <div id="mini-cart" className="mini-cart">
              {/* Report any requested source code */}
              {/* Report the active source code */}
              <span className="mobile-only">
                <a
                  href="/underdevelopment"
                  title="View Cart"
                  className="mini-cart-btn"
                />
              </span>
              <span className="hide-mobile">
                <NavLink to={"/cart"} exact>
                  Cart{" "}
                  {props.cart.length > 0 && login.status ? (
                    props.cart.length
                  ) : (
                    <> </>
                  )}
                </NavLink>
              </span>
            </div>
          </div>
        </nav>
      </div>
    </React.Fragment>
  );
}

export default Navigation;
