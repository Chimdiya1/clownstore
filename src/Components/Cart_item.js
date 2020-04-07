import React from 'react';

const CartItem = (props) => {
    const item = props.item
    return (
      <div className="cart_item">
        <div className="col">
          <img className="item_pic" src={item.img} alt={item.name}></img>
        </div>
        <div className="col"  className="details">
          <div className="row_a">
            <p>Item</p>
            <p>Amount</p>
            <p>Price</p>
          </div>
          <div className="row_b">
            <p>{item.name}</p>
            <p>
              <input type="text"></input>
            </p>
            <p>{item.price}</p>
          </div>
        </div>
      </div>
    );
}
 
export default CartItem;