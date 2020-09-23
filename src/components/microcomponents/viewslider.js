import React, { useState } from 'react';



import testimg from '../../images/noimagesmall.png'
import { CSSTransition, SwitchTransition, Transition } from 'react-transition-group'

export default function Viewslider(props) {


  const { image, other_images } = props.results;

  const allimages = [image, ...other_images];


  const button = {
    height: 100,
    width: 100,
    opacity: 0.5,
    cursor: "pointer",
    transition: "opacity 1s"
  }





  const [current, setCurrent] = useState(0);
  const [inProp, setInProp] = useState(false);


  function handleChange(e) {
    const value = parseInt(e.target.alt);
    console.log(e.target)

    var arr = Array.from(e.target.parentNode.parentNode.children);
    arr.forEach((item) => {
      item.style.opacity = 0.5;
    }


    )
    e.target.parentNode.style.opacity = 1;

    setCurrent(value);


  }


  const url = "https://strapi.ris.co"


  if (other_images.length == 0) {


    return (
      <div className="row">

        <div className="col-md-12">


          <img src={`${url}${allimages[current].url}`} />


        </div>
      </div>
    )

  }









  return (
    <React.Fragment>



      <div className="row">

        <div className="col-md-12">
          <CSSTransition in={current} timeout={200} classNames="view">
            <img src={`${url}${allimages[current].url}`} />
          </CSSTransition>
        </div>


        <div className="col-md-12" style={{ marginTop: 10 }}>
          <form style={{ display: "flex", justifyContent: "center" }} >

            <div style={button}> <img src={`${url}${allimages[0].url}`} onClick={handleChange} alt="0" /></div>
            <div style={button}> <img src={`${url}${allimages[1].url}`} onClick={handleChange} alt="1" /></div>
            <div style={button}> <img src={`${url}${allimages[2].url}`} onClick={handleChange} alt="2" /></div>
            <div style={button}> <img src={`${url}${allimages[3].url}`} onClick={handleChange} alt="3" /></div>
            <div style={button}> <img src={`${url}${allimages[4].url}`} onClick={handleChange} alt="4" /></div>

          </form>
        </div>

      </div>
    </React.Fragment >
  )

}