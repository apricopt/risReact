import React, { useContext } from "react";

// importing sections here
import Footer from "../components/footer";
import Navmain from "../sections/navmain";
import Productsgallerynav from "../components/productsgallerynav";
import MicroNav from "../components/micronav";
import Producttile, {
  ProducttileTest,
} from "../components/microcomponents/producttile";

import useDataFetching from "../containers/useDataFetching";
import useDataPosting from "../containers/useDataPosting";
import Loader from "../components/loader";

import { CatContext } from "../contexts/catcontext";

function Productgallery(props) {
  const [cat, setCat] = useContext(CatContext);

  if (!cat) {
    return <Loader />;
  }

  let categ_id;

  if (props.match.params.micro) {
    categ_id = {
      categ_id: [parseInt(props.match.params.micro)],
    };
  } else if (props.match.params.sub) {
    let children = cat
      .find((item) => item.id == props.match.params.main)
      .subcategories.find((item) => props.match.params.sub == item.id).children;

    categ_id = {
      categ_id: [
        ...children,
        cat
          .find((item) => item.id == props.match.params.main)
          .subcategories.find((item) => props.match.params.sub == item.id).id,
      ],
    };
  } else {
    categ_id = {
      categ_id: cat.find((item) => item.id == props.match.params.main).children,
    };
  }

  console.log(categ_id);
  const { loading, results, error } = useDataPosting(
    `https://node.ris.co/ecomcat/products/${props.match.params.main}/${props.match.params.sub}/${props.match.params.micro}`,
    categ_id
  );

  let dataToRender;
  let maincategoryprop;
  let showMicro;

  if (loading || results.length == 0) {
    return <Loader />;
  } else {
    console.log(results);

    dataToRender = results.map((object) => <Producttile product={object} />);

    if (props.match.params.micro) {
      maincategoryprop = cat.find((item) => item.id == props.match.params.main);
      showMicro = (
        <MicroNav
          maincategory={props.match.params.main}
          subcategory={maincategoryprop.subcategories.find(
            (sub) => sub.id == props.match.params.sub
          )}
        />
      );
    }

    // this is code for productgallerty nav if the category level is sub or main
    else if (props.match.params.sub) {
      
        maincategoryprop = cat.find((item) => item.id == props.match.params.main);
       
          showMicro = 
          <MicroNav
          maincategory={props.match.params.main}
          subcategory={maincategoryprop.subcategories.find(
            (sub) => sub.id == props.match.params.sub
          )}
        />
          console.log("bawa g managing cats defined hai");
        
      
    } else if (props.match.params.main) {
      maincategoryprop = cat.find((item) => item.id == props.match.params.main);

      // when use will click on the main categories then aus ne konsa aam lene jana hai micro categories mai
    }
    // // this code for product gallery nav ends here if category level is sub or main
  }

  return (
    <React.Fragment>
      <div id="wrapper" class="pt_account">
        <div id="main" class="main">
          <Productsgallerynav maincategory={maincategoryprop} />
          {showMicro}
          <div class="search-result-content">
            <div className="productContainer">
              {dataToRender}

              {/* <ProducttileTest />
                            <ProducttileTest />
                            <ProducttileTest />

                            <ProducttileTest />
                            <ProducttileTest />
                            <ProducttileTest />
                            <ProducttileTest />
                            <ProducttileTest />
                            <ProducttileTest /> */}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </React.Fragment>
  );
}

export default Productgallery;
