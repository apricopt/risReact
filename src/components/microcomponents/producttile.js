import React, { useState } from "react";

import { NavLink } from "react-router-dom";

import img1 from "../../images/testimage2.png";

export default function Producttile(props) {
  // currency formatter
  function format(x) {
    x = x.toString();
    var pattern = /(-?\d+)(\d{3})/;
    while (pattern.test(x)) x = x.replace(pattern, "$1,$2");
    return x;
  }

  const {
    id,
    productDiscount,
    image,
    productName,
    sellingPrice,
  } = props.product;

  let StatusDiscount;
  let renderDiscount;

  if (productDiscount == null) {
    StatusDiscount = false;
  } else if (
    productDiscount.Status ||
    productDiscount.subcategoryDiscounts.status
  ) {
    StatusDiscount = true;
  }

  const [discount, setDiscount] = useState(StatusDiscount);

  // if (discount && productDiscount !== null) {
  if (false) {
    if (productDiscount.Status && productDiscount.subcategoryDiscounts.status) {
      // mtlb agr dono lagay hwe hen to priority deni hai product level ko

      renderDiscount = (
        <div className="product-pricing">
          <span className="product-sales-price" title="Sale Price">
            SR{" "}
            <span style={{ textDecoration: "line-through" }}>
              {sellingPrice}
            </span>{" "}
            <span>
              {format(
                sellingPrice - (productDiscount.Percent / 100) * sellingPrice
              )}
            </span>{" "}
          </span>
        </div>
      );
    } else if (productDiscount.Status) {
      // agr sirf product pr laga hwa to product wala hi lagana hai na
      renderDiscount = (
        <div className="product-pricing">
          <span className="product-sales-price" title="Sale Price">
            SR{" "}
            <span style={{ textDecoration: "line-through" }}>
              {sellingPrice}
            </span>{" "}
            <span>
              {format(
                sellingPrice - (productDiscount.Percent / 100) * sellingPrice
              )}
            </span>{" "}
          </span>
        </div>
      );
    } else if (productDiscount.subcategoryDiscounts.status) {
      console.log("category wala on hai");
      renderDiscount = (
        <div className="product-pricing">
          <span className="product-sales-price" title="Sale Price">
            SR{" "}
            <span style={{ textDecoration: "line-through" }}>
              {sellingPrice}
            </span>{" "}
            <span>
              {format(
                sellingPrice -
                  (productDiscount.subcategoryDiscounts.Percent / 100) *
                    sellingPrice
              )}
            </span>{" "}
          </span>
        </div>
      );
    }
  } else {
    renderDiscount = (
      <div className="product-pricing">
        <span className="product-sales-price" title="Sale Price">
          {/* SR <span>{format(list_price)}</span>{" "} */}
          SR <span>4234</span>{" "}
        </span>
      </div>
    );
  }

  let img;
  // if (props.product.image.formats.small !== undefined) {
  //   img = (
  //     <img
  //       src={`https://strapi.ris.co${props.product.image.formats.small.url}`}
  //       alt={props.product.productName}
  //       title={props.product.productName}
  //       className="productImg"
  //     />
  //   );
  // } else {
  //   img = (
  //     <img
  //       src={`https://strapi.ris.co${props.product.image.url}`}
  //       alt={props.product.productName}
  //       title={props.product.productName}
  //       className="productImg"
  //     />
  //   );
  //   // console.log(img)
  // }

  return (
    <li className="grid-tile" data-colors-to-show="RAQZ">
      <div className="product-tile">
        <div className="product-image">
          <NavLink to={`/productdetail/${id}`} exact className="thumb-link">
            {img}
          </NavLink>
        </div>
        <div className="product-swatches">
          <div className="swatch-thumb">
            <img
              id="swatch-thumb-img"
              src="#"
              width="50px"
              height="50px"
              border={0}
              onerror="this.src=noSwatchImageUrl"
            />
            <br />
            <b>
              <span id="swatch-thumb-title" />
            </b>
          </div>
          {/* <ul className="swatch-list">  
              <li>
                <a href="javascript:void(0)" className="swatch flyout-swatch">
                  <img src="on/demandware.static/-/Sites-KellyWearstler-Library/default/v1595552959579.html" onerror="this.src=noSwatchImageUrl" data-thumb="{&quot;src&quot;:&quot;https://www.kellywearstler.com/on/demandware.static/-/Sites-KellyWearstler-Library/default/v1595552959579&quot;,&quot;alt&quot;:&quot;Custom Options&quot;,&quot;title&quot;:&quot;Custom Options&quot;}" />
                </a>
              </li>
             
            </ul> */}
        </div>
        <div className="product-name">
          <h2>
            <NavLink
              to={`/productdetail/${id}`}
              exact
              className="name-link productName"
              href="instockviewall/esfera-sofa/EJV1562-96daa9.html?start=0&cgid=instockviewall"
            >
              {props.product.display_name}
            </NavLink>
          </h2>
        </div>
        {renderDiscount}
        {/* i.e. for category pages and productlistings, is multiple */}
      </div>
      {/*  END: .product-tile */}
    </li>
  );
}

// test product tile here
export function ProducttileTest(props) {
  return (
    <li className="grid-tile" data-colors-to-show="RAQZ">
      <div className="product-tile">
        <div className="product-image">
          <NavLink to={`/productdetail/1`} exact className="thumb-link">
            <img src={img1} title="" className="productImg" />
          </NavLink>
        </div>
        <div className="product-swatches">
          <div className="swatch-thumb">
            <img
              id="swatch-thumb-img"
              src="#"
              width="50px"
              height="50px"
              border={0}
              onerror="this.src=noSwatchImageUrl"
            />
            <br />
            <b>
              <span id="swatch-thumb-title" />
            </b>
          </div>
        </div>
        <div className="product-name">
          <h2>
            <a
              className="name-link productName"
              href="instockviewall/esfera-sofa/EJV1562-96daa9.html?start=0&cgid=instockviewall"
            >
              Testing product
            </a>
          </h2>
        </div>
        <div className="product-pricing">
          <span className="product-sales-price" title="Sale Price">
            SR <span style={{ textDecoration: "line-through" }}>SR38929</span>{" "}
          </span>
        </div>
        {/* i.e. for category pages and productlistings, is multiple */}
      </div>
      {/*  END: .product-tile */}
    </li>
  );
}
