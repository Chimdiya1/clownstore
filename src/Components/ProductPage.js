import React from 'react';
import '../productPage.css';
const ProductPage = (props) => {
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
            <p className="id">{item.id}</p>
          </div>
          <p className="price">{item.price}</p>
        </div>
        <p className="desc">{item.Desc}</p>
      </div>
      <div className="row3">
        <button className="to_cart">Add to Cart</button>
        <button className="see_more">See More</button>
      </div>
    </div>
  );
};

export default ProductPage;
