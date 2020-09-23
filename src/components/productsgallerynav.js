import React from 'react'
import {NavLink} from 'react-router-dom'



import useDataFetching from '../containers/useDataFetching'

function Productsgallerynav(props) {



  const { loading, results, error } = useDataFetching(`https://strapi.ris.co/main-catergories/${props.maincategory}`);

  let dataToRender ;
  let maincategoryprop;

  if (loading || results.sub_categories == undefined) {
     return  <> </>
  }




    return (
        <div className="refinement Home category-refinement productgallerynav" style={{marginBottom:20}}>
        <ul id="category-level-1">
          
         {results.sub_categories.map(item => (
          <li>
           <NavLink
           to={`/productsgallery/${props.maincategory}/${item.id}`}
           > {item.SubcategoryName.toUpperCase()}</NavLink>
          </li>
         ))}
        </ul>
        {/* PRICE REFINEMENTS */}
      </div>
    )
}

export default Productsgallerynav
