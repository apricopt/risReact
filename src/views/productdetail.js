import React, { useContext, useState } from "react";

// importing sections here
import Footer from "../components/footer";
import Navmain from "../sections/navmain";

import { NavLink } from "react-router-dom";

import img1 from "../images2/product.png";

import Productfinaldisplay from "../components/productfinaldisplay";
import { CenterSlider } from "../components/slider";

// importing the useDatafetching hook
import useDataFetching from "../containers/useDataFetching";
import Loader from "../components/loader";

// #TODO okay so the

import { CartContext } from "../contexts/cartcontext";

function ProductDetail(props) {
  const [cart, setCart] = useContext(CartContext);

  // responsible for data fetching starts
  const { loading, results, error } = useDataFetching(
    `https://node.ris.co/inventory/product/${props.match.params.id}`
  );

  if (loading || results[0] == undefined) {
    return <Loader />;
  }
  // datafetching ends

  return (
    <React.Fragment>
      <div id="wrapper" class="pt_product-details">
        <div id="main" role="main" class="full-width clearfix">
          {/* ol starts */}
          {/* to display breadcrumbs */}
          {/* <ol className="breadcrumb hide-mobile">
            <li>
              <NavLink to={`/productsgallery/${results.main_catergory.id}`}>
                {results.main_catergory.CategoryName}
              </NavLink>
            </li>
            <li>
              <NavLink
                to={`/productsgallery/${results.main_catergory.id}/${results.sub_category.id}`}
              >
                {results.sub_category.SubcategoryName}
              </NavLink>
            </li>
          </ol> */}
          {/* ol ends */}
          <span id="product-nav-container" className="hide-mobile"></span>{" "}
          {/* /product-nav-container */}
          <div id="primary" class="primary-content">
            <div id="pdpMain" class="pdp-main">
              <Productfinaldisplay results={results} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default ProductDetail;
