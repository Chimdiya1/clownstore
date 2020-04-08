import React from 'react';
import '../productItem.css';
import { Link } from 'react-router-dom';

const ProductItem = (props) => {
  const navStyle = {
    textDecoration: 'none',
    color:'black'
  };
    const item = props.item
  return (
    <div className="product_item">
      <div className="col1">
        <img src={item.img} alt={item.name}></img>
        <p className="item_name">{item.name}</p>
        <p className="item_price">${item.price}</p>
      </div>
      <div className="col2">
        <p>{item.shortDesc}</p>
        <Link id="to_details"style={navStyle} to={'/' + item.id}>
          <button  className="details">
            Details
          </button>
        </Link>
      </div>
    </div>
  );
}
 
export default ProductItem;