import React from 'react'
import { NavLink } from 'react-router-dom'



import useDataFetching from '../containers/useDataFetching'

function MicroNav(props) {



    const { loading, results, error } = useDataFetching(`https://strapi.ris.co/sub-categories/${props.subcategory}`);

    let dataToRender;
    let maincategoryprop;

    if (loading) {
        return <> </>
    }

    if (results.managingcats == undefined || results.managingcats == null) {
        return (
            <> </>
        )
    }




    return (
        <div className="refinement Home category-refinement productgallerynav" style={{ marginBottom: 20 }}>
            <ul id="category-level-1">


                {results.managingcats.micro_categories.map(item => (
                    <li>
                        <NavLink
                            to={`/productsgallery/${props.maincategory}/${props.subcategory}/${item.id}`}
                        > {item.microCategoryName.toUpperCase()}</NavLink>
                    </li>
                ))}
            </ul>
            {/* PRICE REFINEMENTS */}
        </div>
    )
}

export default MicroNav
