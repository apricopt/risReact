import React, { useContext, useState, useEffect } from "react";

import img1 from "../images2/product.png";

import Viewslider from "../components/microcomponents/viewslider";

import { CartContext } from "../contexts/cartcontext";
import { LoginContext } from "../contexts/logincontext";

import Producttile from "../components/microcomponents/producttile";
import Maylike from "../components/microcomponents/maylike";

import { toast } from "react-toastify";

import imgtemp from "../images/testimage2.png";

import Loader from "./loader";

function Productfinaldisplay(props) {
  const { results } = props;
  const data = results[0];

  const [cart, setCart] = useContext(CartContext);
  const [login, setLogin] = useContext(LoginContext);
  const [dimensionDetail, setDimensionDetail] = useState(false);
  const [shippingDetail, setShippingDetail] = useState(false);
  // you may also like starts
  const [loading, setLoading] = useState(true);
  const [maylike, setMaylike] = useState([]);
  const [error, setError] = useState("");

  // you may also like ends

  // controlling how much qunatity user select
  const [quantity, setQuantity] = useState(1);
  function handleChange(e) {
    switch (e.target.name) {
      case "quantity":
        setQuantity(e.target.value);
        break;
    }
  }
  //  qunatity controller ends

  function handleAddtoCart(e) {
    const product = { ...results, quantity: quantity };

    setCart(cart.concat(data));
    toast(`${data.display_name} has been added into cart!`);
  }

  // for items you may like
  // let component;

  // if (loading || items[0] == undefined) {
  //   return <></>
  // }

  // currency formatter
  function numberWithCommas(x) {
    x = x.toString();
    var pattern = /(-?\d+)(\d{3})/;
    while (pattern.test(x)) x = x.replace(pattern, "$1,$2");
    return x;
  }

  // you may like

  // this function will calculate how much quantity to display
  function getQuantity(value) {
    const toBeBought = value;
    let toBeBoughtRender;
    if (toBeBought == 0) {
      toBeBoughtRender = <option value={0}>Not Available</option>;

      return toBeBoughtRender;
    } else {
      let arr = [];
      for (let i = 1; i <= toBeBought; i++) {
        arr.push(i);
      }
      toBeBoughtRender = arr.map((item) => (
        <option value={item}>{item}</option>
      ));

      return toBeBoughtRender;
    }
  }

  if (!props.results) {
    return <Loader />;
  }

  const preImages = [
    data.image_1920,
    data.x_studio_image2,
    data.x_studio_image3,
    data.x_studio_image4,
    data.x_studio_image5,
  ];

  const images = preImages.filter((item) => typeof item !== "boolean");

  return (
    <div className="container-fluid">
      <div className=" row">
        <div className=" col-md-8 ">
          <div className="product-primary-image">
            <h2 className="visually-hidden">Primary image</h2>
            {/* <img
              itemProp="image"
              id="pdp-primary-image"
              className="primary-image productimgDisplay"
              src={`data:image/gif;base64,${data.image_1920}`}
            /> */}

            {/* <img itemProp="image" id="pdp-primary-image" className="primary-image productimgDisplay" src={imgtemp} /> */}

            <Viewslider
              id="pdp-primary-image"
              className="primary-image productimgDisplay"
              images={images}
            />
          </div>

          {/* <div className="product-primary-image" style={{ display: "flex", justifyContent: "space-between" }}>

            
            <img itemProp="image" id="pdp-primary-image " className="primary-image chotimage" src={imgtemp} />
            <img itemProp="image" id="pdp-primary-image " className="primary-image chotimage" src={imgtemp} />
            <img itemProp="image" id="pdp-primary-image" className="primary-image chotimage" src={imgtemp} />
            <img itemProp="image" id="pdp-primary-image" className="primary-image chotimage" src={imgtemp} />
          </div> */}
        </div>

        <span
          id="spnPinterest"
          className="spnPinterest"
          onmouseover="document.getElementById('spnPinterest').style.display='block'"
        ></span>

        <div className=" col-md-4">
          <div className="product-detail-inner">
            <div className="product-detail-subinner">
              <h1 className="product-name apnafont" itemProp="name">
                {data.display_name}
              </h1>
              <div id="product-content">
                <h2 className="visually-hidden">Details</h2>
                <span className="visually-hidden" itemProp="url"></span>
                <div className="product-material"></div>
                <div className="product-price">
                  <span className="price-sales">
                    SR {numberWithCommas(data.list_price)}
                  </span>
                </div>
                <div className="product-add-to-cart">
                  <div
                    className="pdp-availability-block"
                    style={{ display: "none" }}
                  >
                    <div className="availability">
                      <span className="label">Availability:&nbsp;</span>
                      <span className="value">
                        <div className="availability-msg"></div>
                      </span>
                      <div className="availability-results online-stock" />
                    </div>
                  </div>

                  <legend className="visually-hidden">
                    Add to cart options
                  </legend>
                  <div className="product-variations" data-current="{}">
                    <div className="swatch-thumb">
                      <b>
                        <span id="swatch-thumb-title" />
                      </b>
                    </div>
                    <h2 className="visually-hidden">Variations</h2>
                    <span>
                      <span className="attribute ">
                        <span className="label label-bold">
                          Color : {results.color}
                        </span>
                        <div className="value">
                          <span
                            className="selected-value otheroptions  sub-label-val"
                            title
                          />
                          <span className="selected-value customoptdesc" />
                        </div>
                      </span>
                    </span>
                  </div>
                  <div
                    className="availability-block"
                    style={{ display: "none" }}
                  >
                    <div className="availability">
                      <span className="label">Availability:&nbsp;</span>
                      <span className="value">
                        <div className="availability-msg">
                          <p className="preorder-msg">Pre-Order</p>
                        </div>
                      </span>
                      <div className="availability-results online-stock" />
                    </div>
                  </div>
                  <input type="hidden" name="uuid" id="uuid" defaultValue />
                  <input
                    type="hidden"
                    name="cartAction"
                    id="cartAction"
                    defaultValue="update"
                  />
                  <input
                    type="hidden"
                    name="pid"
                    id="pid"
                    defaultValue="FTA20042"
                  />
                  <div className="quantity">
                    <label htmlFor="Quantity">Quantity</label>
                    <select
                      name="quantity"
                      id="Quantity"
                      value={quantity}
                      onChange={handleChange}
                      data-available={0}
                      className
                    >
                      {/* quantity */}
                      {/* <option value={0}>Not Available</option> */}
                      {getQuantity(data.free_qty)}
                    </select>
                    {}

                    <button
                      id="add-to-cart"
                      type="button"
                      title="Select color"
                      value="Select color"
                      className="add-to-cart apnafont"
                      onClick={handleAddtoCart}
                    >
                      Add to Cart
                    </button>
                  </div>

                  {/* sharing butotns starts */}

                  <h2 style={{ paddingTop: 10 }}>
                    SHARE: &nbsp;
                    {/* 
                  <span>
                      <a href="" target="_blank">
                        <span className="fa fa-facebook"></span>
                      </a>
                    </span>
                    
                    <a data-pin-do="buttonPin" data-pin-count="above" data-pin-tall="true" href="https://www.pinterest.com/pin/create/button/?url=https%3A%2F%2Fwww.flickr.com%2Fphotos%2Fkentbrew%2F6851755809%2F&media=https%3A%2F%2Ffarm8.staticflickr.com%2F7027%2F6851755809_df5b2051c9_z.jpg&description=Next%20stop%3A%20Pinterest"></a>


                    <a data-pin-do="buttonBookmark" data-pin-tall="true" href="https://www.pinterest.com/pin/create/button/"></a>
                    
                    
                    */}
                    {/* <span>
                      <a
                        target="_blank"
                        href={`//www.pinterest.com/pin/create/button/?url=${`https://strapi.ris.co${results.image.url}`}`}
                        class="pin-it-button"
                        count-layout="none"
                      >
                        <img
                          src="//assets.pinterest.com/images/pidgets/pin_it_button.png"
                          alt="Pin it"
                        />
                      </a>
                    </span> */}
                  </h2>

                  {/* sharing buttons ends */}

                  <a
                    className="add-to-wishlist bordered-button"
                    href="../../on/demandware.store/Sites-KellyWearstler-Site/default/Cart-AddToWishlista5b2.html?pid=FTA20042"
                    title="Add to Wishlist"
                  >
                    Add to Wishlist
                  </a>
                </div>
                {/*  end details block */}
                <div className="technical-information">
                  <div className="technical-information-title">
                    Technical information
                  </div>
                  <ul className="js-pdp-popups">
                    <li className="js-pdp-popup-item">
                      <a
                        className="a-js-dimension-popup"
                        onClick={() => setDimensionDetail(!dimensionDetail)}
                      >
                        Dimensions
                      </a>
                    </li>
                    <li className="js-pdp-popup-item">
                      <a
                        className="a-js-shipping-popup"
                        onClick={() => setShippingDetail(!shippingDetail)}
                      >
                        Shipping
                      </a>
                    </li>
                  </ul>
                </div>
                {dimensionDetail ? (
                  <div className="js-dimension-popup dimension-popup desktop-only">
                    <span
                      className="close"
                      onClick={() => setDimensionDetail(false)}
                    >
                      X
                    </span>
                    <div className="dimension-popup-inner">
                      <div className="dimension-popup-subinner">
                        {data.x_studio_dimension ? (
                          data.x_studio_dimension
                        ) : (
                          <span>No information</span>
                        )}
                      </div>
                    </div>
                  </div>
                ) : (
                  <> </>
                )}
                {shippingDetail ? (
                  <div className="js-shipping-popup dimension-popup desktop-only">
                    <span
                      className="close"
                      onClick={() => setShippingDetail(false)}
                    >
                      X
                    </span>
                    <div className="dimension-popup-inner">
                      <div className="dimension-popup-subinner">
                        <span>We are currently working on this feature.</span>
                      </div>
                    </div>
                  </div>
                ) : (
                  <> </>
                )}
                <div className="dimension-popup-overlay">&nbsp;</div>
                <div className="short-description">
                  <div className="text toggle-content apnafont">
                    {data.description_sale}
                  </div>
                </div>

                <div className="short-description">
                  <div
                    className="text toggle-content apnafont"
                    style={{ fontWeight: 700, fontSize: 12 }}
                  >
                    For additional information, Please contact our sales agent
                    via live chat or simply drop an email at reachus@ris.co
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* you may also like starts */}
      <Maylike cat={data.categ_id} />
      {/* <div style={{ paddingTop: 10 }}>{maylikeitems}</div> */}

      {/* you also like ends */}
    </div>
  );
}

export default Productfinaldisplay;
