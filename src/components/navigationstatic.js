import React from "react";

import { NavLink } from 'react-router-dom'




import logo from '../images2/HERO/RIS LOGO MAIN.jpg'



function Navigation(props) {
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
        <NavLink exact to={"/"} >
            <img
            src={logo}
              alt="RIS"
               style={{width:120 , height: "auto"}}
            />
            </NavLink>
          <div id="account-menu" className="account-menu">
            <a title="Log-In" href="/underdevelopment">
              Account
            </a>
          </div>
        </div>
        <div className="primary-logo2 mobile-only">
          <a href="/underdevelopment">
            <img
              src={logo}
              alt="RIS"
              width="75%"
              height="75%"
            />
          </a>
        </div>

        {/*  utility user menu */}
        <div className="nav-toggle mobile-only" onClick={props.openNav}>
          <i className="fa fa-bars" >
          
          </i>
        </div>

        <div className="mobile-header-search-container mobile-only">
          <div className="search-toggle">
            <i className="fa fa-search" />
          </div>
          <div className="mini-cart">
            {/* Report any requested source code */}
            {/* Report the active source code */}
            <span className="mobile-only">
              <a href="/underdevelopment" title="View Cart" className="mini-cart-btn" />
            </span>
            <span className="hide-mobile">
              <NavLink to={'/cart'} exact >
                Cart
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
                    <li>
            <NavLink
                exact
                to={"/thecafe"}
                activeClassName="active"
                className="title"
              >
                        <font
                          style={{ textTransform: "lowercase" }}
                          face="FuturaPT-book"
                        >
                          the
                        </font>{" "}
                        <font face="FuturaPT-Bold">Cafe</font>
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




            <li className="   cgid-new">
            <NavLink
                exact
                to={"/productsgallery/furnitures"}
                activeClassName="active"
                className="level-1"
              >
                Furnitures
                </NavLink>
              <div className="level-2 ">
                <div className="menu-wrapper">
                  <ul className="level-2">
                    <li className="first">
                      <NavLink 
                        to={"/productsgallery/furnitures/newarrivals"}
                        className="title"
                        >New Arrivals</NavLink>
                      
                  
                    </li>
                    <li>
                    <NavLink 
                        to={"/productsgallery/furnitures/seatings"}
                        className="title"
                        >Seatings</NavLink>
                    </li>
                    <li>
                    <NavLink 
                        to={"/productsgallery/furnitures/tables"}
                        className="title"
                        >Tables</NavLink>
                    </li>
                    <li>
                    <NavLink 
                        to={"/productsgallery/furnitures/cabinetsandchests"}
                        className="title"
                        >Cabinets &amp; Chests</NavLink>
                    </li>
                    <li className="">
                    <NavLink 
                        to={"/productsgallery/furnitures/beds"}
                        className="title"
                        >Beds</NavLink>
                    </li>
                    <li className="">
                    <NavLink 
                        to={"/productsgallery/furnitures/screenandcards"}
                        className="title"
                        >Screen &amp; Cards</NavLink>
                    </li>
                    <li className="last">
                    <NavLink 
                        to={"/productsgallery/furnitures"}
                        className="title"
                        >View all</NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </li>




            <li className=" ">
            <NavLink
                exact
                to={"/productsgallery"}
                activeClassName="active"
                className="level-1"
              >
              
                Lightnings
                </NavLink>
              <div className="level-2 ">
                <div className="menu-wrapper">
                  <ul className="level-2">
                    <li className="first">
                      <a
                        href="/underdevelopment"
                        title="Furniture"
                        className="title"
                      >New Arrivals</a>
                    </li>
                    <li>
                      <a
                        href="/underdevelopment"
                        title="Ceiling Lights"
                        className="title"
                      >Ceiling lamps</a>
                    </li>
                    <li>
                      <a
                        href="/underdevelopment"
                        title="Wall Lights"
                        className="title"
                      >Wall lamps</a>
                    </li>
                    <li>
                      <a
                        href="/underdevelopment"
                        title="Floor Lamps"
                        className="title"
                      >
                        Floor Lamps
                      </a>
                    </li>
                    <li className="last">
                      <a href="/underdevelopment" title="Rugs" className="title">Table Lamps</a>
                    </li>
                    <li className="last">
                      <a href="/underdevelopment" title="Rugs" className="title">View All</a>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li className="   cgid-furniture">
            <NavLink
                exact
                to={"/productsgallery"}
                activeClassName="active"
                className="level-1"
              >
              Decor &amp; Gifts
           </NavLink> 
              <div className="level-2 ">
                <div className="menu-wrapper">
                  <ul className="level-2">
                    <li className="first">
                      <a href="/underdevelopment" title="seating" className="title">New Arrivals</a>
                    </li>
                    <li>
                      <a
                        href="/underdevelopment"
                        title="ottomans, benches & stools"
                        className="title"
                      >Candles &amp; Scents</a>
                    </li>
                    <li>
                      <a href="/underdevelopment" title="tables" className="title">Ashtrays</a>
                    </li>
                    <li>
                      <a title="Storage" href="/underdevelopment">Boxes</a>
                    </li>
                    <li>
                      <a title="Sofas" href="/underdevelopment">Desk Accessories</a>
                    </li>
                    <li>
                      <a href="/underdevelopment" title="mirrors" className="title">frames</a>
                    </li>
                    <li>
                      <a title="Limited Edition" href="/underdevelopment">games</a>
                    </li>
                    <li>
                      <a href="/underdevelopment" title="beds" className="title">Bookends</a>
                    </li>
                    <li>
                      <a title="outdoor furniture" href="/underdevelopment">decorative plates</a>
                    </li>
                    <li>
                      <a title="outdoor furniture" href="/underdevelopment">vases</a>
                    </li>
                    <li>
                      <a title="outdoor furniture" href="/underdevelopment">Bath accessories</a>
                    </li>
                    <li>
                      <a title="outdoor furniture" href="/underdevelopment">waste baskets</a>
                    </li>
                    <li>
                      <a title="outdoor furniture" href="/underdevelopment">plants</a>
                    </li>
                    <li className="last viewAll">
                      <a
                        href="/underdevelopment"
                        title="view all"
                        className="title"
                      >
                        view all
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li className="   cgid-lighting">
            <NavLink
                exact
                to={"/productsgallery"}
                activeClassName="active"
                className="level-1"
              >
                Table TOps
                </NavLink>
              <div className="level-2 ">
                <div className="menu-wrapper">
                  <ul className="level-2">
                    <li className="first">
                      <a
                        href="/underdevelopment"
                        title="New Arrivalss"
                        className="title"
                      >
                        New Arrivals
                      </a>
                    </li>
                    <li>
                      <a
                        href="/underdevelopment"
                        title="Ceiling"
                        className="title"
                      >dinnerware</a>
                    </li>
                    <li>
                      <a href="/underdevelopment" title="Wall" className="title">drinkwares</a>
                    </li>
                    <li>
                      <a
                        href="/underdevelopment"
                        title="Floor"
                        className="title"
                      >flatwares</a>
                    </li>
                    <li>
                      <a
                        href="/underdevelopment"
                        title="Table"
                        className="title"
                      >barwares</a>
                    </li>
                    <li>
                      <a title="Outdoor Lighting" href="/underdevelopment">tablewares</a>
                    </li>
                    <li className="last viewAll">
                      <a
                        href="/underdevelopment"
                        title="View All"
                        className="title"
                      >
                        View All
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li className="   cgid-home-decor">
            <NavLink
                exact
                to={"/productsgallery"}
                activeClassName="active"
                className="level-1"
              >
                Wall Decors
                </NavLink>
              <div className="level-2 ">
                <div className="menu-wrapper">
                  <ul className="level-2">
                    <li className="first">
                      <a
                        href="/underdevelopment"
                        title="sculpture"
                        className="title"
                      >New Arrivals</a>
                    </li>
                    <li>
                      <a title="Art" href="/underdevelopment">
                        Art
                      </a>
                    </li>
                    <li>
                      <a title="Trays" href="/underdevelopment">Mirrors</a>
                    </li>
                    <li>
                      <a href="/underdevelopment" title="Vases" className="title">wall clocks</a>
                    </li>
                    <li className="last">
                      <a title="Boxes" href="/underdevelopment">View all</a>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li className="   cgid-fabrics-1-1">
            <NavLink
                exact
                to={"/productsgallery"}
                activeClassName="active"
                className="level-1"
              >
              Textiles
              </NavLink>
              <div className="level-2 ">
                <div className="menu-wrapper">
                  <ul className="level-2">
                    <li className="first">
                      <a title="Wallpaper" href="/underdevelopment">New Arrivals</a>
                    </li>
                    <li>
                      <a href="/underdevelopment" title="Textures" className="title">Cushions</a>
                    </li>
                    <li>
                      <a title="Fabric" href="/underdevelopment">Rugs</a>
                    </li>
                    <li>
                      <a
                        title="Outdoor"
                        href="/underdevelopment"
                      >throws</a>
                    </li>
                    <li>
                      <a
                        href="/underdevelopment"
                        title="Leather & Hides"
                        className="title"
                      >chaircovers</a>
                    </li>
                    <li className="last viewAll">
                      <a title="View All" href="/underdevelopment">
                        View All
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li className="   cgid-fabrics-1-1">
            <NavLink
                exact
                to={"/productsgallery"}
                activeClassName="active"
                className="level-1"
              >
              Stationaries
              </NavLink>
              <div className="level-2 ">
                <div className="menu-wrapper">
                  <ul className="level-2">
                    <li className="first">
                      <a title="Wallpaper" href="/underdevelopment">New Arrivals</a>
                    </li>
                    <li>
                      <a href="/underdevelopment" title="Textures" className="title">books</a>
                    </li>
                    <li>
                      <a title="Fabric" href="/underdevelopment">cards</a>
                    </li>
                    <li>
                      <a
                        title="Outdoor"
                        href="/underdevelopment"
                      >notebooks</a>
                    </li>
                    <li>
                      <a
                        href="/underdevelopment"
                        title="Leather & Hides"
                        className="title"
                      >tags</a>
                    </li>
                    <li>
                      <a
                        href="/underdevelopment"
                        title="Leather & Hides"
                        className="title"
                      >tissue boxs</a>
                    </li>
                    <li className="last viewAll">
                      <a title="View All" href="/underdevelopment">
                        View All
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li className="last">
            <NavLink
                exact
                to={"/productsgallery"}
                activeClassName="active"
                className="level-1"
              >
                Fabric &amp; Wallpapers
                </NavLink>
              <div className="level-2 ">
                <div className="menu-wrapper">
                  <ul className="level-2">
                    <li className="first">
                      <a title="Wallpaper" href="/underdevelopment">New Arrivals</a>
                    </li>
                    <li>
                      <a href="/underdevelopment" title="Textures" className="title">upolstry fabrics</a>
                    </li>
                    <li>
                      <a title="Fabric" href="/underdevelopment">curtains fabrics</a>
                    </li>
                    <li>
                      <a
                        title="Outdoor"
                        href="/underdevelopment"
                      >wallpapers</a>
                    </li>
                    <li>
                      <a
                        href="/underdevelopment"
                        title="Leather & Hides"
                        className="title"
                      >Fringes &amp; accessories</a>
                    </li>
                    <li className="last viewAll">
                      <a title="View All" href="/underdevelopment">
                        View All
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </li>

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
                    <a
                      href="/underdevelopment"
                      title="Contact Us"
                    >
                      Contact Us
                    </a>
                  </li>
                  <li className="last">
                    <a
                      href="/underdevelopment"
                      title="FLAGSHIP BOUTIQUE"
                    >
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
              <NavLink to={'/cart'} exact >
                  Cart
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
