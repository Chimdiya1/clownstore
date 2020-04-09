import React, { useContext } from 'react';
import '../productPage.css';
import { CartContext } from '../contexts/CartContext';
import { Link } from 'react-router-dom';
import Prompt from './Prompt';

const ProductPage = (props) => {
  const navStyle = {
    textDecoration: 'none',
  };
  const { addItem } = useContext(CartContext);
  const { added, changeAdd } = useContext(CartContext);

  const item = props.item;
  return (
    <div className="product_page">
      <div className="row1">
        <img src={item.img} alt={item.name}></img>
      </div>
      <div className="row2">
        <div className="inner_row">
          <div className="inner">
            <p className="name">{item.name}</p>
            <p className="id">#{item.id}</p>
          </div>
          <p className="price">${item.price}</p>
        </div>
        <p className="desc">{item.Desc}</p>
      </div>
      <Prompt />
      <div className="row3">
        <button
          onClick={() => {
            if (!added) {
              changeAdd();
            }

            addItem(item);
          }}
          className="to_cart"
        >
          Add to Cart
        </button>
        <Link id="see_more" to="/products" style={navStyle}>
          <button className="see_more">See More</button>
        </Link>
      </div>
    </div>
  );
};

export default ProductPage;
