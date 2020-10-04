import React from "react";
import { NavLink } from "react-router-dom";

import useDataFetching from "../containers/useDataFetching";

function Productsgallerynav(props) {
  // const { loading, results, error } = useDataFetching(`https://strapi.ris.co/main-catergories/${props.maincategory}`);

  let dataToRender;
  let maincategoryprop;

  // if (props.maincategoryprop == undefined) {
  //   return <> nahi ayi bohsri ki </>;
  // }

  return (
    <div
      className="refinement Home category-refinement productgallerynav"
      style={{ marginBottom: 20 }}
    >
      <ul id="category-level-1">
        {props.maincategory.subcategories.map((item) => (
          <li>
            <NavLink
              to={`/productsgallery/${props.maincategory.id}/${item.id}`}
            >
              {" "}
              {item.name.toUpperCase()}
            </NavLink>
          </li>
        ))}
      </ul>
      {/* PRICE REFINEMENTS */}
    </div>
  );
}

export default Productsgallerynav;
