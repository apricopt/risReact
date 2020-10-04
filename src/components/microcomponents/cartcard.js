import React from "react";

function Cartcard(props) {
  const { product } = props;

  // currency formatter
  function format(x) {
    x = x.toString();
    var pattern = /(-?\d+)(\d{3})/;
    while (pattern.test(x)) x = x.replace(pattern, "$1,$2");
    return x;
  }

  // returning index to remove element from array
  function remove(id) {
    return id == product.id;
  }

  return (
    <tr className="cart-row desktop-cart">
      <td className="item-image">
        <img
          src={`data:image/gif;base64,${product.image_1920}`}
          title={product.name}
        />
      </td>
      <td className="item-details">
        <div className="product-list-item">
          <div className="name">
            <a href="">{product.name}</a>
          </div>
          <div className="sku">
            <span className="label">Item No </span>
            <span className="value">{product.itemcode}</span>
          </div>
          <div className="attribute">
            <span className="label">color</span>
            <span className="value">{product.color}</span>
          </div>
          <ul className="product-availability-list">
            {/* <li className="on-order">Pre-Order</li> */}
          </ul>
          <div>
            <a className="add-to-wishlist" href="">
              Add to Wishlist
            </a>
          </div>
        </div>
        {/* 
		<div class="item-edit-details">
			
				
								
				
				<a  href="" >Edit Details</a>
			
		</div>
		 */}
      </td>
      <td className="item-quantity">
        <span>{product.quantity}</span>
        {/* <select name="dwfrm_cart_shipments_i0_items_i0_quantity">
                    <option value={1} selected>1</option>
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
                </select> */}
      </td>
      <td className="item-price">
        <span className="price-sales">SR {format(product.list_price)}</span>
      </td>
      <td className="item-total">
        <span className="price-total">
          SR {format(product.list_price * product.quantity)}
        </span>
      </td>
      <td className="item-remove">
        <div className="item-user-actions">
          <button
            className="button-text"
            onClick={(e) => {
              e.preventDefault();
              console.log(e.target.parentNode.parentNode.parentNode);
              console.log(e.target.value);
              console.log(remove(product.id));
            }}
            value={product}
          />
        </div>
      </td>
    </tr>
  );
}

export default Cartcard;
