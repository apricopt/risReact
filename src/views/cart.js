import React, { useState, useContext } from "react";
import { NavLink } from "react-router-dom";

import Footer from "../components/footer";
import Navmain from "../sections/navmain";

import Cartcard from "../components/microcomponents/cartcard";

import { CartContext } from "../contexts/cartcontext";
import { LoginContext } from "../contexts/logincontext";
import { toast } from "react-toastify";

function Cart() {
  const [cart, setCart] = useContext(CartContext);
  const [login, setLogin] = useContext(LoginContext);

  let datatorender;
  if (cart.length > 0) {
    datatorender = cart.map((item) => <Cartcard results={item} />);
  } else {
    datatorender = (
      <div className="cart-empty">Your Shopping Cart is Empty</div>
    );
  }

  return (
    <React.Fragment>
      <div id="wrapper" className="pt_cart">
        <div id="main" role="main" className="primary-focus clearfix">
          <div id="primary" className="primary-content">
            {true ? (
              <div className="shoppingcartcontainer">
                <h1 class="cart-header">Shopping Cart</h1>

                {/* account holder starts */}
                <div class="cart-account-holder">
                  <a href="">{login.firstName}</a>
                  <span class="logout">
                    <a
                      title="Logout"
                      onClick={() => {
                        toast(`Goodbye! ${login.firstName}`);
                        setLogin({});
                      }}
                    >
                      (Logout)
                    </a>
                  </span>
                </div>
                {/* account holder ends */}

                {/* form starts  */}

                <form name="dwfrm_cart" id="cart-items-form">
                  <fieldset>
                    <button
                      id="updatecart"
                      className="visually-hidden"
                      type="submit"
                      value="dwfrm_cart_updateCart"
                      name="dwfrm_cart_updateCart"
                    />
                    <table id="cart-table" className="item-list">
                      <thead>
                        <tr>
                          <th className="section-header" colSpan={2}>
                            Product
                          </th>
                          <th className="section-header">Quantity</th>
                          <th className="section-header">Price</th>
                          <th className="section-header header-total-price">
                            Total
                          </th>
                          <th className="section-header">Remove</th>
                        </tr>
                      </thead>
                      <tbody>
                        {/* cart card starts */}

                        {cart.length > 0 ? (
                          cart.map((item) => <Cartcard product={item} />)
                        ) : (
                          <h1
                            className="apnafont"
                            style={{ textAlign: "center" }}
                          >
                            {" "}
                            No Product{" "}
                          </h1>
                        )}

                        {/* cart card ends */}
                      </tbody>
                      <tfoot></tfoot>
                    </table>
                    <div className="cart-footer">
                      <div className="cart-order-totals">
                        <table className="order-totals-table">
                          <thead>
                            <tr>
                              <th className="order-totals-item">Item</th>
                              <th className="order-totals-value">Value</th>
                            </tr>
                          </thead>
                          <tbody>
                            {/* <tr className="order-subtotal">
                                                            <td>Subtotal</td>
                                                            <td>$3,039.00</td>
                                                        </tr>
                                                        <tr className="order-shipping">
                                                            <td>
                                                                Shipping
                     
                                                                <br /><span>(Ground)</span>
                                                            </td>
                                                            <td>
                                                                $15.00
                    </td>
                                                        </tr>
                                                        <tr className="blank"><td>&nbsp;</td></tr> */}
                            <tr className="order-total">
                              <td>Estimated Total</td>
                              <td>SR (working)</td>
                              <td>
                                <NavLink to={"/checkout"}>
                                  <button>Proceed to Checkout</button>
                                </NavLink>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      {/* <div className="cart-coupon-code">
                                                <label htmlFor="dwfrm_cart_couponCode">
                                                    Enter Coupon Code
              </label>
                                                <input type="text" name="dwfrm_cart_couponCode" id="dwfrm_cart_couponCode" />
                                                <button type="submit" value="dwfrm_cart_addCoupon" name="dwfrm_cart_addCoupon" id="add-coupon">
                                                    Apply
              </button>
                                            </div> */}
                    </div>
                  </fieldset>
                </form>

                {/* form ends */}
              </div>
            ) : (
              <h1 className="apnafont" style={{ textAlign: "center" }}>
                {" "}
                Please login to access the cart{" "}
              </h1>
            )}
          </div>

          <div id="secondary" className="nav"></div>
        </div>
      </div>

      <Footer />
    </React.Fragment>
  );
}

export default Cart;
