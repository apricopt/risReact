import React from "react";

import useDataFetching from "../../containers/useDataFetching";
import Producttile from "../../components/microcomponents/producttile";

function Maylike(props) {
  const { loading, results, error } = useDataFetching(
    `https://node.ris.co/inventory/maylike/${props.cat[0]}`
  );

  let component;

  let maylikeitems;
  if (loading || !results[0]) {
    return <></>;
  } else {
    console.log("G else aali chal gayi");
    let random1 = results[Math.floor(Math.random() * results.length)];
    let random2 = results[Math.floor(Math.random() * results.length)];
    let random3 = results[Math.floor(Math.random() * results.length)];

    let randomfinal = [random1, random2, random3];

    maylikeitems = randomfinal.map((item) => <Producttile product={item} />);
    console.log("g yeh result agya hai ", results);
  }

  return (
    <React.Fragment>
      <h2>You May also like:</h2>
      {maylikeitems}
    </React.Fragment>
  );
}

export default Maylike;
