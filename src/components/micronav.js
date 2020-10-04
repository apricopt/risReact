import React from "react";
import { NavLink } from "react-router-dom";

function MicroNav(props) {
    const subID = props.subcategory.id;
  return (
    <div
      className="refinement Home category-refinement productgallerynav"
      style={{ marginBottom: 20 }}
    >
      <ul id="category-level-1">
        {props.subcategory.microcategories.map((item) => (
          <li>
            <NavLink
              to={`/productsgallery/${props.maincategory}/${subID}/${item.id}`}
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

export default MicroNav;
