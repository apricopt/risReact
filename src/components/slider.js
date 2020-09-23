import React from 'react';
import Slider from 'react-slick'



export default   class SimpleSlider extends React.Component {

  constructor(props) {
    super(props);

  }




  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      vertical: true,
      pauseOnHover:false
    };



  console.log(this.props);
    const style = { width: "100vw", height: "500px", objectFit: "cover" };

    return (
      <Slider {...settings} style={{ width: "100%" }}>
        <div>
          <img src={this.props.Background1} style={style} />
        </div>
        <div>
          <img src={this.props.Background2} style={style} />
        </div>
        <div>
          <img src={this.props.Background3} style={style} />
        </div>
        
      </Slider>
      );
    }
  }




  export   class SimpleSliderDynamic extends React.Component {

    constructor(props) {
      super(props);
  
    }
  
  
  
  
    render() {
      var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        vertical: true,
        pauseOnHover:false
      };
  
  
  
    console.log(this.props);
      const style = { width: "100vw", height: "100vh", objectFit: "cover" };
  
      return (
        <Slider {...settings} style={{ width: "100%" }}>
          <div>
            <img src={`https://strapi.ris.co${this.props.data[0].url}`} style={style} />
          </div>
          <div>
            <img src={`https://strapi.ris.co${this.props.data[1].url}`} style={style} />
          </div>
          <div>
            <img src={`https://strapi.ris.co${this.props.data[2].url}`} style={style} />
          </div>
          
        </Slider>
        );
      }
    }






  export  class CenterSlider extends React.Component {
    render() {
      const settings2 = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 3,
        speed: 500
      };
      return (
        <div>
          <h2>Center Mode</h2>
          <Slider {...settings2}>
            <h1>Waiting for backend</h1>
            {/* <div>
              2
            </div>
            <div>
              <h3>2</h3>
            </div>
            <div>
              <h3>3</h3>
            </div>
            <div>
              <h3>4</h3>
            </div>
            <div>
              <h3>5</h3>
            </div>
            <div>
              <h3>6</h3>
            </div> */}
          </Slider>
        </div>
      );
    }
  }