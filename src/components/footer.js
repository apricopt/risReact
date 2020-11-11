import React from "react";
import logo from "../images2/HERO/RIS LOGO MAIN.jpg";
// import {Navlink} from "react-router-dom";

function Footer() {
  return (
    <div id="footer" role="contentinfo" style={{ marginTop: 50 }}>
      <footer id="footer-inner">
        <div className="content-asset">
          {/* dwMarker="content" dwContentID="bcq0AiaaguR1caaadgSVwxmhLq" dwContentName="footer_Links" */}
          <br />
          <br />
          <ul
            className="links clearfix"
            style={{ marginBottom: "4% !important" }}
          >
            <li className="col drawer-trigger">
              <span className="title">Concierge</span>
              <ul>
                <li>
                  <a title="Returns & Exchanges" href="">
                    Returns &amp; Exchanges
                  </a>
                </li>
                <li>
                  <a title="Orders" href="">
                    Orders
                  </a>
                </li>
                <li>
                  <a title="Shipping" href="">
                    Shipping
                  </a>
                </li>
                <li>
                  <a title="Store Locator" href="">
                    Store Locator
                  </a>
                </li>
                <li>
                  <a title="Privacy Policy" href="">
                    Privacy policy
                  </a>
                </li>
              </ul>
            </li>
            <li className="col drawer-trigger">
              <span className="title">Company</span>
              <ul>
                <li>
                  <a title="Interiors & Architecture" href="">
                    Interiors
                  </a>
                </li>
                <li>
                  <a title="The Studio" href="">
                    The Studio
                  </a>
                </li>
                <li>
                  <a title="The Brand" href="">
                    The Store
                  </a>
                </li>
                <li>
                  <a title="Flagship Gallery" href="">
                    The Philosophy
                  </a>
                </li>
                <li>
                  <a title="Biography" href="">
                    About Rawan
                  </a>
                </li>
                <li>
                  <a title="Press" href="">
                    Press
                  </a>
                </li>
                <li>
                  <a title="Careers" href="">
                    Careers
                  </a>
                </li>
                {/* <li>
                  <Navlink to={"/contact"} >
                    Contact Us
                    </Navlink>
                </li> */}
              </ul>
            </li>
            <li className="col drawer-trigger">
              <span className="title">Collections</span>
              <ul>
                <li>
                  <a title="Furniture" href="">
                    Furniture
                  </a>
                </li>
                <li>
                  <a title="Lighting" href="">
                    Lighting
                  </a>
                </li>
                <li>
                  <a title="Decor" href="">
                    Decor &amp; Gifts
                  </a>
                </li>
                <li>
                  <a title="Decor" href="">
                    Table Top
                  </a>
                </li>
                <li>
                  <a title="Fabric" href="">
                    Wall Decor
                  </a>
                </li>
                <li>
                  <li>
                    <a title="Tile & Stone" href="">
                      Textiles
                    </a>
                  </li>
                  <a title="Rugs" href="">
                    Stationary
                  </a>
                </li>

                <li>
                  <a title="Tile & Stone" href="">
                    Fabrics &amp; Textiles
                  </a>
                </li>
              </ul>
            </li>
            <li className="col drawer-trigger long-li">
              <span className="title">My Account</span>
              <ul>
                <li>
                  <a title="My Account" href="">
                    Log-In
                  </a>
                </li>
                <li>
                  <a title="Register" href="">
                    Register
                  </a>
                </li>
                <li>
                  <a title="Check an Order" href="">
                    Order Status
                  </a>
                </li>
                <li>
                  <a title="Make An Appointment" href="">
                    Make An Appointment
                  </a>
                </li>
              </ul>
            </li>
            <div className="mobile-only moblinks">
              <ul>
                <li>
                  <a title="My Account" href="">
                    Log-In
                  </a>
                </li>
                <li>
                  <a title="Register" href="">
                    Register
                  </a>
                </li>
                <li>
                  <a title="Make An Appointment" href="">
                    Make An Appointment
                  </a>
                </li>
                <li>
                  <a title="Check an Order" href="">
                    Trade Program
                  </a>
                </li>
              </ul>
            </div>
            <div className="newsletter-caption">
              Receive our newsletter and discover our stories and collections.
            </div>
            <div className="newsletter-signup-container">
              <input
                type="text"
                placeholder="Email"
                id="newsletter_signup"
                className="newsInput"
              />
              <span className="emailBtn">
                <a href="" className="footer-email-signup-btn">
                  {" "}
                  Subscribe{" "}
                </a>
              </span>
              <br />
              <span id="errMesg" className="error" style={{ display: "none" }}>
                Invalid Email
              </span>
            </div>
          </ul>
          <style
            dangerouslySetInnerHTML={{
              __html:
                "\n    .long-li {margin-bottom:10px;}\n    .moblinks {text-align: center;}\n    .moblinks li {margin: 12px 0px;}\n    .moblinks li a {font-size: 16px !important;}\n    @media (max-width: 767px){\n        .newsletter-caption {text-align: center;margin-top:40px;font-size:10px;width:100%;color:#707070;font-family:FuturaPT-Book;}\n        .newsletter-signup-container {width: 100% !important; text-align: center; margin-top:10px !important;margin-bottom: 15px;}\n        .newsletter-signup-container input {width: 43% !important; font-family: FuturaPT-Book; font-size: 14px;}\n    }\n    @media (min-width: 768px){\n        .newsletter-caption {float:left;margin-top:35px;margin-left:4%;font-size:18px;width:50%;height:50px;display: table-cell; vertical-align: middle;color:#707070;font-family:FuturaPT-Medium;}\n        ul.level-1 a {font-family: sans-serif;}\n        div.level-2 .menu-wrapper a, div.level-2 {font-family: sans-serif;}\n        div.level-2 .menu-wrapper a, div.level-2 .menu-wrapper div.title  {font-family: sans-serif !important;font-weight:bold;}\n        .nav-featured-headline {font-family: sans-serif !important;font-weight:bold;}\n        div.level-3 ul.level-3 li a, div.level-3 .menu-wrapper div.title {font-weight: normal !important;}\n        .newsletter-signup-container input {font-family: FuturaPT-Medium; font-size: 14px;}\n        .col.signup .title{font-weight: bold;}\n        div#home-content { padding-bottom: 5px !important }\n    }\n",
            }}
          />
        </div>{" "}
        {/* End content-asset */}
        <div className="content-asset">
          {/* dwMarker="content" dwContentID="bcX2EiaaguMmYaaadgQpwxmhLq" dwContentName="footer_Copyright" */}
          <div
            className="ftcontent"
            style={{ display: "flex", justifyContent: "centre" }}
          >
            <p id="copyright">© 2020 RIS. All Rights Reserved</p>
            <div className="sociallinksection desktop">
              <span>
                <a
                  href="https://www.instagram.com/risinteriors/"
                  target="_blank"
                >
                  <span className="fa fa-instagram"></span>
                </a>
              </span>
              <span>
                <a href="https://www.facebook.com/RIS.Group/" target="_blank">
                  <span className="fa fa-facebook"></span>
                </a>
              </span>
              <span>
                <a
                  href="https://twitter.com/RIS_Interiors?s=09"
                  target="_blank"
                >
                  <span className="fa fa-twitter"></span>
                </a>
              </span>
              <span>
                <a
                  href="https://www.pinterest.com/risliving/boards"
                  target="_blank"
                >
                  <span className="fa fa-pinterest"></span>
                </a>
              </span>
              {/* <span><a href="" target="_blank"><img id="youtube-icon" src="https://www.kellywearstler.com/on/demandware.static/-/Sites-KellyWearstler-Library/default/v1595552959579/images/footer_social/footer-youtube.svg" alt="Visit YouTube" /></a></span> */}
            </div>
            <div
              className="sociallinksection mobile clearfix mobile-only"
              style={{ textAlign: "center !important", clear: "both" }}
            >
              <img alt="" src="" title="RIS" width={42} height={38} />
            </div>
          </div>
          <div
            className="desktop hide-mobile"
            style={{
              width: "100%",
              textAlign: "center",
              clear: "both",
              marginTop: "20px",
              marginBottom: "10px",
            }}
          >
            <img src={logo} style={{ height: 20 }} border={0} />
          </div>
          <style
            dangerouslySetInnerHTML={{
              __html:
                "\n    @media (max-width: 767px){\n        .ftcontent {width:100%; border: 0px !important; margin-top: 10px;}\n        p#copyright {text-align: center !important; font-family:FuturaPT-Book; font-size:11px; padding-left: 0px !important;}\n    }\n    @media (min-width: 768px){\n        p#copyright {float:left; font-family:FuturaPT-Book; font-size:10px;}\n        .ftcontent {width:100%; border-top:1px solid #a9a7a7 !important; border-bottom:1px solid #a9a7a7 !important; height: 35px;}\n        .sociallinksection span { padding: 6px; }\n        sociallinksection img {display: block; margin-left: auto; margin-right: auto; }\n        .sociallinksection.desktop{text-align: right;margin-right:30px;padding-top: 7px;}\n        .sociallinksection.mobile{display: none; text-align: center;}\n        #social-links menu, #social-links ol, #social-links ul {\n            padding: 0 0 0 0px;\n        }\n    }\n",
            }}
          />
        </div>{" "}
        {/* End content-asset */}
      </footer>
    </div>
  );
}

export default Footer;
