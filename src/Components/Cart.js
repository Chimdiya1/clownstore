import React from 'react';
import cart from './favicon-32x32.png';
const Cart = () => {
    return (
      <div>
        <p className="cart_items">1</p>
        <img src={cart} alt="Cart" height="20" width="20"></img>
      </div>
    );
}
 
export default Cart;