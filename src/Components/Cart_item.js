import React from 'react';

const CartItem = (props) => {
    const item = props.item
    return (
      <div className="cart_item">
        <div>
          <img src={item.img} alt={item.name}></img>
        </div>
        <div>
          <div>
            <p>Item</p>
            <p>Amount</p>
            <p>Price</p>
          </div>
          <div>
            <p className="item_name">{item.name}</p>
            <p className="item_price">{item.price}</p>
          </div>
        </div>
      </div>
    );
}
 
export default CartItem;