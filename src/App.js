import React, { useContext } from "react";
//importing react-router for navigation
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// importing styles here
import "./css/App.css";
import "./css/v1595552959579/css/style.css";
import "./css/v1595552959579/css/normalize.css";
// import "./css/v1595552959579/css/Kelly_Wearstler_._Com.css";
import "./css/v1595552959579/css/mobile-homepage.css";

import "./css/v1595552959579/images/favicon.ico";
import "./css/v1595552959579/fonts/Canela/1804-YSCJOE.css";
import "./css/v1595552959579/fonts/FuturaBaskerville/FuturaBaskerville.css";
import "./css/v1595552959579/css/style-responsive.css";
// import "./css/v1595552959579/css/flexslider.css"
import "./css/v1595552959579/lib/jquery/ui/jquery.ui.all.css";
import "./css/v1595552959579/lib/jquery/slick/slick.css";
import "./css/v1595552959579/lib/jquery/swiper/css/swiper.min.css";
import "./css/v1595552959579/lib/jquery/flyout/jquery.flyout.css";
// slider ka css

import Navmain from "./sections/navmain";

// importing the views
import Home from "./views/home";
import Interiors from "./views/interiors";
import Thestudio from "./views/thestudio";
import Thestore from "./views/thestore";
import Vcafe from "./views/vcafe";
import About from "./views/about";
import Productsgallery from "./views/productsgallery";
import Productdetail from "./views/productdetail";
import Projectdetail from "./views/projectdetail";
import Cart from "./views/cart";
import Contactus from "./views/contactus";
import Payfort from "./views/payfort"

import Ourphilosophy from "./views/ourphilosophy";
import Welnessroom from "./views/welnessroom";

import Underconstruction from "./views/underconstruction";
import Login from "./views/login";
import Signup from "./views/signup";
import Checkout from "./views/checkout";
import Sales from "./views/sales.js"

// importing subpages
import Residential from "./views/residential";
import Commercial from "./views/commercial";

import Viewslider from "./components/microcomponents/viewslider";

// importing contexts here
import { CartProvider } from "./contexts/cartcontext";
import { LoginProvider } from "./contexts/logincontext";
import { CatProvider } from "./contexts/catcontext";
import "react-toastify/dist/ReactToastify.css";
import "./css/bootstrap.css";

import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="App">
      <CartProvider>
        <LoginProvider>
          <CatProvider>
            <Router>
              <Route path={"/"} component={Navmain} />
              <ToastContainer />
              <Switch>
                <Route path={"/"} exact component={Home} />
                <Route path={"/interiors"} exact component={Interiors} />
                {/* interiors pages starts here */}
                <Route path={"/residential"} exact component={Residential} />
                <Route path={"/commercial"} exact component={Commercial} />

                <Route path={"/projectdetail/:id"} component={Projectdetail} />

                {/* interior pages ends here */}
                <Route path={"/thestudio"} exact component={Thestudio} />
                <Route path={"/thestore"} exact component={Thestore} />
                <Route path={"/about"} exact component={About} />

                <Route
                  path={"/ourphilosophy"}
                  exact
                  component={Ourphilosophy}
                />
                <Route path={"/vcafe"} exact component={Vcafe} />
                <Route path={"/welnessroom"} exact component={Welnessroom} />

                <Route
                  path={"/productsgallery/:main"}
                  exact
                  component={Productsgallery}
                />
                <Route
                  path={"/productsgallery/:main/:sub"}
                  exact
                  component={Productsgallery}
                />
                <Route
                  path={"/productsgallery/:main/:sub/:micro"}
                  exact
                  component={Productsgallery}
                />

                <Route
                  path={"/productdetail/:id"}
                  exact
                  component={Productdetail}
                />
                <Route
                  path={"/underdevelopment"}
                  exact
                  component={Underconstruction}
                />
                <Route path={"/cart"} exact component={Cart} />

                <Route path={"/login"} exact component={Login} />
                <Route path={"/signup"} exact component={Signup} />
                <Route path={"/checkout"} exact component={Checkout} />
                <Route path={"/viewslider"} exact component={Viewslider} />
                <Route path={"/contact"} exact component={Contactus} />
                <Route path={"/payfort"} exact component={Payfort} />
                <Route path={"/sales"} exact component={Sales} />
              </Switch>
            </Router>
          </CatProvider>
        </LoginProvider>
      </CartProvider>
    </div>
  );
}

export default App;
