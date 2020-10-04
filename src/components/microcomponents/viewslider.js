import React, { useState } from "react";

import testimg from "../../images/noimagesmall.png";
import {
  CSSTransition,
  SwitchTransition,
  Transition,
} from "react-transition-group";

export default function Viewslider(props) {
 
  const { images } = props;

  const button = {
    height: 100,
    width: 100,
    opacity: 0.7,
    cursor: "pointer",
    transition: "opacity 0.2s",
    padding: "0px 3px",
  };

  const [current, setCurrent] = useState(0);
  const [inProp, setInProp] = useState(false);

  function handleChange(e) {
    const value = parseInt(e.target.alt);
    

    var arr = Array.from(e.target.parentNode.parentNode.children);
    arr.forEach((item) => {
      item.style.opacity = 0.5;
    });
    e.target.parentNode.style.opacity = 1;

    setCurrent(value);
  }

  if (images.length == 1) {
    return (
      <div className="row">
        <div className="col-md-12">
          {/* <img src={`${url}${allimages[current].url}`} /> */}

          <img src={`data:image/gif;base64,${images[0]}`} />
        </div>
      </div>
    );
  }

  return (
    <React.Fragment>
      <div className="row">
        <div className="col-md-12">
          <CSSTransition in={current} timeout={200} classNames="view">
            <img src={`data:image/gif;base64,${images[current]}`} />
          </CSSTransition>
        </div>

        <div className="col-md-12" style={{ marginTop: 10 }}>
          <form style={{ display: "flex", justifyContent: "center" }}>
            {images.map((item) => (
              <div style={button}>
                {" "}
                <img
                  src={`data:image/gif;base64,${images[images.indexOf(item)]}`}
                  onClick={handleChange}
                  alt={images.indexOf(item)}
                />
              </div>
            ))}

            {/* <div style={button}>
              {" "}
              <img
                src={`data:image/gif;base64,${images[1]}`}
                onClick={handleChange}
                alt="1"
              />
            </div>
            <div style={button}>
              {" "}
              <img
                src={`data:image/gif;base64,${images[2]}`}
                onClick={handleChange}
                alt="2"
              />
            </div>
            <div style={button}>
              {" "}
              <img
                src={`data:image/gif;base64,${images[3]}`}
                onClick={handleChange}
                alt="3"
              />
            </div>
            <div style={button}>
              {" "}
              <img
                src={`data:image/gif;base64,${images[4]}`}
                onClick={handleChange}
                alt="4"
              />
            </div> */}
          </form>
        </div>
      </div>
    </React.Fragment>
  );
}
