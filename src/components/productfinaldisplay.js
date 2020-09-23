import React, { useContext, useState, useEffect } from 'react'

import img1 from "../images2/product.png"

import Viewslider from '../components/microcomponents/viewslider'



import { CartContext } from '../contexts/cartcontext';
import { LoginContext } from '../contexts/logincontext';

import Producttile from '../components/microcomponents/producttile'


import { toast } from 'react-toastify';


import imgtemp from '../images/testimage2.png'

import useDataFetching from '../containers/useDataFetching';





function Productfinaldisplay(props) {









  const { results } = props;

  const [cart, setCart] = useContext(CartContext);
  const [login, setLogin] = useContext(LoginContext);
  const [dimensionDetail, setDimensionDetail] = useState(false);
  const [shippingDetail, setShippingDetail] = useState(false);
  // you may also like starts
  const [loading, setLoading] = useState(true);
  const [maylike, setMaylike] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetch(`https://strapi.ris.co/sub-categories/${results.sub_category.id}`);
        const json = await data.json();


        if (json) {
          setLoading(false);
          setMaylike(json);
        }
      } catch (error) {
        setLoading(false);
        setError(error.message);
      }

      setLoading(false);
    }

    fetchData();

    // axios.get(dataSource).then((response) => {
    //   setResults(response.data);
    //   setLoading(false);

    // }).catch(err => console.log(err));
  }, []);








  // you may also like ends



  // controlling how much qunatity user select
  const [quantity, setQuantity] = useState(1);
  function handleChange(e) {


    switch (e.target.name) {
      case "quantity": setQuantity(e.target.value);
        break;


    }
  }
  //  qunatity controller ends

  function handleAddtoCart(e) {
    const product = { ...results, quantity: quantity };
    console.log(product);
    setCart(cart.concat(product));
    toast(`${results.productName} has been added into cart!`)




  }


  // for items you may like
  // let component;

  // if (loading || items[0] == undefined) {
  //   return <></>
  // }


  // currency formatter
  function numberWithCommas(x) {
    x = x.toString();
    var pattern = /(-?\d+)(\d{3})/;
    while (pattern.test(x))
      x = x.replace(pattern, "$1,$2");
    return x;
  }



  // you may lik


  let maylikeitems;
  if (loading || maylike.items == undefined) {
    maylikeitems = <> </>;

  } else {

    let random1 = maylike.items[Math.floor(Math.random() * maylike.items.length)];
    let random2 = maylike.items[Math.floor(Math.random() * maylike.items.length)];
    let random3 = maylike.items[Math.floor(Math.random() * maylike.items.length)];

    let randomfinal = [random1, random2, random3]

    maylikeitems = randomfinal.map(item => (
      <Producttile product={item} />

    ))
  }



  return (
    <div className="container-fluid">
      <div className=" row" >



        <div className=" col-md-8 " >
          <div className="product-primary-image">
            <h2 className="visually-hidden">Primary image</h2>
            {/* <img itemProp="image" id="pdp-primary-image" className="primary-image productimgDisplay" src={`https://strapi.ris.co${results.image.url}`} /> */}
            {/* <img itemProp="image" id="pdp-primary-image" className="primary-image productimgDisplay" src={imgtemp} /> */}
            <Viewslider id="pdp-primary-image" className="primary-image productimgDisplay" results={results} />
          </div>


          {/* <div className="product-primary-image" style={{ display: "flex", justifyContent: "space-between" }}>

            
            <img itemProp="image" id="pdp-primary-image " className="primary-image chotimage" src={imgtemp} />
            <img itemProp="image" id="pdp-primary-image " className="primary-image chotimage" src={imgtemp} />
            <img itemProp="image" id="pdp-primary-image" className="primary-image chotimage" src={imgtemp} />
            <img itemProp="image" id="pdp-primary-image" className="primary-image chotimage" src={imgtemp} />
          </div> */}
        </div>









        <span id="spnPinterest" className="spnPinterest" onmouseover="document.getElementById('spnPinterest').style.display='block'">
        </span>


        <div className=" col-md-4" >
          <div className="product-detail-inner">
            <div className="product-detail-subinner">
              <h1 className="product-name apnafont" itemProp="name">{results.productName}</h1>
              <div id="product-content">
                <h2 className="visually-hidden">Details</h2>
                <span className="visually-hidden" itemProp="url"></span>
                <div className="product-material">
                </div>
                <div className="product-price">
                  <span className="price-sales">SR {numberWithCommas(results.sellingPrice)}</span>
                  {console.log()}
                </div>
                <div className="product-add-to-cart">
                  <div className="pdp-availability-block" style={{ display: 'none' }}>
                    <div className="availability">
                      <span className="label">Availability:&nbsp;</span>
                      <span className="value">
                        <div className="availability-msg">

                        </div>
                      </span>
                      <div className="availability-results online-stock" />
                    </div>
                  </div>

                  <legend className="visually-hidden">Add to cart options</legend>
                  <div className="product-variations" data-current="{}">
                    <div className="swatch-thumb">
                      <b><span id="swatch-thumb-title" /></b>
                    </div>
                    <h2 className="visually-hidden">Variations</h2>
                    <span>
                      <span className="attribute ">
                        <span className="label label-bold">Color : {results.color}</span>
                        <div className="value">

                          <span className="selected-value otheroptions  sub-label-val" title />
                          <span className="selected-value customoptdesc" />
                        </div>
                      </span>
                    </span>
                  </div>
                  <div className="availability-block" style={{ display: 'none' }}>
                    <div className="availability">
                      <span className="label">Availability:&nbsp;</span>
                      <span className="value">
                        <div className="availability-msg">
                          <p className="preorder-msg">Pre-Order</p>
                        </div>
                      </span>
                      <div className="availability-results online-stock" />
                    </div>
                  </div>
                  <input type="hidden" name="uuid" id="uuid" defaultValue />
                  <input type="hidden" name="cartAction" id="cartAction" defaultValue="update" />
                  <input type="hidden" name="pid" id="pid" defaultValue="FTA20042" />
                  <div className="quantity">
                    <label htmlFor="Quantity">Quantity</label>
                    <select name="quantity" id="Quantity" value={quantity} onChange={handleChange} data-available={0} className>
                      <option value={1}>1</option>
                      <option value={2}>2</option>
                      <option value={3}>3</option>
                      <option value={4}>4</option>
                      <option value={5}>5</option>
                      <option value={6}>6</option>
                      <option value={7}>7</option>
                      <option value={8}>8</option>
                      <option value={9}>9</option>
                      <option value={10}>10</option>
                      <option value={11}>11</option>
                      <option value={12}>12</option>
                      <option value={13}>13</option>
                      <option value={14}>14</option>
                      <option value={15}>15</option>
                      <option value={16}>16</option>
                      <option value={17}>17</option>
                      <option value={18}>18</option>
                      <option value={19}>19</option>
                      <option value={20}>20</option>
                      <option value={21}>21</option>
                      <option value={22}>22</option>
                      <option value={23}>23</option>
                      <option value={24}>24</option>
                      <option value={25}>25</option>
                      <option value={26}>26</option>
                      <option value={27}>27</option>
                      <option value={28}>28</option>
                      <option value={29}>29</option>
                      <option value={30}>30</option>
                      <option value={31}>31</option>
                      <option value={32}>32</option>
                      <option value={33}>33</option>
                      <option value={34}>34</option>
                      <option value={35}>35</option>
                      <option value={36}>36</option>
                      <option value={37}>37</option>
                      <option value={38}>38</option>
                      <option value={39}>39</option>
                      <option value={40}>40</option>
                      <option value={41}>41</option>
                      <option value={42}>42</option>
                      <option value={43}>43</option>
                      <option value={44}>44</option>
                      <option value={45}>45</option>
                      <option value={46}>46</option>
                      <option value={47}>47</option>
                      <option value={48}>48</option>
                      <option value={49}>49</option>
                      <option value={50}>50</option>
                      <option value={51}>51</option>
                      <option value={52}>52</option>
                      <option value={53}>53</option>
                      <option value={54}>54</option>
                      <option value={55}>55</option>
                      <option value={56}>56</option>
                      <option value={57}>57</option>
                      <option value={58}>58</option>
                      <option value={59}>59</option>
                      <option value={60}>60</option>
                      <option value={61}>61</option>
                      <option value={62}>62</option>
                      <option value={63}>63</option>
                      <option value={64}>64</option>
                      <option value={65}>65</option>
                      <option value={66}>66</option>
                      <option value={67}>67</option>
                      <option value={68}>68</option>
                      <option value={69}>69</option>
                      <option value={70}>70</option>
                      <option value={71}>71</option>
                      <option value={72}>72</option>
                      <option value={73}>73</option>
                      <option value={74}>74</option>
                      <option value={75}>75</option>
                      <option value={76}>76</option>
                      <option value={77}>77</option>
                      <option value={78}>78</option>
                      <option value={79}>79</option>
                      <option value={80}>80</option>
                      <option value={81}>81</option>
                      <option value={82}>82</option>
                      <option value={83}>83</option>
                      <option value={84}>84</option>
                      <option value={85}>85</option>
                      <option value={86}>86</option>
                      <option value={87}>87</option>
                      <option value={88}>88</option>
                      <option value={89}>89</option>
                      <option value={90}>90</option>
                      <option value={91}>91</option>
                      <option value={92}>92</option>
                      <option value={93}>93</option>
                      <option value={94}>94</option>
                      <option value={95}>95</option>
                      <option value={96}>96</option>
                      <option value={97}>97</option>
                      <option value={98}>98</option>
                      <option value={99}>99</option>
                      <option value={100}>100</option>
                    </select>
                    {}

                    {login.status ? <button id="add-to-cart" type="button" title="Select color" value="Select color" className="add-to-cart apnafont" onClick={handleAddtoCart} >Add to Cart</button> : <button id="add-to-cart" type="button" title="Select color" value="Select color" className="add-to-cart-disabled apnafont" disabled="disabled">Add to Cart<span style={{ fontSize: 10 }}><br></br>(Login Required)</span></button>}

                  </div>



                  {/* sharing butotns starts */}

                  <h2 style={{ paddingTop: 10 }}>SHARE: &nbsp;
{/* 
                  <span>
                      <a href="" target="_blank">
                        <span className="fa fa-facebook"></span>
                      </a>
                    </span>
                    
                    <a data-pin-do="buttonPin" data-pin-count="above" data-pin-tall="true" href="https://www.pinterest.com/pin/create/button/?url=https%3A%2F%2Fwww.flickr.com%2Fphotos%2Fkentbrew%2F6851755809%2F&media=https%3A%2F%2Ffarm8.staticflickr.com%2F7027%2F6851755809_df5b2051c9_z.jpg&description=Next%20stop%3A%20Pinterest"></a>


                    <a data-pin-do="buttonBookmark" data-pin-tall="true" href="https://www.pinterest.com/pin/create/button/"></a>
                    
                    
                    */}
                    <span>
                      <a target="_blank" href={`//www.pinterest.com/pin/create/button/?url=${`https://strapi.ris.co${results.image.url}`}`} class="pin-it-button" count-layout="none" ><img src="//assets.pinterest.com/images/pidgets/pin_it_button.png" alt="Pin it" /></a>
                    </span>


                  </h2>

                  {/* sharing buttons ends */}







                  <a className="add-to-wishlist bordered-button" href="../../on/demandware.store/Sites-KellyWearstler-Site/default/Cart-AddToWishlista5b2.html?pid=FTA20042" title="Add to Wishlist">
                    Add to Wishlist
                  </a>
                </div>{/*  end details block */}
                <div className="technical-information">
                  <div className="technical-information-title">Technical information</div>
                  <ul className="js-pdp-popups">
                    <li className="js-pdp-popup-item"><a className="a-js-dimension-popup" onClick={() => setDimensionDetail(!dimensionDetail)}>Dimensions</a></li>
                    <li className="js-pdp-popup-item"><a className="a-js-shipping-popup" onClick={() => setShippingDetail(!shippingDetail)}>Shipping</a></li>
                  </ul>
                </div>
                {dimensionDetail ?
                  <div className="js-dimension-popup dimension-popup desktop-only">
                    <span className="close" onClick={() => setDimensionDetail(false)}>X</span>
                    <div className="dimension-popup-inner">
                      <div className="dimension-popup-subinner">
                        {results.dimensions ? results.dimension : <span>No information</span>}
                      </div>
                    </div>
                  </div>
                  : <> </>}
                {shippingDetail ?
                  <div className="js-shipping-popup dimension-popup desktop-only">
                    <span className="close" onClick={() => setShippingDetail(false)}>X</span>
                    <div className="dimension-popup-inner">
                      <div className="dimension-popup-subinner">
                        <span>We are currently working on this feature.</span>
                      </div>
                    </div>
                  </div>
                  : <> </>}
                <div className="dimension-popup-overlay">&nbsp;</div>
                <div className="short-description">
                  <div className="text toggle-content apnafont">{results.description}this is is just for sake of testing the structure.this is is just for sake of testing the structure.this is is just for sake of testing the structure.this is is just for sake of testing the structure.this is is just for sake of testing the structure.this is is just for sake of testing the structure.this is is just for sake of testing the structure.</div>
                </div>

                <div className="short-description">
                  <div className="text toggle-content apnafont" style={{ fontWeight: 700, fontSize: 12 }}>For additional information, Please contact our sales agent via live chat or simply drop an email at reachus@ris.co</div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>





      {/* you may also like starts */}
      <h2>You May also like:</h2>
      <div style={{ paddingTop: 10 }}>

        {maylikeitems}


      </div>



      {/* you also like ends */}


    </div>



  )
}

export default Productfinaldisplay
